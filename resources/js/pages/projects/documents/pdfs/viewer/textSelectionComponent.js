export default class TextSelectionComponent {
    constructor(viewer) {
        this.viewer = viewer;
        this.pdfViewer = viewer.pdfViewer;
        this.element = viewer.element.find('.pdf-viewer-container');

        this.quotes = [];

        this._init();
    }

    _init() {
        let self = this;

        this.viewer.eventBus.on('textlayerrendered', function (params) {
            self.showHighlights(params.pageNumber - 1);
        });
    }

    getSelectedTextCoords(selectionRects) {
        return this._getSelectedCoordsRelativeToPage(null, selectionRects);
    }

    showHighlights(page = 0) {
        page = isset(page) ? page.toString() : null;

        if (isset(page)) {
            this.element.find(`.pdf-text-selection-highlight[data-page=${page}]`).remove();
        } else {
            this.element.find('.pdf-text-selection-highlight').remove();
        }

        for (let i = 0; i < this.quotes.length; i++) {
            let quote = this.quotes[i];

            for (let j = 0; j < quote.extraData.coords.length; j++) {
                let coords = quote.extraData.coords[j];

                if (isset(page) && page !== coords.page) {
                    continue;
                }

                this.showHighlight(quote, coords);
            }
        }
    }

    _getSelectedCoordsRelativeToPage(pageIndex = null, selectionRects = null) {
        if (pageIndex === null) {
            pageIndex = this.pdfViewer.currentPageNumber - 1;
        }

        if (selectionRects === null) {
            selectionRects = Array.from(
                window.getSelection().getRangeAt(0).getClientRects(),
            );
        }

        let page = this.pdfViewer.getPageView(pageIndex);
        let pageRect = page.canvas.getClientRects()[0];
        let viewport = page.viewport;

        let rectsInPreviousPages = [];
        let rectsInNextPages = [];
        let selectedRects = [];
        let selectedRectCoords = [];

        for (let r = 0; r < selectionRects.length; r++) {
            let rect = selectionRects[r];
            let skipRect = false;

            // selected text is on previous page
            if (pageRect.top > rect.top && pageRect.bottom > rect.bottom) {
                rectsInPreviousPages.push(rect);
                skipRect = true;
            }

            // selected text is on next page
            if (pageRect.top < rect.top && pageRect.bottom < rect.bottom) {
                rectsInNextPages.push(rect);
                skipRect = true;
            }

            if (!skipRect) {
                let rectCoords = viewport
                    .convertToPdfPoint(rect.left - pageRect.x, rect.top - pageRect.y)
                    .concat(
                        viewport.convertToPdfPoint(
                            rect.right - pageRect.x,
                            rect.bottom - pageRect.y,
                        ),
                    );

                // remove rects that are out of PDF's bound
                if (
                    Math.abs(rectCoords[0]) <= 0 ||
                    Math.abs(rectCoords[1]) <= 0 ||
                    Math.abs(rectCoords[2]) <= 0 ||
                    Math.abs(rectCoords[3]) <= 0
                ) {
                    skipRect = true;
                }

                if (!skipRect) {
                    // prevent duplicates
                    // checks if LEFT and WITH are the same
                    for (let i = 0; i < selectedRectCoords.length; i++) {
                        if (
                            selectedRectCoords[i][0] === rectCoords[0] &&
                            selectedRectCoords[i][2] === rectCoords[2]
                        ) {
                            skipRect = true;
                        }
                    }
                }

                if (!skipRect) {
                    selectedRectCoords.push(rectCoords);
                }
            }
        }

        if (rectsInPreviousPages.length > 0) {
            selectedRects = selectedRects.concat(
                this._getSelectedCoordsRelativeToPage(pageIndex - 1, rectsInPreviousPages),
            );
        }

        if (rectsInNextPages.length > 0) {
            selectedRects = selectedRects.concat(
                this._getSelectedCoordsRelativeToPage(pageIndex + 1, rectsInNextPages),
            );
        }

        selectedRects.push({
            page: pageIndex,
            coords: selectedRectCoords,
        });

        return selectedRects;
    }

    showHighlight(quote, params) {
        const pageIndex = params.page;
        const page = this.pdfViewer.getPageView(pageIndex);
        let color = '';
        let hoverContent = '';

        if (page === undefined || page.canvas === undefined || page.canvas === null) {
            return;
        }

        const pageElement = page.canvas.parentElement;
        const viewport = page.viewport;

        if (quote.codes.length === 1) {
            color = quote.codes[0].color;
        } else {
            let colors = quote.codes.map(t => t.color).join(',');
            color = `linear-gradient(to right, ${colors})`;
        }

        hoverContent += `<span class="mb-1"><i class="fas fa-comment"></i> ${quote.comments.length}</span> <br>`;
        quote.codes.forEach(code => {
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

            hoverContent += `<span class="badge p-2 code-badge-clickable" data-id="${code.id}" style="color: ${code.text_color}; background: ${code.color}; cursor: pointer;"> ${text}</span> `;
        });

        params.coords.forEach(function (rect) {
            const bounds = viewport.convertToViewportRectangle(rect);
            const el = $(document.createElement("div"));

            const left = Math.min(bounds[0], bounds[2]);
            const top = Math.min(bounds[1], bounds[3]);

            const width = Math.abs(bounds[0] - bounds[2]);
            const height = Math.abs(bounds[1] - bounds[3]);

            el.addClass('pdf-text-selection-highlight');
            el.css({
                position: 'absolute',
                opacity: '.25',
                background: color,
                left: left,
                top: top,
                width: width,
                height: height,
                zIndex: 99
            });

            el.attr('data-quote-id', quote.id);
            el.attr('data-page', pageIndex);

            pageElement.appendChild(el[0]);

            Tipped.create(el, function (element) {
                return {
                    behavior: 'mouse',
                    content: hoverContent,
                }
            }, {
                skin: 'light',
                size: 'huge',
                maxWidth: 300,
            });
        });
    }

    _replaceWhitespace(str) {
        // Copied from pdf-js/evaluator.js file
        //
        // Replaces all whitespaces with standard spaces (0x20), to avoid
        // alignment issues between the textLayer and the canvas if the text
        // contains e.g. tabs (fixes issue6612.pdf).

        let i = 0;
        let code;
        let whitespaceRegexp = /\s/g;

        let ii = str.length;
        while (i < ii && (code = str.charCodeAt(i)) >= 0x20 && code <= 0x7f) {
            i++;
        }
        return i < ii ? str.replace(whitespaceRegexp, " ") : str;
    }
}
