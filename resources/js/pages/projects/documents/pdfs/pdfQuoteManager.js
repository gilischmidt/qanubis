import QuoteManager from "../../quotes/quoteManager";
import PdfHelper from "../../helpers/pdfHelper";

export default class PdfQuoteManager {

    constructor(pdfDocumentManager) {
        this.pdfDocumentManager = pdfDocumentManager;
    }

    // --------------------- public functions -----------------------
    async add(codes, data) {
        try {
            let quote = await QuoteManager.getInstance().add(this.pdfDocumentManager.currentDocument.document, codes, data);
            return this.instantiateQuote(quote);
        } catch (e) {
            console.error(e);
            throw 'fatal';
        }
    }

    instantiateQuote(quote) {
        try {
            let element = this._getContainerForCurrentDocument().find('.pdf-quote.markup').clone();
            element.removeClass('markup');
            element.attr('data-id', quote.id);
            element.show();

            quote.element = element;

            let pages = PdfHelper.getPageStringForQuote(quote);

            element.find('.pdf-quote-page').html(pages);
            element.find('.quote-content').html(quote.text);
            element.find('.pdf-quote-comments-count').html(quote.comments.length);

            this._updateQuoteElementCodes(quote);
            this._getContainerForCurrentDocument().prepend(element);

            return quote;
        } catch (e) {
            console.error(e);
            throw 'fatal';
        }
    }

    filterQuotes(quotesToShow = []) {
        const codesIds = quotesToShow.map(c => c.id.toString());
        this._getContainerForCurrentDocument().find('.pdf-quote').not('.markup').each(function () {
            const el = $(this);

            if (!quotesToShow.length || codesIds.includes(el.attr('data-id'))) {
                el.show();
            } else {
                el.hide();
            }
        });
    }

    async loadQuotesForCurrentDocument() {
        try {
            let document = this.pdfDocumentManager.currentDocument.document;
            let quotes = QuoteManager.getInstance().repository.getForDocument(document);

            for (let i = quotes.length - 1; i >= 0; i--) {
                let quote = quotes[i];
                this.instantiateQuote(quote);
            }

            this.pdfDocumentManager.currentDocument.viewer.textSelectionComponent.quotes = quotes;
        } catch (e) {
            console.error(e);
            throw 'fatal';
        }
    }

    async remove(quote) {
        let self = this;

        return QuoteManager.getInstance().remove(quote).then(result => {
            try {
                if (!self.pdfDocumentManager.currentDocument || !self.pdfDocumentManager.currentDocument.document) return;

                quote.element.remove();
                self.pdfDocumentManager.currentDocument.document.showDocumentContainer
                    .find(`.pdf-text-selection-highlight[data-quote-id=${quote.id}]`)
                    .remove();
            } catch (e) {
                console.error(e);
                throw 'fatal';
            }
        });
    }

    async updateDocumentQuotes() {
        try {
            if (!this.pdfDocumentManager.currentDocument || !this.pdfDocumentManager.currentDocument.document) return;
            let document = this.pdfDocumentManager.currentDocument.document;
            this.pdfDocumentManager.currentDocument.viewer.textSelectionComponent.quotes = QuoteManager.getInstance().repository.getForDocument(document);
        } catch (e) {
            console.error(e);
            throw 'fatal';
        }
    }

    updateQuotes(quotesUpdated) {
        try {
            if (!this.pdfDocumentManager.currentDocument || !this.pdfDocumentManager.currentDocument.document) return;

            let container = this.pdfDocumentManager.currentDocument.document.showDocumentContainer;
            let textSelectionComponent = this.pdfDocumentManager.currentDocument.viewer.textSelectionComponent;
            let textSelectionComponentQuotes = textSelectionComponent.quotes;

            let removeFromQuotesList = (quote) => {
                textSelectionComponentQuotes = textSelectionComponentQuotes.filter(c => c.id !== quote.id);
            };

            let removeHighlight = (quote) => {
                container.find(`.pdf-text-selection-highlight[data-quote-id=${quote.id}]`).remove();
            };

            let highlight = (quote) => {
                for (let i = 0; i < quote.extraData.coords.length; i++) {
                    textSelectionComponent.showHighlight(quote, quote.extraData.coords[i]);
                }
            };


            if (isset(quotesUpdated.removed)) {
                for (let i = 0; i < quotesUpdated.removed.length; i++) {
                    let quote = quotesUpdated.removed[i];
                    removeHighlight(quote);
                    removeFromQuotesList(quote);
                }
            }

            if (isset(quotesUpdated.updated)) {
                for (let i = 0; i < quotesUpdated.updated.length; i++) {
                    let quote = quotesUpdated.updated[i];

                    this._updateQuoteElementCodes(quote);

                    removeHighlight(quote);
                    highlight(quote);
                }
            }
        } catch (e) {
            console.error(e);
            throw 'fatal';
        }
    }


    // --------------------- private functions -----------------------
    _updateQuoteElementCodes(quote) {
        let element = quote.element;
        let codesContainer = element.find('.pdf-quote-codes-container');

        codesContainer.html('');

        for (let i = 0; i < quote.codes.length; i++) {
            let code = quote.codes[i];

            let parents = '';
            if (code.parent) {
                let textFn = (parent) => {
                    parents = `${parent.name} -> ` + parents;
                    if (parent.parent) textFn(parent.parent);
                }

                textFn(code.parent);
                parents = ` <span class="small ml-1">(${parents + code.name})</span>`;
            }
            const text = code.name + parents;

            let badge = `<span class="badge p-1 mr-1 code-badge-clickable" data-id="${code.id}" style="color: ${code.text_color}; background-color: ${code.color}; font-size: 100%!important; cursor: pointer;">${text}</span>`;
            codesContainer.append(badge);
        }
    }

    _getContainerForCurrentDocument() {
        return this.pdfDocumentManager.currentDocument.document.showDocumentContainer.find('.pdf-quotes-wrapper');
    }

}
