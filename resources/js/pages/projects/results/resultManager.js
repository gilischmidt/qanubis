import CodeManager from "../codes/codeManager";
import DocumentManager from "../documents/documentManager";
import UtilsHelper from "../helpers/utilsHelper";
import ReportGraphManager from "./reportGraphManager";
import ReportTableManager from "./reportTableManager";
import QuoteManager from "../quotes/quoteManager";
import PdfHelper from "../helpers/pdfHelper";

let didGenerateAtLeastOnce = false;

export default class ResultManager {
    constructor() {
        this.reportGraphManager = new ReportGraphManager(this);
        this.reportTableManager = new ReportTableManager(this);

        this.resultsPage = $('#results-index-page');

        this._bindEventListeners();
        this._initialize();
    }

    _bindEventListeners() {
        let self = this;

        let reportCodesModal = $('#modal-report-quotes');

        $('#quotes-explorer').click(function () {
            self.showQuotesModal();
        })

        reportCodesModal.on('click', '.btn-update-results', function () {
            self._updateQuotesModalContent();
        })

        reportCodesModal.on('click', '.btn-select-all-documents', function () {
            let select = $(this).parent().find('select');
            self._selectAll(select);
        });

        reportCodesModal.on('click', '.btn-clear-documents-selection', function () {
            self._clearSelection($(this).parent().find('select'));
        });

        reportCodesModal.on('click', '.btn-select-all-codes', function () {
            let select = $(this).parent().find('select');
            self._selectAll(select);
        });

        reportCodesModal.on('click', '.btn-clear-codes-selection', function () {
            self._clearSelection($(this).parent().find('select'));
        });

        reportCodesModal.on('click', '.btn-remove-quote', async function () {
            let element = $(this).closest('.quote');
            const res = await DocumentManager.getInstance()._getManagerForDocumentType('pdf').uiManager
                ._showRemoveQuoteModal(self._getObjectFromDataId(element), true);

            if (res) self.updateQuotesModalIfOpen();
        });

        reportCodesModal.on('click', '.btn-edit-quote', async function () {
            let element = $(this).closest('.quote');
            const res = await DocumentManager.getInstance()._getManagerForDocumentType('pdf').uiManager
                ._showEditQuoteModal(self._getObjectFromDataId(element), true);

            if (res) self.updateQuotesModalIfOpen();
        });


        this.resultsPage.on('click', '.btn-generate-report', function () {
            self._updateReport();
        });

        this.resultsPage.on('click', '.btn-select-all', function () {
            let select = $(this).parent().find('select');
            self._selectAll(select);
        });

        this.resultsPage.on('click', '.btn-clear-selection', function () {
            self._clearSelection($(this).parent().find('select'));
        });

        this.resultsPage.on('click', '.btn-export-all-quotes-for-codes', function () {
            self.exportQuotesGroupingByCodes(CodeManager.getInstance().repository.all());
        });

        this.resultsPage.on('click', '.btn-export-all-quotes-for-documents', function () {
            self.exportQuotesGroupingByDocuments(DocumentManager.getInstance().repository.all());
        });

        $('#report-page-tab').on('shown.bs.tab', function (e) {
            let page = $('#results-index-page');
            self._updateSelects(page);
            // if (didGenerateAtLeastOnce) self._updateReport();
        });
    }

    _initialize() {
        let page = $('#results-index-page');
        let reportCodesModal = $('#modal-report-quotes');

        let initCodesSelect = (selects, multiple = true) => {
            selects.select2({
                placeholder: "Select codes...",
                multiple: multiple,
                width: '100%',
                templateResult: (code) => {
                    if (!isset(code.element)) {
                        return code.text;
                    }

                    let el = $(code.element)
                    let parent = el.attr('data-parent');
                    let parents = '';

                    if (parent) {
                        let textFn = (parent) => {
                            parents = `${parent.name} -> ` + parents;
                            if (parent.parent) textFn(parent.parent);
                        }

                        textFn(CodeManager.getInstance().repository.get(parent));
                        parents = ` <span class="text-muted small ml-1">(${parents + code.text})</span>`;
                    }

                    let codeObj = CodeManager.getInstance().repository.get(el.val());
                    let text = `${code.text} (${codeObj.tableRow.data()[4]} quotes)`;

                    if (codeObj.children) text += ` (${codeObj.children.length} children)`;
                    text += parents;

                    return `<i class="fas fa-tag mr-1" style="color: ${el.attr('data-color')}"></i> ${text}`;
                },
                templateSelection: (code) => {
                    if (!isset(code.element)) {
                        return code.text;
                    }

                    let el = $(code.element);
                    return `<span class="badge" style="color: ${el.attr('data-text-color')}; background-color: ${el.attr('data-color')}">${code.text}</span>`;
                },
                escapeMarkup: function (markup) {
                    return markup;
                }
            });
        }
        let initDocumentsSelect = (selects, multiple = true) => {
            selects.select2({
                placeholder: "Select document(s)...",
                multiple: multiple,
                width: '100%',
                templateResult: (document) => {
                    if (!isset(document.element)) {
                        return document.text;
                    }
                    return `<i class="fas fa-file-pdf"></i> ${document.text}`;
                },
                templateSelection: (document) => {
                    if (!isset(document.element)) {
                        return document.text;
                    }
                    return `<i class="fas fa-file-pdf"></i> ${document.text}`;
                },
                escapeMarkup: function (markup) {
                    return markup;
                }
            });
        }

        initCodesSelect(reportCodesModal.find('.select-codes'));
        initDocumentsSelect(reportCodesModal.find('.select-documents'));

        initDocumentsSelect(page.find('.select-documents'));
        initCodesSelect(page.find('.select-codes'));
    }

    // ---------------------------------------

    async showQuotesModal(codes = [], documents = []) {
        let modal = $('#modal-report-quotes');
        let selectDocuments = modal.find('.select-documents');
        let selectCodes = modal.find('.select-codes');
        let selectDisplayFor = modal.find('.show-for');

        selectDocuments.empty();
        selectCodes.empty();

        let documentsForSelect = [];
        DocumentManager.getInstance().repository.forEach(document => {
            let newOption = new Option(document.name, document.id, false, false);
            documentsForSelect.push(newOption);
        });
        documentsForSelect.sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()))
            .forEach(d => selectDocuments.append(d));

        let codesForSelect = [];
        CodeManager.getInstance().repository.forEach(code => {
            let newOption = new Option(code.name, code.id, false, false);
            $(newOption).attr('data-color', code.color).attr('data-text-color', code.text_color);
            codesForSelect.push(newOption);
        });
        codesForSelect.sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()))
            .forEach(d => selectCodes.append(d));


        selectDisplayFor.val('top');
        selectDocuments.val(documents.map(d => d.id)).trigger('change');
        selectCodes.val(codes.map(c => c.id)).trigger('change');

        modal.find('.quotes-wrapper').hide();

        if (codes.length || documents.length) this._updateQuotesModalQuotes(codes, documents);

        modal.modal();
    }

    updateQuotesModalIfOpen() {
        let modal = $('#modal-report-quotes');
        if (modal.hasClass('show')) {
            this._updateSelects(modal);
            this._updateQuotesModalContent();
        }
    }

    _updateQuotesModalContent() {
        let modal = $('#modal-report-quotes');

        let selectCodes = modal.find('.select-codes').val().map(cid => CodeManager.getInstance().repository.get(cid));
        let selectDocuments = modal.find('.select-documents').val().map(did => DocumentManager.getInstance().repository.get(did));
        let selectDisplayFor = modal.find('.show-for').val();

        this._updateQuotesModalQuotes(selectCodes, selectDocuments, selectDisplayFor);
    }

    _updateQuotesModalQuotes(codes = [], documents = [], displayFor = 'top') {
        UtilsHelper.showLoadingOverlay();

        let codesToShowFor = codes;

        if (codes.length) {
            if (displayFor !== 'top') {
                let appendFn = (c) => {
                    if (!codesToShowFor.includes(c)) codesToShowFor.push(c);
                    if (displayFor === 'all' && c.children) c.children.forEach(child => appendFn(child));
                }

                codes.forEach(c => {
                    if (c.children) c.children.forEach(appendFn);
                });
            }
        } else {
            codesToShowFor = CodeManager.getInstance().repository.all();
        }

        let modal = $('#modal-report-quotes');
        let quotes = QuoteManager.getInstance().repository.getForCodes(codesToShowFor);

        if (documents.length !== 0) {
            quotes = quotes.filter(quote => documents.includes(quote.document));
        }

        modal.find('.quotes-count').html(quotes.length);

        let quotesContainer = modal.find('.quotes-container');
        let markup = modal.find('.quote.markup');
        quotesContainer.find('.quote').not('.markup').remove();

        quotes.sort((a, b) => a.document.name.toLowerCase().localeCompare(b.document.name.toLowerCase())).forEach(quote => {
            let clone = markup.clone();
            clone.attr('data-id', quote.id);
            quotesContainer.append(clone);

            if (quote.document.type === 'pdf') {
                let pages = PdfHelper.getPageStringForQuote(quote);

                clone.find('.extra-info').append(`<p class="m-0">Page(s): ${pages}`);
                clone.find('.document-container').html(`<i class="fas fa-file-pdf"></i> ${quote.document.name}`);
            }

            let codesContainer = clone.find('.codes-container');
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

                let badge = `<span class="badge p-1 mr-1 code-badge-clickable" data-is-inside-modal="true" data-id="${code.id}" style="color: ${code.text_color}; background-color: ${code.color}; font-size: 100%!important; cursor:pointer;">${text}</span>`;
                codesContainer.append(badge);
            }

            if (quote.comments.length > 0) {
                let commentsContainer = clone.find('.comments-container');
                let commentMarkup = clone.find('.comment.markup');

                quote.comments.forEach(comment => {
                    let el = commentMarkup.clone();
                    el.find('.comment-content').html(comment.content);

                    el.find('.created-at').html(Intl.DateTimeFormat('en', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: "numeric",
                        minute: "numeric"
                    }).format(new Date(comment.updated_at)));


                    el.removeClass('markup');
                    el.show();
                    commentsContainer.append(el);
                });
            } else {
                clone.find('.card-footer').hide();
            }

            clone.find('.content').html(quote.text);
            clone.removeClass('markup');
            clone.show();
        });


        modal.find('.quotes-wrapper').show();
        if (quotes.length) {
            modal.find('.empty-message').hide();
        } else {
            modal.find('.empty-message').show();
        }

        UtilsHelper.hideLoadingOverlay();
    }

    // ---------------------------------------

    _updateSelects(page) {
        let selectDocuments = page.find('.select-documents');
        let selectCodes = page.find('.select-codes');

        let currentlySelectedDocuments = selectDocuments.val();
        let currentlySelectedCodes = selectCodes.val();

        selectDocuments.empty();
        selectCodes.empty();

        let documents = [];
        DocumentManager.getInstance().repository.forEach(document => {
            let newOption = new Option(document.name, document.id, false, false);
            documents.push(newOption);
        });
        documents.sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()))
            .forEach(d => selectDocuments.append(d));

        let codes = [];
        CodeManager.getInstance().repository.forEach(code => {
            let newOption = new Option(code.name, code.id, false, false);
            $(newOption).attr('data-color', code.color).attr('data-text-color', code.text_color).attr('data-parent', code?.parent?.id);
            codes.push(newOption);
        });
        codes.sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()))
            .forEach(d => selectCodes.append(d));

        selectDocuments.val(currentlySelectedDocuments).trigger('change');
        selectCodes.val(currentlySelectedCodes).trigger('change');
    }

    exportQuotesGroupingByDocuments(documents) {
        let res = 'Exporting quotes grouping by document\n\n\n\n\n';

        documents.forEach(doc => {
            QuoteManager.getInstance().repository.getForDocument(doc).forEach(quote => {
                let codes = '';
                quote.codes.forEach(code => codes += code.name + ', ');

                res += '##################################################################\n';
                res += 'Codes: ' + codes.slice(0, -2) + '\n';
                res += 'Content:\n' + quote.text + '\n';
                res += '--------\n';
                res += 'Comments: \n';

                if (quote.comments.length > 0) {
                    quote.comments.forEach(comment => {
                        let date = Intl.DateTimeFormat('en', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: "numeric",
                            minute: "numeric"
                        }).format(new Date(comment.updated_at));

                        res += date + '\n';
                        res += comment.content + '\n';
                    });
                } else {
                    res += 'None.\n'
                }

                res += '\n';
            });
        });

        this.download('quotes_by_document.txt', res);
    }

    exportQuotesGroupingByCodes(codes) {
        let res = 'Exporting quotes grouping by code\n\n\n\n\n';

        codes.forEach(code => {
            QuoteManager.getInstance().repository.getForCode(code).forEach(quote => {
                let codesText = '';
                quote.codes.forEach(t => codesText += t.name + ', ');

                res += '##################################################################\n';
                res += 'Codes: ' + codesText.slice(0, -2) + '\n';
                res += 'Content:\n' + quote.text + '\n';
                res += '--------\n';
                res += 'Comments: \n';

                if (quote.comments.length > 0) {
                    quote.comments.forEach(comment => {
                        let date = Intl.DateTimeFormat('en', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: "numeric",
                            minute: "numeric"
                        }).format(new Date(comment.updated_at));

                        res += date + '\n';
                        res += comment.content + '\n';
                    });
                } else {
                    res += 'None.\n'
                }

                res += '\n';
            });
        });

        this.download('quotes_by_codes.txt', res);
    }

    download(filename, text) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    // ---------------------------------------

    async _updateReport() {
        UtilsHelper.showLoadingOverlay();
        let self = this;

        didGenerateAtLeastOnce = true;

        setTimeout(() => {
            try {
                let page = $('#results-index-page');
                let noReportInfo = page.find('.no-report-info');
                let reportContainer = page.find('.report');

                let documents = page.find('.select-documents').val().map(d => DocumentManager.getInstance().repository.get(d));
                let codes = page.find('.select-codes').val().map(t => CodeManager.getInstance().repository.get(t));
                let displayFor = page.find('.show-for').val();

                documents = documents.length ? documents : DocumentManager.getInstance().repository.all();
                codes = codes.length ? codes : CodeManager.getInstance().repository.all();

                if (codes.length === 0 || documents.length === 0) {
                    noReportInfo.show();
                    reportContainer.hide();

                    UtilsHelper.hideLoadingOverlay();
                    return;
                }

                noReportInfo.hide();
                reportContainer.show();

                let data = {
                    quotes: [],
                    quotesText: '',
                    codes: new Map(),
                    documents: new Map(),
                };

                documents.forEach(document => {
                    let documentData = {
                        document: document,
                        relatedCodes: new Map(),
                        relatedQuotes: [],
                        quotesPerRelatedCode: new Map(),
                    };

                    data.documents.set(document.id, documentData);

                    let codesToShowFor = codes;
                    if (codes.length) {
                        if (displayFor !== 'top') {
                            let appendFn = (c) => {
                                if (!codesToShowFor.includes(c)) codesToShowFor.push(c);
                                if (displayFor === 'all' && c.children) c.children.forEach(child => appendFn(child));
                            }

                            codes.forEach(c => {
                                if (c.children) c.children.forEach(appendFn);
                            });
                        }
                    } else {
                        codesToShowFor = CodeManager.getInstance().repository.all();
                    }

                    codesToShowFor.forEach(code => {
                        let codeData;
                        let quotes = QuoteManager.getInstance().repository.getForDocumentAndCode(document, code);

                        if (data.codes.has(code.id)) {
                            codeData = data.codes.get(code.id);
                        } else {
                            codeData = {
                                code: code,
                                relatedDocuments: new Map(),
                                relatedQuotes: [],
                                quotesPerRelatedDocument: new Map(),
                            };

                            data.codes.set(code.id, codeData);
                        }

                        quotes.forEach(quote => {
                            // document counters
                            if (!documentData.relatedCodes.has(code.id)) {
                                documentData.relatedCodes.set(code.id, code);
                            }

                            if (!documentData.quotesPerRelatedCode.has(code.id)) {
                                documentData.quotesPerRelatedCode.set(code.id, 1);
                            } else {
                                let val = documentData.quotesPerRelatedCode.get(code.id);
                                documentData.quotesPerRelatedCode.set(code.id, val + 1);
                            }


                            // code counters
                            if (!codeData.relatedDocuments.has(document.id)) {
                                codeData.relatedDocuments.set(document.id, document);
                            }

                            if (!codeData.quotesPerRelatedDocument.has(document.id)) {
                                codeData.quotesPerRelatedDocument.set(document.id, 1);
                            } else {
                                let val = codeData.quotesPerRelatedDocument.get(document.id);
                                codeData.quotesPerRelatedDocument.set(document.id, val + 1);
                            }

                            // data
                            data.quotes.push(quote);
                            data.quotesText += ' ' + quote.text;

                            codeData.relatedQuotes.push(quotes);
                            documentData.relatedQuotes.push(quotes);
                        });
                    });
                });

                Promise.all([
                    self.reportGraphManager.generateQuotesHeatmap(data),
                    self.reportGraphManager.generateCodeRelationsHeatmap(data),
                    self.reportGraphManager.generateWordCloud(data),
                    self.reportGraphManager.generateCodesWordCloud(data),
                    self.reportTableManager.generateDocumentsTable(data),
                    self.reportTableManager.generateCodesTable(data),
                    self.reportGraphManager.generateTreeMap(data)
                ]).then(() => {
                    UtilsHelper.hideLoadingOverlay();
                });

            } catch (e) {
                console.error(e);
                errorModal();
            }
        }, 500);
    }

    _selectAll(select) {
        let options = [];

        select.find('option').each((pos, el) => {
            options.push($(el).val());
        });

        select.val(options).trigger('change');
    }

    _clearSelection(select) {
        select.val('').trigger('change');
    }

    _getObjectFromDataId(element) {
        return QuoteManager.getInstance().repository.get(parseInt(element.attr('data-id')));
    }

    // ----------- static functions ----------
    static getInstance() {
        if (ResultManager.instance === undefined) {
            ResultManager.instance = new ResultManager();
        }

        return ResultManager.instance;
    }
}
