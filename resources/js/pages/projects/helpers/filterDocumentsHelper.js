const filterDocumentSelectCodesSelector = '.select-codes';

export default class FilterDocumentsHelper {
    static applyHasFilter(documents, codes) {
        let response = [];

        for (let i = 0; i < documents.length; i++) {
            let document = documents[i];
            let quoteCodes = FilterDocumentsHelper._getQuoteCodeIds(document);
            let hasAllCodes = true;

            for (let j = 0; j < codes.length; j++) {
                let codeId = codes[j].id;

                if (!quoteCodes.includes(codeId)) {
                    hasAllCodes = false;
                    break;
                }
            }

            if (hasAllCodes) {
                response.push(document);
            }
        }

        return response;
    }

    static applyAnyFilter(documents, codes) {
        let response = [];

        for (let i = 0; i < documents.length; i++) {
            let document = documents[i];
            let quoteCodes = FilterDocumentsHelper._getQuoteCodeIds(document);

            for (let j = 0; j < codes.length; j++) {
                let codeId = codes[j].id;

                if (quoteCodes.includes(codeId)) {
                    response.push(document);
                    break;
                }
            }
        }

        return response;
    }

    static applyOnlyFilter(documents, codes) {
        let response = [];

        for (let i = 0; i < documents.length; i++) {
            let document = documents[i];
            let quoteCodes = FilterDocumentsHelper._getQuoteCodeIds(document);
            let hasAllCodes = true;

            for (let j = 0; j < codes.length; j++) {
                let codeId = codes[j].id;

                if (!quoteCodes.includes(codeId)) {
                    hasAllCodes = false;
                    break;
                }
            }

            if (hasAllCodes) {
                response.push(document);
            }
        }

        return response;
    }

    static applyDoesntHaveFilter(documents, codes) {
        let response = [];

        for (let i = 0; i < documents.length; i++) {
            let document = documents[i];
            let quoteCodes = FilterDocumentsHelper._getQuoteCodeIds(document);
            let hasAtLeastOneCode = false;

            for (let j = 0; j < codes.length; j++) {
                let codeId = codes[j].id;

                if (quoteCodes.includes(codeId)) {
                    hasAtLeastOneCode = true;
                    break;
                }
            }

            if (!hasAtLeastOneCode) {
                response.push(document);
            }
        }

        return response;
    }

    static updateSelectOptions(selects) {
        let codeIds = window.CodeManager.repository.ids();

        selects.each(function (pos, el) {
            let select = $(el).find(filterDocumentSelectCodesSelector);
            let existingCodeOptions = [];

            // remove existing options if code doesn't exists anymore
            select.find('option').each(function (pos, opt) {
                opt = $(opt);

                if (!codeIds.includes(opt.val())) {
                    opt.remove();
                } else {
                    existingCodeOptions.push(opt.val());
                }
            });

            // add missing options
            for (let i = 0; i < codeIds.length; i++) {
                if (!existingCodeOptions.includes(codeIds[i])) {
                    let code = window.CodeManager.repository.get(codeIds[i]);
                    let option = new Option(code.name, code.id);
                    $(option).attr('data-color', code.color);

                    select.append(option);
                }
            }

            select.trigger('change');
        });
    }

    static _getQuoteCodeIds(document) {
        let quotes = window.QuoteManager.repository.getForDocument(document);
        return quotes.map(function (quote) {
            return quote.code.id;
        });
    }

}
