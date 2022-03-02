import Quote from "./quote";
import QuoteRepository from "./quoteRepository";
import BaseManager from "../baseClasses/baseManager";
import DocumentManager from "../documents/documentManager";
import CodeManager from "../codes/codeManager";
import AjaxHelper from "../helpers/ajaxHelper";

export default class QuoteManager extends BaseManager {

    _initialize() {
        this.repository = new QuoteRepository();
    }


    // ------------------- quotes crud -----------------------
    async add(document, codes, data) {
        let self = this;

        const dataToSend = {
            ...data,
            document_id: document.id,
            code_id: codes.map(code => code.id),
            extra_data: data.extraData,
            data: {text: data.text},
        };

        delete dataToSend.extraData;
        delete dataToSend.text;

        return AjaxHelper.ajaxCall({
                method: 'POST',
                url: appRoutes.quotes.store,
                data: dataToSend,
            }
        ).then(async function (result) {
            let codeManager = CodeManager.getInstance();

            return self.instantiateQuote(document, codes, {
                ...result,
                extraData: result.extra_data,
                text: result.data.text,
                document: document,
                codes: result.codes.map(codeId => codeManager.repository.get(codeId)),
            });
        });
    }

    instantiateQuote(document, codes, data) {
        let quote = new Quote({
            ...data,
            document: document,
            codes: codes,
        });
        this.repository.add(quote);

        DocumentManager.getInstance().updateQuotesCount(document, '+1');

        quote.codes.forEach(code => {
            CodeManager.getInstance().updateQuotesCount(code, '+1');
        });

        return quote;
    }

    async update(quote, data) {
        return AjaxHelper.ajaxCall({
                method: 'PUT',
                url: appRoutes.quotes.update.replace('#quoteId', quote.id),
                data: data
            }
        ).then(result => {
            try {
                quote.updateData({
                    ...result,
                    document: quote.document,
                    codes: result.codes.map(t => CodeManager.getInstance().repository.get(t.id)),
                });

                quote.codes.forEach(code => {
                    CodeManager.getInstance().updateQuotesCount(code);
                });
            } catch (e) {
                console.error(e);
                throw 'fatal';
            }
        });
    }

    async remove(quote) {
        let self = this;

        return AjaxHelper.ajaxCall({
                method: 'DELETE',
                url: appRoutes.quotes.destroy.replace('#quoteId', quote.id)
            }
        ).then(result => {
            try {
                DocumentManager.getInstance().updateQuotesCount(quote.document, '-1');

                quote.codes.forEach(code => {
                    CodeManager.getInstance().updateQuotesCount(code, '-1');
                });

                self.repository.remove(quote);
                return result;
            } catch (e) {
                console.error(e);
                throw 'fatal';
            }
        });
    }


    // --------------------- cascade changes ---------------------
    async updateCode(code) {
        let quotes = this.repository.getForCode(code);

        return DocumentManager.getInstance().updateQuotes({
            updated: quotes,
        });
    }

    async removeCode(code) {
        let quotes = this.repository.getForCode(code);
        let removed = [];
        let updated = [];

        for (let i = 0; i < quotes.length; i++) {
            let quote = quotes[i];
            if (quote.codes.length === 1) {
                quote.removeElement();
                this.repository.remove(quote);
                removed.push(quote);
            } else {
                quote.codes = quote.codes.filter(t => t.id !== code.id);
                updated.push(quote);
            }

            await DocumentManager.getInstance().updateQuotesCount(quote.document, '-1');
        }

        return DocumentManager.getInstance().updateQuotes({
            removed: removed,
            updated: updated
        });
    }

    async removeDocument(document) {
        let quotes = this.repository.getForDocument(document);
        let updatedCodes = [];

        for (let i = 0; i < quotes.length; i++) {
            let quote = quotes[i];

            for (let j = 0; j < quote.codes.length; j++) {
                if (!updatedCodes.includes(quotes[i].codes[j])) {
                    updatedCodes.push(quotes[i].codes[j]);
                }
            }

            if (isset(quote.element)) {
                quote.element.remove();
            }

            this.repository.remove(quote);
        }

        for (let i = 0; i < updatedCodes.length; i++) {
            await CodeManager.getInstance().updateQuotesCount(updatedCodes[i]);
        }
    }


    // --------------------- static functions ---------------------
    static getInstance() {
        if (QuoteManager.instance === undefined) {
            QuoteManager.instance = new QuoteManager();
            QuoteManager.instance._initialize();
        }

        return QuoteManager.instance;
    }
}
