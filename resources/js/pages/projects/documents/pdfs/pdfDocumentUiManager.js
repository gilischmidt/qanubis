import UtilsHelper from "../../helpers/utilsHelper";
import CodeManager from "../../codes/codeManager";
import QuoteManager from "../../quotes/quoteManager";

export default class PdfDocumentUiManager {

    constructor(pdfDocumentManager) {
        this.pdfDocumentManager = pdfDocumentManager;
        this.mousePos = null;
        this.selectedRects = null;
        this.selectedText = null;

        this._bindWindowEventListeners();
        this._initialize();
    }

    // --------------- initialization ----------------
    _initialize() {
        let modals = $('#modal-add-pdf-quotes, #modal-edit-pdf-quote');
        let codesSelect = modals.find('.codes-select');

        function templateSelection(code) {
            if (!isset(code.element)) {
                return code.text;
            }

            let el = $(code.element);
            return `<span class="badge" style="color: ${el.attr('data-text-color')}; background-color: ${el.attr('data-color')}">${code.text}</span>`;
        }

        function templateResult(code) {
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
        }

        codesSelect.select2({
            placeholder: "Select or create codes...",
            tags: true,
            multiple: true,
            width: '100%',
            templateResult: templateResult,
            templateSelection: templateSelection,
            escapeMarkup: function (markup) {
                return markup;
            },
        });
    }

    _bindWindowEventListeners() {
        let self = this;
        let modals = $('#modal-add-pdf-quotes, #modal-edit-pdf-quote');

        modals.on('click', '.btn-add-pdf-quote-comment', function () {

            let modalBody = $(this).closest('.modal-body');
            let clone = modalBody.find('.pdf-quote-comment.markup').clone();
            clone.find('textarea').attr('required', 'required');
            clone.removeClass('markup');

            modalBody.find('.pdf-quote-comments').append(clone);

            clone.slideDown('fast');
        });

        modals.on('click', '.btn-remove-pdf-quote-comment', function () {
            $(this).closest('.pdf-quote-comment').slideUp('fast', function () {
                $(this).remove();
            });
        });

        $('#btn-add-pdf-document').click(function () {
            self._showAddModal();
        });

        $('.btn-add-pdf-quote').click(function () {
            self._showAddQuoteModal();
        });
    }


    // --------------- public functions ----------------
    updateEventListeners(document) {
        let container = document.showDocumentContainer;
        let self = this;

        container.on('click', '.btn-show-pdf-quotes-list', function () {
            self._showRightSideBar('quotes');
        });

        container.on('click', '.btn-show-pdf-quotes', function () {
            ResultManager.showQuotesModal([], [self.pdfDocumentManager.currentDocument.document]);
        });


        container.on('click', '.btn-show-pdf-comments-list', function () {
            self._showRightSideBar('comments');
        });

        container.on('click', '.pdf-text-selection-highlight', function () {
            let quote = QuoteManager.getInstance().repository.get(parseInt($(this).attr('data-quote-id')));
            self._scrollToQuoteInSidebar(quote);
        });

        container.on('click', '.btn-remove-quote', function () {
            let element = $(this).closest('.pdf-quote');
            self._showRemoveQuoteModal(self._getObjectFromDataId(element));
        });

        container.on('click', '.btn-edit-quote', function () {
            let element = $(this).closest('.pdf-quote');
            self._showEditQuoteModal(self._getObjectFromDataId(element));
        });

        container.on('click', '.btn-show-quote', function () {
            let element = $(this).closest('.pdf-quote');
            self._scrollToQuoteInViewer(self._getObjectFromDataId(element));
        });

        container.on('click', '.filter-codes-button', function () {
            self._showFilterQuotesModal();
        });


        container.find('.pdf-viewer-container').on('mouseup', function () {
            self._hideContextMenu();
        }).on('mousedown', function (e) {
            self.mousePos = {
                x: e.pageX,
                y: e.pageY,
            };
        }).on('contextmenu', function (ev) {
            ev.preventDefault();
            self._showContextMenu();
        });
    }


    // --------------- documents ui ----------------
    _showAddModal() {
        let error = false;
        let manager = this;

        FileDialog({multiple: true, accept: 'application/pdf'}).then(async files => {
            UtilsHelper.showLoadingOverlay(null, {
                text: 'Uploading document(s)...',
                progress: true,
            });

            for (let i = 0; i < files.length; i++) {
                let file = files[i];

                if (file.type !== 'application/pdf') {
                    error = true;
                    errorModal('Invalid File',
                        'The following file has an invalid extension: ' + file.name + '.');

                    break;
                }

                await manager.pdfDocumentManager.add(file, (percentCompleted) => {
                    let message = (files.length > 1)
                        ? i + '/' + files.length + (percentCompleted === 100 ? '' : ' Uploading')
                        : percentCompleted === 100 ? '' : 'Uploading';

                    message += percentCompleted < 100
                        ? ' ' + percentCompleted.toString() + '%'
                        : ' Finishing upload...';

                    UtilsHelper.updateLoadingOverlayText(null, message);
                }).catch(reason => {
                    error = true;
                    console.error(reason);

                    if (reason === 'fatal') {
                        UtilsHelper.showFatalErrorMessage();
                    } else {
                        errorModal('Something went wrong',
                            'An error occurred while upload the following file: ' + file.name + '.');
                    }
                });

                if (error) break;
                UtilsHelper.updateLoadingOverlayProgress(null, (Math.floor(i * 100 / files.length)));
            }

            UtilsHelper.hideLoadingOverlay();
            if (!error) successModal(files.length + ' file(s) added successfully!',
                'We recommend that you name every document differently because documents with the same name will considered the same when generating reports.');
        }).catch(reason => {
            console.error(reason);

            if (reason === 'fatal') {
                UtilsHelper.showFatalErrorMessage();
            } else {
                errorModal();
            }
        });
    }

    _showRightSideBar(page) {
        let container = this.pdfDocumentManager.currentDocument.document.showDocumentContainer;
        let quotesList = container.find('.pdf-quotes-list');
        let commentsList = container.find('.pdf-comments-list');
        let hideSidebar = true;

        if (page === 'quotes') {
            commentsList.hide();

            if (quotesList.is(':hidden')) {
                hideSidebar = false;
                quotesList.show();
            } else {
                quotesList.hide();
            }
        } else {
            quotesList.hide();
            if (commentsList.is(':hidden')) {
                hideSidebar = false;
                commentsList.show();
            } else {
                commentsList.hide();
            }
        }

        if (hideSidebar) {
            container.removeClass('splitted');
        } else {
            container.addClass('splitted');
        }
    }

    _scrollToQuoteInSidebar(quote) {
        let element = quote.element;
        let leftSidebar = this.pdfDocumentManager.currentDocument.document.showDocumentContainer.find('.pdf-right-sidebar');
        let card = element.find('.card').first();

        let quotesList = this.pdfDocumentManager.currentDocument.document.showDocumentContainer.find('.pdf-quotes-list');

        if (quotesList.is(':hidden')) {
            this._showRightSideBar('quotes');
        }

        leftSidebar.animate({
            scrollTop: element.offset().top - leftSidebar.offset().top + leftSidebar.scrollTop()
        }, () => {
            if (!card.hasClass('animated')) {
                card.addClass('border-secondary animated');
                card.animate({
                    borderWidth: 5,
                }, 'fast', () => {
                    setTimeout(() => {
                        card.removeClass('border-secondary animated');
                        card.animate({
                            borderWidth: 1,
                        }, 'fast');
                    }, 2000);
                });
            }
        });
    }

    _scrollToQuoteInViewer(quote) {

        let viewerContainer = this.pdfDocumentManager.currentDocument.document.showDocumentContainer.find('.pdf-viewer-container');
        let quoteHighlight = viewerContainer.find(`[data-quote-id=${quote.id}]`);

        if (quoteHighlight.length === 0) {
            let page = parseInt(quote.extraData.coords[0].page);
            this.pdfDocumentManager.currentDocument.viewer.toolbarComponent._showPage(page + 1);
        } else {
            viewerContainer.animate({
                scrollTop: quoteHighlight.offset().top - viewerContainer.offset().top + viewerContainer.scrollTop()
            }, () => {
                if (!quoteHighlight.hasClass('animated')) {
                    quoteHighlight.addClass('animated');
                    setTimeout(() => {
                        quoteHighlight.removeClass('animated');
                    }, 1000);
                }
            });
        }
    }


    // --------------- quotes ui ----------------
    _showAddQuoteModal() {
        let self = this;
        let modal = $('#modal-add-pdf-quotes');
        let codesSelect = modal.find('.codes-select');

        codesSelect.val(null).empty();
        modal.find('.pdf-quote-comment').not('.markup').remove();

        let selectCodes = [];
        CodeManager.getInstance().repository.forEach(function (code) {
            let newOption = new Option(code.name, code.id, false, false);
            $(newOption).attr('data-color', code.color).attr('data-text-color', code.text_color).attr('data-parent', code?.parent?.id);

            selectCodes.push(newOption);
        });

        selectCodes.sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())).forEach(c => codesSelect.append(c));
        codesSelect.trigger('change');

        modal.off('submit').on('submit', async function (ev) {
            ev.preventDefault();
            await self._createQuoteFromSelectedText();
        })

        modal.modal();
    }

    async _createQuoteFromSelectedText() {
        UtilsHelper.showLoadingOverlay();

        try {
            let textSelectionComponent = this.pdfDocumentManager.currentDocument.viewer.textSelectionComponent;
            let coords = textSelectionComponent.getSelectedTextCoords(this.selectedRects);
            let modal = $('#modal-add-pdf-quotes');

            let codes = [];
            const selectedCodes = modal.find('select').val();

            for (let i = 0; i < selectedCodes.length; i++) {
                const existingCode = CodeManager.getInstance().repository.get(selectedCodes[i]);
                if (existingCode) {
                    codes.push(CodeManager.getInstance().repository.get(selectedCodes[i]));
                } else {
                    const newCode = await CodeManager.getInstance().add({
                        name: selectedCodes[i],
                        color: 'black',
                    });

                    codes.push(newCode);
                }
            }

            let comments = [];
            modal.find('.pdf-quote-comment').not('.markup').each(function (pos, el) {
                comments.push($(el).find('textarea').val());
            });

            let quote = await this.pdfDocumentManager.pdfQuoteManager.add(codes, {
                text: textSelectionComponent._replaceWhitespace(this.selectedText),
                comments: comments,
                extraData: {
                    coords: coords
                }
            });

            textSelectionComponent.quotes.push(quote);

            for (let i = 0; i < coords.length; i++) {
                textSelectionComponent.showHighlight(quote, coords[i]);
            }

            modal.modal('hide');
        } catch (e) {
            console.error(e);
            UtilsHelper.showFatalErrorMessage();
        } finally {
            UtilsHelper.hideLoadingOverlay();
        }
    }

    _showEditQuoteModal(quote, isInsideAnotherModal = false) {
        let self = this;
        let modal = $('#modal-edit-pdf-quote');
        let codesSelect = modal.find('.codes-select');
        let selectedCodes = [];

        codesSelect.val(null).empty();
        modal.find('.pdf-quote-comment').not('.markup').remove();

        CodeManager.getInstance().repository.forEach(function (code) {
            let newOption = new Option(code.name, code.id, false, false);
            $(newOption).attr('data-color', code.color).attr('data-text-color', code.text_color);

            if (quote.codes.includes(code)) {
                selectedCodes.push(code.id);
            }

            codesSelect.append(newOption);
        });

        codesSelect.val(selectedCodes).trigger('change');

        for (let i = 0; i < quote.comments.length; i++) {
            let comment = quote.comments[i];

            let clone = modal.find('.pdf-quote-comment.markup').clone();
            clone.attr('data-id', comment.id);
            clone.removeClass('markup');
            clone.show();

            let textarea = clone.find('textarea');
            textarea.attr('required', 'required');
            textarea.val(comment.content).html(comment.content);

            clone.find('.created-at').html(Intl.DateTimeFormat('en', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: "numeric",
                minute: "numeric"
            }).format(new Date(comment.updated_at)));

            modal.find('.pdf-quote-comments').append(clone);
        }

        return new Promise((resolve, reject) => {
            modal.off('submit').on('submit', async function (ev) {
                ev.preventDefault();
                await self._updateQuote(quote);
                resolve(true);
            })

            modal.off('hidden.bs.modal').on('hidden.bs.modal', function () {
                resolve(false);
                if (isInsideAnotherModal) {
                    $('body').addClass('modal-open')
                }
            });

            modal.modal();
        });
    }

    async _updateQuote(quote) {
        UtilsHelper.showLoadingOverlay();

        try {
            let modal = $('#modal-edit-pdf-quote');
            let codesSelect = modal.find('.codes-select');

            let comments = [];
            modal.find('.pdf-quote-comment').not('.markup').each(function (pos, el) {
                let comment = $(el);
                let textarea = comment.find('textarea');

                if (isset(comment.attr('data-id'))) {
                    comments.push({
                        id: comment.attr('data-id'),
                        content: textarea.val()
                    });
                } else {
                    comments.push({
                        content: textarea.val()
                    });
                }
            });

            await QuoteManager.getInstance().update(quote, {
                code_id: codesSelect.val(),
                comments: comments,
            });

            await this.pdfDocumentManager.pdfQuoteManager.updateQuotes({
                updated: [quote],
            })

            if (quote.element) quote.element.find('.pdf-quote-comments-count').html(comments.length);

            modal.modal('hide');
        } catch (e) {
            console.error(e);
            UtilsHelper.showFatalErrorMessage();
        } finally {
            UtilsHelper.hideLoadingOverlay();
        }
    }

    _showRemoveQuoteModal(quote, isInsideAnotherModal = false) {
        let self = this;

        return new Promise((resolve, reject) => {
            confirmModal(null, null, null, null, function () {
                UtilsHelper.showLoadingOverlay();

                self.pdfDocumentManager.pdfQuoteManager.remove(quote).then(() => {
                    self.pdfDocumentManager.pdfQuoteManager.updateDocumentQuotes();
                    resolve(true);
                }).catch(reason => {
                    console.error(reason);

                    if (reason === 'fatal') {
                        UtilsHelper.showFatalErrorMessage();
                    } else {
                        errorModal();
                    }
                    resolve(false);
                }).finally(() => {
                    UtilsHelper.hideLoadingOverlay();
                });
            }, () => resolve(false));
        })
    }


    // --------------- context menu ui ----------------
    _showContextMenu() {
        this.selectedRects = Array.from(
            window.getSelection().getRangeAt(0).getClientRects(),
        );

        let selectedText = getWindowTextSelection();
        let contextMenu = $('.pdf-context-menu');

        if (isset(selectedText)) {
            contextMenu.css({
                'left': this.mousePos.x,
                'top': this.mousePos.y - 15
            }).show();
        } else {
            contextMenu.hide();
        }
    }

    _hideContextMenu() {
        this.selectedText = getWindowTextSelection();
        $('.pdf-context-menu').hide();
    }


    // --------------- private functions ----------------
    _getObjectFromDataId(element) {
        return QuoteManager.getInstance().repository.get(parseInt(element.attr('data-id')));
    }
}
