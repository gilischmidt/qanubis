export default class PdfHelper {
    static getPageStringForQuote(quote) {
        let coords = quote.extraData.coords;
        let pages = [];

        coords.forEach(c => {
            let page = parseInt(c.page);
            if (!pages.includes(page)) {
                pages.push(page);
            }
        });
        coords.sort((a, b) => a - b);

        let pagesString = (pages[0] + 1).toString();
        if (pages.length === 2) {
            pagesString += ' and ' + (pages[1] + 1).toString();
        } else if (pagesString.length > 2) {
            pagesString += ' to ' + (pages[pages.length - 1] + 1).toString();
        }

        return pagesString;
    }
}
