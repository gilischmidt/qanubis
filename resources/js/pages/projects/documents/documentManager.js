import DocumentRepository from "./documentRepository";
import Document from "./document";
import BaseManager from "../baseClasses/baseManager";
import DocumentUiManager from "./documentUiManager";
import PdfDocumentManager from "./pdfs/pdfDocumentManager";
import QuoteManager from "../quotes/quoteManager";
import AjaxHelper from "../helpers/ajaxHelper";

export default class DocumentManager extends BaseManager {
    _initialize() {
        // objects/vars
        this.repository = new DocumentRepository();
        this.uiManager = new DocumentUiManager(this);

        this.quotesList = null;

        this.specificDocumentManagers = new Map();
        this.selectedDocumentType = null;
        this.selectedDocument = null;

        // initialization
        this._initializeList();
        this._instantiateSpecificManagers();
    }

    // ------------ initialization ----------
    _initializeList() {
        this.quotesList = this.uiManager.documentListingPage.find('.documents-list').DataTable({
            autoWidth: false,
            order: [[1, "asc"]],
            columnDefs: [
                {
                    targets: [0, 3],
                    width: '50px',
                },
                {
                    targets: [4],
                    width: '150px',
                    orderable: false,
                    className: "text-center",
                },
                {
                    targets: 5,
                    orderable: false,
                    className: "text-center",
                    width: '150px',
                }
            ],
            language: {
                "emptyTable": "No documents found. Use the button above to add one."
            },
        });
    }

    _instantiateSpecificManagers() {
        this.specificDocumentManagers.set('pdf', PdfDocumentManager.getInstance());
    }


    // ----------- crud functions ----------
    async add(data, progressReport) {
        progressReport = isset(progressReport) ? progressReport : () => {
        };

        let self = this;

        return AjaxHelper.ajaxCall({
                method: 'POST',
                url: appRoutes.documents.store,
                data: data,
                options: {
                    xhr: function () {
                        let xhr = $.ajaxSettings.xhr();
                        xhr.upload.onprogress = function (e) {
                            if (e.lengthComputable) {
                                let percentCompleted = Math.floor((e.loaded / e.total) * 100);
                                progressReport(percentCompleted);
                            }
                        };
                        return xhr;
                    }
                }
            }
        ).then(async function (result) {
            return self.instantiateDocument(result);
        });
    }

    instantiateDocument(data) {
        try {
            let document = new Document(data);

            let row = this.quotesList.row.add([
                '<i class="fas fa-file-pdf mr-1"></i> PDF',
                `<span class="clickable btn-select-document">${document.name}</span>`,
                isset(document.description) ? document.description : '<span class="font-italic text-muted">No description</span>',
                0,
                UtilsHelper.parseDate(document.created_at),
                this.uiManager.documentListingPage.find('.document-list-options-col').clone().html()
            ]).draw();

            $(row.node()).attr('data-document-id', document.id);

            document.tableRow = row;
            this.repository.add(document);

            return document;
        } catch (e) {
            console.error(e);
            throw 'fatal';
        }
    }

    async update(document, data) {
        let self = this;

        return AjaxHelper.ajaxCall({
                method: 'PUT',
                url: appRoutes.documents.update.replace('#documentId', document.id),
                data: data,
            }
        ).then(async function (result) {
            try {
                document.updateData(result);
                await self._getManagerForDocumentType(document.type).update(document, data);

                let rowData = document.tableRow.data();
                rowData[1] = `<span class="clickable btn-select-document">${document.name}</span>`;
                rowData[2] = isset(document.description) ? document.description : '<span class="font-italic text-muted">No description</span>';

                document.tableRow.data(rowData).draw();

                if (document === self.selectedDocument) self._setSelectedDocumentElement(document);
            } catch (e) {
                console.error(e);
                throw 'fatal';
            }
        });
    }

    async remove(document) {
        let self = this;

        return AjaxHelper.ajaxCall({
                method: 'DELETE',
                url: appRoutes.documents.destroy.replace('#documentId', document.id)
            }
        ).then(async function (result) {
            try {
                await self._getManagerForDocumentType(document.type).remove(document);
                await QuoteManager.getInstance().removeDocument(document);

                if (self.selectedDocument === document) {
                    self.selectedDocument = null;
                    self._setSelectedDocumentElement(null);
                }

                document.tableRow.remove().draw();
                self.repository.remove(document);
            } catch (e) {
                console.error(e);
                throw 'fatal';
            }
        });
    }

    async select(document) {
        try {
            $('#documents-component-listing').hide();

            if (this.selectedDocument !== document || !isset(document.showDocumentContainer)) {
                if (isset(this.selectedDocument)) {
                    $(this.selectedDocument.tableRow.node()).removeClass('bg-info');
                }

                this.selectedDocument = document;
                $(this.selectedDocument.tableRow.node()).addClass('bg-info');

                this._setSelectedDocumentElement(document);
            }

            if (!isset(document.content)) {
                document.content = await AjaxHelper.ajaxCall({
                        method: 'GET',
                        url: appRoutes.documents.download.replace('#documentId', document.id),
                    }
                );
            }

            return this.specificDocumentManagers.get(document.type).show(document);
        } catch (e) {
            console.error(e);
            throw 'fatal';
        }
    }


    // ----------- public functions ----------
    async updateQuotes(quotes) {
        if (this.selectedDocument !== null) {
            let selectedDocumentId = this.selectedDocument.id;

            quotes = {
                removed: isset(quotes.removed) ? quotes.removed.filter(c => c.document.id === selectedDocumentId) : [],
                updated: isset(quotes.updated) ? quotes.updated.filter(c => c.document.id === selectedDocumentId) : [],
            }

            return this._getManagerForDocumentType(this.selectedDocument.type).updateQuotes(quotes);
        }
    }

    async updateQuotesCount(document, amount = null) {
        let rowData = document.tableRow.data();

        if (isset(amount)) {
            let currentCount = parseInt(rowData[3]);

            if (typeof amount === 'string') {
                if (amount.charAt(0) === '+') {
                    amount = currentCount + parseInt(amount.substr(1));
                } else {
                    amount = currentCount - parseInt(amount.substr(1));
                }
            }
        } else {
            amount = QuoteManager.getInstance().repository.getForDocument(document).length;
        }

        rowData[3] = amount
        document.tableRow.data(rowData).draw();
    }


    // ----------- private functions ----------
    _getManagerForDocumentType(type) {
        return this.specificDocumentManagers.get(type);
    }

    _setSelectedDocumentElement(document = null) {
        let selectedContainer = $('.selected-document-option');

        if (isset(document)) {
            let newElementToDisplay = this.uiManager.documentListingPage.find('.document-option.markup').clone();
            newElementToDisplay.find('.document-name').html(document.name);
            newElementToDisplay.attr('data-id', document.id);
            newElementToDisplay.removeClass('markup');
            newElementToDisplay.show();

            let description = newElementToDisplay.find('.document-description');
            if (isset(document.description)) {
                description.show();
                description.html(document.description);
            } else {
                description.hide();
            }

            selectedContainer.find('.no-document-selected-info').hide();
            selectedContainer.find('.selected-data')
                .html('')
                .append(newElementToDisplay)
                .fadeIn('fast');
        } else {
            selectedContainer.find('.document-option').not('.markup').remove();
            selectedContainer.find('.selected-data').hide();
            selectedContainer.find('.no-document-selected-info').show();
        }
    }

    // ----------- static functions ----------
    static getInstance() {
        if (DocumentManager.instance === undefined) {
            DocumentManager.instance = new DocumentManager();
            DocumentManager.instance._initialize();
        }

        return DocumentManager.instance;
    }
}

