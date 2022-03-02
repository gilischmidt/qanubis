export default class ToolbarComponent {
    constructor(viewer) {
        this.element = viewer.element;
        this.eventBus = viewer.eventBus;
        this.pdfViewer = viewer.pdfViewer;

        // set how much zoom'll be added/removed (ex 1.1 = 10%)
        this.zoomScaling = 1.1;
        this.minZoomScale = 0.25;
        this.maxZoomScale = 10.0;

        this._init();
    }

    _init() {
        let self = this;

        this.element.find('.next-page').click(function () {
            self._showPage(self.pdfViewer.currentPageNumber + 1);
        });

        this.element.find('.previous-page').click(function () {
            self._showPage(self.pdfViewer.currentPageNumber - 1);
        });

        this.element.find('.increment-zoom').click(function () {
            self._zoomIn();
        });

        this.element.find('.decrement-zoom').click(function () {
            self._zoomOut();
        });

        this.element.find('.zoom-scale-select').change(function () {
            let el = $(this);
            let selected = el.val();

            if (selected === 'custom-zoom-scale') {
            } else if (isNaN(selected)) {
                self._setZoomScale(selected);
            } else {
                self._setZoomScale(+selected);
            }
        });

        let currentPageInput = this.element.find('.current-page');
        currentPageInput.on('change', function () {
            let el = $(this);
            let pageToDisplay = el.val() | 0;

            self._showPage(pageToDisplay);

            if (el.val() !== self.pdfViewer.currentPageNumber.toString()) {
                el.val(self.currentPage);
            }
        });


        // event bus listeners
        this.eventBus.on("pagesinit", function () {
            self._setZoomScale('auto');
        });

        this.eventBus.on("pagechanging", function (e) {
                currentPageInput.val(e.pageNumber);
            }, true
        );
    }

    _showPage(number) {
        if (number === this.pdfViewer.currentPageNumber) {
            return;
        }

        if (number < 1) {
            number = 1;
        } else if (number > this.pdfViewer.pagesCount) {
            number = this.pdfViewer.pagesCount;
        }

        this.element.find('.current-page').val(number);

        this.pdfViewer.scrollPageIntoView({
            pageNumber: number
        });
    }

    _zoomIn() {
        let newScale = this.pdfViewer.currentScale;

        newScale = (newScale * this.zoomScaling).toFixed(2);
        newScale = Math.ceil(newScale * 10) / 10;
        newScale = Math.min(this.maxZoomScale, newScale);

        this._setZoomScale(newScale);
    }

    _zoomOut() {
        let newScale = this.pdfViewer.currentScale;

        newScale = (newScale / this.zoomScaling).toFixed(2);
        newScale = Math.floor(newScale * 10) / 10;
        newScale = Math.max(this.minZoomScale, newScale);

        this._setZoomScale(newScale);
    }

    _setZoomScale(newScale) {
        let select = $('.zoom-scale-select');
        let option = select.find('[value="' + newScale + '"]');

        if (option.length > 0) {
            select.val(newScale);
        } else {
            let scale = Math.round(newScale * 100);
            select.find('[value="custom-zoom-scale"]').html(scale + '%');
            select.val('custom-zoom-scale');
        }

        this.pdfViewer.currentScaleValue = newScale;
    }
}
