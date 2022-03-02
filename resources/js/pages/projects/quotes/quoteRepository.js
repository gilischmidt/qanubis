import BaseMapRepository from "../baseClasses/baseMapRepository";

export default class QuoteRepository extends BaseMapRepository {

    getForCode(code) {
        let res = [];

        this.items.forEach(function (quote) {
            if (quote.codes.includes(code)) {
                res.push(quote);
            }
        });

        return res;
    }

    getForCodes(codes) {
        let res = [];

        this.items.forEach(function (quote) {
            for (let i = 0; i < quote.codes.length; i++) {
                if (codes.includes(quote.codes[i])) {
                    res.push(quote);
                    break;
                }
            }
        });

        return res;
    }

    getForDocument(document) {
        let res = [];

        this.items.forEach(function (quote) {
            if (quote.document.id === document.id) {
                res.push(quote);
            }
        });

        return res;
    }

    getForDocumentAndCode(document, code) {
        let res = [];

        this.items.forEach(function (quote) {
            if (quote.document.id === document.id && quote.codes.includes(code)) {
                res.push(quote);
            }
        });

        return res;
    }
}
