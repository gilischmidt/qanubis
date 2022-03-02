import AppState from "./appState";

export default class SaveManager {
    constructor() {
        this.btnSave = $('#btn-save');
        this.btnLoadFile = $('#btn-load');

        this.appState = AppState.getInstance();

        this.btnLoadFile.hide();
        this.btnSave.hide();

        //this._bindEventListeners();
    }

    _bindEventListeners() {
        let manager = this;

        this.btnLoadFile.click(function () {
            if (manager.appState.hasUnsavedChanges) {
                confirmModal(null, 'All documents and codes will be replaced with the new ones. Any unsaved change will be lost forever!',
                    null, null, () => manager.showLoadModal());
            } else {
                manager.showLoadModal();
            }
        });

        this.btnSave.click(function () {
            manager.download();
        });
    }

    showLoadModal() {
        let manager = this;
        let input = $('<input type="file" accept=".qanubis"/>');
        input.hide();
        $('body').append(input);

        input.on('change', async function () {
            let el = $(this);

            if (el.val() !== undefined && el.val()) {
                let fileContent = await readLocalFile(this.files[0]);
                let stringContent = decodeURIComponent(base64ToString(fileContent));
                let decodedData = JSON.parse(stringContent);

                await manager.load(decodedData);
            }
        })

        input.click();
    }

    download() {
        if (!this._checkIfHasDataToSave()) return;

        window.UtilsHelper.showLoadingOverlay();

        let manager = this;
        let data = this._getData();
        let currentDate = new Date();
        let date = currentDate.getFullYear() + '_' + (currentDate.getMonth() + 1) + '_' + currentDate.getDate();
        let time = currentDate.getHours() + "_" + currentDate.getMinutes() + "_" + currentDate.getSeconds();
        let fileName = date + '_' + time + ' ' + projectName + '.qanubis';

        data.createdAt = currentDate.toString();
        data.appVersion = '1.0';

        let encodedData = encodeURIComponent(JSON.stringify(data));
        let uInt8 = new TextEncoder().encode(encodedData);
        const fileStream = StreamSaver.createWriteStream(fileName, {
            size: uInt8.byteLength,
        })

        new Response(encodedData).body
            .pipeTo(fileStream)
            .then(function () {
                manager.appState.notifyResolvedUnsavedChanges();
                window.UtilsHelper.hideLoadingOverlay();
                successModal('File downloaded successfully!');
            }, function () {
                window.UtilsHelper.hideLoadingOverlay();
                errorModal();
            });
    }

    async load(data) {
        window.UtilsHelper.showLoadingOverlay();

        window.UtilsHelper.reset();

        for (let i = 0; i < data.codes.length; i++) {
            window.CodeManager.add(data.codes[i]);
        }

        for (let i = 0; i < data.documents.length; i++) {
            await window.DocumentManager.add(data.documents[i], false);
        }

        for (let i = 0; i < data.quotes.length; i++) {
            data.quotes[i].code = window.CodeManager.repository.get(data.quotes[i].code_id);
            data.quotes[i].document = window.DocumentManager.repository.get(data.quotes[i].document_id);

            window.QuoteManager.add(data.quotes[i]);
        }

        // TODO: this
        // window.DocumentManager._checkDocumentsCount();
        // window.CodeManager._checkCodesCount();

        this.appState.notifyResolvedUnsavedChanges();

        window.UtilsHelper.hideLoadingOverlay();
    }

    _checkIfHasDataToSave() {
        let hasDataToSave = window.CodeManager.repository.size() !== 0
            || window.DocumentManager.repository.size() !== 0
            || window.QuoteManager.repository.size() !== 0;

        if (!hasDataToSave) {
            infoModal('There\'s nothing to save!');
        }

        return hasDataToSave;
    }

    _getData() {
        let codes = [];
        let documents = [];
        let quotes = [];

        window.CodeManager.repository.forEach((code) => codes.push(code.saveData()));
        window.DocumentManager.repository.forEach((doc) => documents.push(doc.saveData()));
        window.QuoteManager.repository.forEach((quote) => quotes.push(quote.saveData()));

        return {
            codes: codes,
            documents: documents,
            quotes: quotes,
        };
    }
}
