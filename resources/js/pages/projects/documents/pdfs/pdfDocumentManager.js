import PdfDocumentUiManager from "./pdfDocumentUiManager";
import DocumentManager from "../documentManager";
import PdfViewer from "./viewer/pdfViewer";
import PdfQuoteManager from "./pdfQuoteManager";

export default class PdfDocumentManager {

    constructor() {
        this.uiManager = new PdfDocumentUiManager(this);
        this.pdfQuoteManager = new PdfQuoteManager(this);

        this.currentDocument = null;
    }


    // ---------------- public functions ----------
    async add(file, progressReport) {
        return readLocalFile(file).then(fileBase64 => {
            return DocumentManager.getInstance().add({
                name: file.name,
                type: 'pdf',
                file: fileBase64,
            }, progressReport).then(document => {
                document.content = fileBase64;
            });
        });
    }

    update(document, data) {
        if (this.currentDocument === document) {
            document.showDocumentContainer.find('.document-name').html(document.name);
        }
    }

    remove(document) {
        if (isset(this.currentDocument)) {
            this._destroyViewerInstance(this.currentDocument.viewer);
        }
    }

    async show(document) {
        let self = this;

        return new Promise((resolve, reject) => {
            if (isset(self.currentDocument) && self.currentDocument.document === document) {
                setTimeout(() => {
                    document.showDocumentContainer.show();
                    self.currentDocument.viewer.textSelectionComponent.showHighlights(null);
                    resolve(false);
                }, 500);
            } else {
                let markup = $('.pdf-document.markup');

                let newContainer = markup.clone();
                newContainer.removeClass('markup');

                newContainer.find('.document-name').html(document.name);
                markup.parent().append(newContainer);

                document.showDocumentContainer = newContainer;
                document.showDocumentContainer.show();

                if (isset(self.currentDocument)) {
                    self._destroyViewerInstance(self.currentDocument.viewer);
                }

                self.uiManager.updateEventListeners(document);
                resolve(true);
            }
        }).then(instantiateNewViewer => {
            if (instantiateNewViewer) {
                let viewer = new PdfViewer(document.showDocumentContainer);

                self.currentDocument = {
                    document: document,
                    viewer: viewer,
                };

                return viewer.open(document.content).then(result => {
                    return self.pdfQuoteManager.loadQuotesForCurrentDocument();
                });
            }

            return true;
        }).catch(reason => {
            console.error(reason);
            throw 'fatal';
        })
    }

    async updateQuotes(quotes) {
        return this.pdfQuoteManager.updateQuotes(quotes);
    }

    _destroyViewerInstance(viewer) {
        viewer.pdfLoadingTask.destroy();
        viewer.pdfDocument.destroy();
    }

    _showCurrentDocument() {

    }

    _showNewDocument() {

    }

    // --------- static functions ----------
    static getInstance() {
        if (PdfDocumentManager.instance === undefined) {
            PdfDocumentManager.instance = new PdfDocumentManager();
        }

        return PdfDocumentManager.instance;
    }


}
