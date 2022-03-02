import ToolbarComponent from "./toolbarComponent";
import SearchComponent from "./searchComponent";
import TextSelectionComponent from "./textSelectionComponent";

export default class PdfViewer {
    constructor(element) {
        this.element = element;

        this.eventBus = new pdfjsViewer.EventBus();
        this.pdfViewer = null;
        this.pdfHistory = null;
        this.pdfLinkService = null;
        this.pdfFindController = null;
        this.toolbarComponent = null;
        this.searchComponent = null;
        this.textSelectionComponent = null;
        this.pdfDocument = null;

        this._initUi();
    }

    async open(base64Pdf, onProgress = null) {
        let viewer = this;

        let loadingTask = pdfjsLib.getDocument({
            data: this._base64ToUint8Array(base64Pdf),
            cMapUrl: "./vendor/pdfjs/cmaps",
            cMapPacked: true,
        });

        this.pdfLoadingTask = loadingTask;

        if (isset(onProgress)) {
            loadingTask.onProgress = function (progressData) {
                onProgress(Math.round(progressData.loaded / progressData.total) * 100);
            };
        }

        return loadingTask.promise.then(pdfDocument => {
            viewer.pdfDocument = pdfDocument;
            viewer.pdfViewer.setDocument(pdfDocument);
            viewer.pdfLinkService.setDocument(pdfDocument);
            //viewer.pdfHistory.initialize({fingerprint: pdfDocument.fingerprint});

            viewer.element.find('.pages-count').html(pdfDocument.numPages);
            viewer.element.find('.current-page').val(1);

            viewer.textSelectionComponent = new TextSelectionComponent(viewer);
        }).catch(exception => {
            console.error(exception);
            viewer._fatalError();

            throw exception;
        });
    }

    _initUi() {
        this.pdfLinkService = new pdfjsViewer.PDFLinkService({
            eventBus: this.eventBus,
        });

        let pdfFindController = new pdfjsViewer.PDFFindController({
            eventBus: this.eventBus,
            linkService: this.pdfLinkService,
        });
        this.pdfFindController = pdfFindController;

        this.pdfViewer = new pdfjsViewer.PDFViewer({
            container: this.element.find('.pdf-viewer-container').first()[0],
            eventBus: this.eventBus,
            linkService: this.pdfLinkService,
            findController: pdfFindController,
            l10n: this.l10n
        });
        this.pdfLinkService.setViewer(this.pdfViewer);

        /*
        this.pdfHistory = new pdfjsViewer.PDFHistory({
            eventBus: this.eventBus,
            linkService: linkService,
        });
        linkService.setHistory(this.pdfHistory);
         */

        this.toolbarComponent = new ToolbarComponent(this);
        this.searchComponent = new SearchComponent(this);
    }

    _fatalError() {
        let errorDiv = $('<div>')
            .addClass('w-100 h-100 d-flex justify-content-center align-items-center text-primary bg-gray')
            .html('<h1>An fatal error ocurred.</h1>');

        this.element.closest('.pdf-main-content-wrapper').html('').append(errorDiv);
    }

    _base64ToUint8Array(base64) {
        const base64Index = base64.indexOf(";base64,") + ";base64,".length;
        const raw = window.atob(base64.substring(base64Index));
        const array = new Uint8Array(new ArrayBuffer(raw.length));

        for (let i = 0; i < raw.length; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }
}
