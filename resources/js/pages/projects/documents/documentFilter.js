import CodeManager from "../codes/codeManager";
import QuoteManager from "../quotes/quoteManager";
import FilterDocumentsHelper from "../helpers/filterDocumentsHelper";

export default class DocumentFilter{
    constructor() {
        this.filterDocumentModal = $('#modal-filter-documents');
        this.filterDocumentSelector = '.document-filter';
        this.filterDocumentMarkupSelector = '.document-filter-markup';
        this.filterDocumentSelectCodesSelector = '.select-codes';
        this.filterDocumentSelectKeywordsSelector = '.select-keywords';
        this.filterDocumentContainer = this.filterDocumentModal.find('.document-filters-container');

        this.hasFiltersAppliedInfo = $('.applied-document-filter-about');
        this.hasFiltersAppliedNoDocumentsFoundInfo = $('.applied-document-filter-no-results-about');

        this.codeManager = CodeManager.getInstance();
        this.quoteManager = QuoteManager.getInstance();
    }

    _bindWindowEventListeners() {
        let manager = this;
        let leftSidebar = $('body');
        let filterDocumentModal = $('#modal-filter-documents');


        // ------------- document filters ---------------------
        leftSidebar.on('click', '#filter-documents-button', function () {
            manager.showFilterModal();
        });

        filterDocumentModal.on('click', '.btn-add-document-filter', function () {
            manager.addFilter();
        });

        filterDocumentModal.on('click', '.btn-remove-document-filter', function () {
            $(this).closest('.document-filter').remove();
            manager.checkModalDocumentFiltersCount();
        });

        filterDocumentModal.on('click', '.btn-apply-document-filters', function () {
            manager.filterDocuments();
        });
    }

    showFilterModal() {
        let selects = this.filterDocumentModal.find(this.filterDocumentSelector);

        FilterDocumentsHelper.updateSelectOptions(selects);
        this.filterDocumentModal.modal();
    }

    addFilter() {
        let clone = $('.document-filter-markup').clone();
        clone.removeClass('document-filter-markup');
        clone.show();

        function format(code) {
            if (code.element === undefined) {
                return code.text;
            }
            return '<i class="fas fa-tag fa-lg mr-2" style="color: ' + $(code.element).attr('data-color') + ';"></i>' + code.text;
        }

        clone.find(this.filterDocumentSelectCodesSelector).select2({
            placeholder: "Select codes...",
            multiple: true,
            width: '100%',
            templateResult: format,
            escapeMarkup: function (markup) {
                return markup;
            }
        });

        this.filterDocumentContainer.append(clone);
        this.checkModalDocumentFiltersCount();
    }


    // ----------- public filter functions ---------
    filterDocuments() {
        let manager = this;
        let selectedFilters = this.filterDocumentModal.find(this.filterDocumentSelector).not(this.filterDocumentMarkupSelector);
        let filters = [];

        if (this.documentManager.repository.size() > 0) {
            selectedFilters.each(function (pos, el) {
                el = $(el);

                let keyword = el.find(manager.filterDocumentSelectKeywordsSelector).val();
                let selectedCodes = el.find(manager.filterDocumentSelectCodesSelector).find(':selected');
                let codes = [];

                selectedCodes.each(function (pos, el) {
                    let code = manager.codeManager.repository.get($(el).val());

                    if (isset(code)) {
                        codes.push(code);
                    }
                });

                if (codes.length > 0) {
                    filters.push({
                        keyword: keyword,
                        codes: codes,
                    });
                }
            });

            if (filters.length > 0) {
                this.hasFiltersAppliedInfo.find('.count').html(filters.length);
                this.hasFiltersAppliedInfo.slideDown();
            } else {
                this.hasFiltersAppliedInfo.slideUp();
            }

            let documents = this.repository.all();

            if (filters.length > 0) {
                for (let i = 0; i < filters.length; i++) {
                    let filter = filters[i];
                    let codes = filter.codes;

                    if (documents.length === 0) {
                        this.hasFiltersAppliedNoDocumentsFoundInfo.slideUp();
                        break;
                    }

                    if (codes.length === 0) {
                        continue;
                    }

                    switch (filter.keyword) {
                        case 'has':
                            documents = FilterDocumentsHelper.applyHasFilter(documents, codes);
                            break;
                        case 'any':
                            documents = FilterDocumentsHelper.applyAnyFilter(documents, codes);
                            break;
                        case 'only':
                            documents = FilterDocumentsHelper.applyOnlyFilter(documents, codes);
                            break;
                        case 'doesnt_have':
                            documents = FilterDocumentsHelper.applyDoesntHaveFilter(documents, codes);
                            break;
                        default:
                            break;
                    }
                }

                this.documentManager.repository.forEach(function (doc) {
                    doc.hideElement();
                });

                for (let i = 0; i < documents.length; i++) {
                    documents[i].showElement();
                }

                if (documents.length === 0) {
                    this.hasFiltersAppliedNoDocumentsFoundInfo.slideDown();
                } else {
                    this.hasFiltersAppliedNoDocumentsFoundInfo.slideUp();
                }
            } else {
                this.hasFiltersAppliedNoDocumentsFoundInfo.slideUp();

                this.documentManager.repository.forEach(function (doc) {
                    doc.showElement();
                });
            }
        }
    }

    checkModalDocumentFiltersCount() {
        let infoMessage = this.filterDocumentModal.find('.no-document-filters-about');

        if (this.filterDocumentModal.find(this.filterDocumentSelector).length > 1) {
            infoMessage.hide();
        } else {
            infoMessage.show();
        }
    }

    showDocumentQuotesModal(document) {
        let quotes = this.quoteManager.repository.getForDocument(document);

        let modal = $('#modal-document-quotes');
        let emptyMessage = modal.find('.no-quotes-found-about');
        let quoteModalQuoteMarkup = modal.find('.document-modal-quotes-markup');
        let documentQuoteModalQuoteContainerMarkup = modal.find('.document-modal-quotes-container-markup');
        let documentQuotesModalContainer = modal.find('.quotes-container');

        documentQuotesModalContainer.html('');
        modal.find('.document-name').html(document.name);

        if (quotes.length > 0) {
            let containers = new Map();

            for (let i = 0; i < quotes.length; i++) {
                let quote = quotes[i];
                let documentContainer = null;
                let quoteElement = quoteModalQuoteMarkup.clone();

                if (containers.has(quote.code.id)) {
                    documentContainer = containers.get(quote.code.id);
                } else {
                    documentContainer = documentQuoteModalQuoteContainerMarkup.clone();

                    documentContainer.find('.document-modal-quotes-container-quotes').html('');
                    documentContainer.find('.btn-toggle-collapse').attr('data-target', '#document-quotes-collapse-' + i);
                    documentContainer.find('.collapse-container').attr('id', 'document-quotes-collapse-' + i);
                    documentContainer.find('.document-quotes-code-name').html(quote.code.name);
                    documentContainer.find('.code-option-color').css({color: quote.code.color});
                    documentContainer.show();

                    containers.set(quote.code.id, documentContainer);

                    documentQuotesModalContainer.append(documentContainer);
                }

                quoteElement.find('.document-quotes-content').html(quote.text);
                quoteElement.show();

                documentContainer.find('.document-modal-quotes-container-quotes').append(quoteElement);
            }

            emptyMessage.hide();
        } else {
            emptyMessage.show();
        }

        modal.modal();
    }
}
