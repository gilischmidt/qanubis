import QuoteManager from "../quotes/quoteManager";
import UtilsHelper from "../helpers/utilsHelper";
import ResultManager from "../results/resultManager";

export default class CodeUiManager {
    constructor(codeManager) {
        this.codeManager = codeManager;
        this.codeListingPage = $('#codes-component-listing');

        this.treeView = this.codeListingPage.find('.tree-view')
        this.listView = this.codeListingPage.find('.list-view')

        this.jsTree = false;

        this._bindWindowEventListeners();
        this._initialize();
    }


    // ------------ initialization ----------

    _bindWindowEventListeners() {
        let self = this;

        this.codeListingPage.on('change', '#select-codes-view-type', function () {
            const val = $(this).val();
            localStorage.setItem('codes-views', val);

            if (val === 'list') {
                self.treeView.hide();
                self.listView.fadeIn();
            } else {
                self.refreshTreeView();
                self.listView.hide();
                self.treeView.fadeIn();
            }
        });

        $(document).on('click', '.code-badge-clickable', function () {
            const code = self.codeManager.repository.get($(this).attr('data-id'));
            if (code) self.showEditModal(code, $(this).attr('data-is-inside-modal'));
        });

        this.treeView.on('click', '.btn-expand-all', function () {
            self.jsTree.jstree(true).open_all();
        });


        this.treeView.on('click', '.btn-hide-all', function () {
            self.jsTree.jstree(true).close_all();
        });


        // ----------- code crud ---------------
        this.codeListingPage.on('click', '#add-code-button', function () {
            self.showAddModal();
        });

        this.codeListingPage.on('click', '.btn-edit-code', function () {
            self.showEditModal(self._getObjectFromClosestTr($(this)));
        });


        this.codeListingPage.on('click', '.btn-remove-code', function () {
            self.showRemoveModal(self._getObjectFromClosestTr($(this)));
        });

        this.codeListingPage.on('click', '.btn-show-code-quotes', function () {
            self._showQuotes(self._getObjectFromClosestTr($(this)))
        });
    }

    _initialize() {
        const self = this;
        const initCodesSelect = (selects, parent) => {
            selects.select2({
                placeholder: "Select a code...",
                width: '100%',
                allowClear: true,
                searchable: true,
                dropdownParent: parent,
                templateResult: (code) => {
                    if (!isset(code.element)) {
                        return code.text;
                    }

                    let el = $(code.element)
                    return `<i class="fas fa-tag mr-1" style="color: ${el.attr('data-color')}"></i> ${code.text}`;
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

        $(document).on('select2:open', () => {
            let allFound = document.querySelectorAll('.select2-container--open .select2-search__field');
            allFound[allFound.length - 1].focus();
        });

        initCodesSelect($('#modal-add-code').find('select[name=parent_code_id]'), $('#modal-add-code'));
        initCodesSelect($('#modal-edit-code').find('select[name=parent_code_id]'), $('#modal-edit-code'));

        const emptyMessage = this.treeView.find('.no-codes-found');
        const toggleEmptyMessage = (show) => {
            emptyMessage.css('opacity', show ? 1 : 0);
        }

        // initialize tree view
        this.jsTree = $('#jstree_demo_div');

        // hide context menu when selection more than one code
        this.jsTree.on('show_contextmenu.jstree', function (e, reference, element) {
            if (self.jsTree.jstree(true).get_selected().length > 1) $.vakata.context.hide();
        });

        this.jsTree.on("before_open.jstree refresh.jstree move_node.jstree set_state.jstree show_node.jstree redraw.jstree", function (ev, node) {
            self.jsTree.find('.jstree-node').each(function () {
                const node = $(this);
                node.find('.jstree-anchor').first().children('.jstree-icon').css('color', node.attr('data-color'));
            });
        });


        this.jsTree.on('redraw.jstree', function () {
            const els = self.jsTree.find('.jstree-node').each(function () {
                const node = $(this);
                node.find('.jstree-anchor').first().children('.jstree-icon').css('color', node.attr('data-color'));
            });

            toggleEmptyMessage(els.length === 0);
        });


        this.jsTree.on('search.jstree', function (nodes, str, res) {
            if (str.nodes.length === 0) {
                self.jsTree.jstree(true).hide_all();
                toggleEmptyMessage(true);
            } else {
                toggleEmptyMessage(false);
            }
        });

        this.jsTree.on("move_node.jstree", function (e, data) {
            UtilsHelper.showLoadingOverlay();

            const code = self.codeManager.repository.get(data.node.id);

            self.codeManager.update(code, {
                parent_code_id: data.parent !== '#' ? data.parent : null,
            }).catch(reason => {
                console.error(reason);

                if (reason === 'fatal') {
                    UtilsHelper.showFatalErrorMessage();
                } else {
                    errorModal();
                }
            }).finally(() => {
                UtilsHelper.hideLoadingOverlay();
            });
        });

        this.jsTree.jstree({
            state: {key: 'p-' + projectId.toString()},
            core: {
                themes: {
                    variant: "large"
                },
                check_callback: function (operation, node, node_parent, node_position, more) {
                    // operation can be 'create_node', 'rename_node', 'delete_node', 'move_node', 'copy_node' or 'edit'
                    // in case of 'rename_node' node_position is filled with the new node name
                    return operation === 'move_node';
                },
                data: []
            },
            plugins: [
                "contextmenu",
                "dnd",
                "search",
                "sort",
                "state",
                "types",
                "wholerow",
            ],
            types: {
                "default": {
                    "icon": "fas fa-tag fa-1x"
                },
            },
            contextmenu: {
                items: function ($node) {
                    return {
                        Quotes: {
                            label: "Show Quotes",
                            icon: "fas fa-code",
                            separator_before: false,
                            separator_after: false,
                            action: function (obj) {
                                const code = self.codeManager.repository.get(self.jsTree.jstree(true).get_selected()[0])
                                if (code) self._showQuotes(code);
                            }
                        },
                        Edit: {
                            label: "Edit",
                            icon: "fas fa-edit",
                            separator_before: false,
                            separator_after: false,
                            action: function (obj) {
                                const code = self.codeManager.repository.get(self.jsTree.jstree(true).get_selected()[0])
                                if (code) self.showEditModal(code);
                            }
                        },
                        Delete: {
                            label: "Delete",
                            icon: "fas fa-trash text-danger",
                            separator_before: true,
                            separator_after: false,
                            action: function (obj) {
                                const code = self.codeManager.repository.get(self.jsTree.jstree(true).get_selected()[0])
                                if (code) self.showRemoveModal(code);
                            }
                        }
                    }
                }
            },
            dnd: {
                copy: false,
                large_drop_target: true,
                large_drag_target: true,
                use_html5: true,
            },
            search: {
                case_insensitive: true,
                show_only_matches: true
            },
        });

        let to = false;
        $('#input-code-tree-search').keyup(function () {
            const input = $(this);
            if (to) clearTimeout(to);
            to = setTimeout(() => {
                self.jsTree.jstree(true).show_all();
                self.jsTree.jstree(true).search(input.val());
            }, 250);
        });


        // initialize view mode
        const viewInput = this.codeListingPage.find('#select-codes-view-type');
        if (localStorage.getItem('codes-view')) viewInput.val(localStorage.getItem('codes-views') || 'list');

        viewInput.trigger('change');
    }


    // ---------- public functions ----------
    showAddModal() {
        let self = this;
        let modal = $('#modal-add-code');
        let form = modal.find('form');
        let inputName = modal.find('[name=name]');
        let inputBriefDescription = modal.find('[name=brief_description]');
        let inputDescription = modal.find('[name=description]');
        let inputColor = modal.find('[name=color]');
        let inputParentCode = modal.find('select[name=parent_code_id]');

        inputParentCode.empty();

        this.codeManager.repository.forEach(code => {
            let newOption = new Option(code.name, code.id, false, false);
            $(newOption).attr('data-color', code.color).attr('data-text-color', code.text_color);
            inputParentCode.append(newOption);
        });

        inputParentCode.val('').trigger('change');

        inputColor.spectrum({
            type: "component",
            hideAfterPaletteSelect: true,
            showAlpha: false,
            allowEmpty: false,
            color: '#000'
        });

        inputName.val('');
        inputDescription.val('');
        inputBriefDescription.val('');

        form.off('submit').on('submit', function (ev) {
            ev.preventDefault();

            UtilsHelper.showLoadingOverlay();

            self.codeManager.add({
                name: inputName.val(),
                description: inputDescription.val(),
                brief_description: inputBriefDescription.val(),
                color: inputColor.val(),
                parent_code_id: inputParentCode.val()
            }).catch(reason => {
                console.error(reason);

                if (reason === 'fatal') {
                    UtilsHelper.showFatalErrorMessage();
                } else {
                    errorModal();
                }
            }).finally(() => {
                UtilsHelper.hideLoadingOverlay();
                modal.modal('hide');
            });
        });

        modal.modal();
    }

    showEditModal(code, isInsideAnotherModal = false) {
        let self = this;

        let modal = $('#modal-edit-code');
        let form = modal.find('form');
        let inputName = modal.find('[name=name]');
        let inputDescription = modal.find('[name=description]');
        let inputBriefDescription = modal.find('[name=brief_description]');
        let inputColor = modal.find('[name=color]');
        let inputParentCode = modal.find('select[name=parent_code_id]');

        inputParentCode.empty();

        const childrenIds = [];

        if (code.children) {
            const fn = (childrenCode) => {
                childrenIds.push(childrenCode.id);
                if (childrenCode.children) childrenCode.children.forEach(fn);
            }

            code.children.forEach(fn);
        }

        let selectParentOptions = [];
        this.codeManager.repository.forEach(c => {
            if (c.id === code.id || childrenIds.includes(c.id)) return true;
            let newOption = new Option(c.name, c.id, false, false);
            $(newOption).attr('data-color', c.color).attr('data-text-color', c.text_color);
            selectParentOptions.push(newOption);
        });
        selectParentOptions.sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())).forEach(c => inputParentCode.append(c));


        inputColor.spectrum({
            type: "component",
            hideAfterPaletteSelect: true,
            showAlpha: false,
            allowEmpty: false,
            color: code.color
        });

        inputName.val(code.name);
        inputDescription.val(code.description);
        inputBriefDescription.val(code.brief_description);

        inputParentCode.val(code.parent_code_id || '').trigger('change');

        modal.find('.created-at').val(UtilsHelper.parseDate(code.created_at));

        return new Promise((resolve, reject) => {
            form.off('submit').on('submit', function (ev) {
                ev.preventDefault();

                UtilsHelper.showLoadingOverlay();

                self.codeManager.update(code, {
                    name: inputName.val(),
                    description: inputDescription.val(),
                    color: inputColor.val(),
                    brief_description: inputBriefDescription.val(),
                    parent_code_id: inputParentCode.val()
                })
                    .then(() => ResultManager.getInstance().updateQuotesModalIfOpen())
                    .then(() => resolve(true))
                    .catch(reason => {
                        console.error(reason);

                        if (reason === 'fatal') {
                            UtilsHelper.showFatalErrorMessage();
                        } else {
                            errorModal();
                        }
                        resolve(false);
                    }).finally(() => {
                    UtilsHelper.hideLoadingOverlay();
                    modal.modal('hide');
                });
            });

            modal.off('hidden.bs.modal').on('hidden.bs.modal', function () {
                resolve(false);
                if (isInsideAnotherModal) {
                    $('body').addClass('modal-open')
                }
            });

            modal.modal();
        });
    }

    showRemoveModal(code) {
        let self = this;

        confirmModal(null, 'All quotes that are only related to this Code will be removed too.', null, null, function () {
            UtilsHelper.showLoadingOverlay();

            self.codeManager.remove(code).catch(reason => {
                console.error(reason);

                if (reason === 'fatal') {
                    UtilsHelper.showFatalErrorMessage();
                } else {
                    errorModal();
                }
            }).finally(() => {
                UtilsHelper.hideLoadingOverlay();
            });
        });
    }

    showCodeQuotesModal(code) {
        let quotes = QuoteManager.getInstance().repository.getForCode(code);

        let modal = $('#modal-code-quotes');
        let emptyMessage = modal.find('.no-quotes-found-about');
        let modalContainer = modal.find('.quotes-container');
        let modalCodeName = modal.find('.code-name');
        let modalCodeColor = modal.find('.code-option-color');
        let quoteMarkup = modal.find('.code-modal-quotes-markup');
        let quoteContainerMarkup = modal.find('.code-modal-quotes-container-markup');

        modalContainer.html('');
        modalCodeName.html(code.name);
        modalCodeColor.css({color: code.color});

        if (quotes.length > 0) {
            let containers = new Map();

            for (let i = 0; i < quotes.length; i++) {
                let quote = quotes[i];
                let documentContainer = null;
                let quoteElement = quoteMarkup.clone();

                if (containers.has(quote.document.id)) {
                    documentContainer = containers.get(quote.document.id);
                } else {
                    documentContainer = quoteContainerMarkup.clone();

                    documentContainer.find('.code-modal-quotes-container-quotes').html('');
                    documentContainer.find('.btn-toggle-collapse').attr('data-target', '#code-quotes-collapse-' + i);
                    documentContainer.find('.collapse-container').attr('id', 'code-quotes-collapse-' + i);
                    documentContainer.find('.code-quotes-document-name').html(quote.document.name);
                    documentContainer.show();

                    containers.set(quote.document.id, documentContainer);

                    modalContainer.append(documentContainer);
                }

                quoteElement.find('.code-quotes-content').html(quote.text);
                quoteElement.show();

                documentContainer.find('.code-modal-quotes-container-quotes').append(quoteElement);
            }

            emptyMessage.hide();
        } else {
            emptyMessage.show();
        }

        modal.modal();
    }


    // ---------- private functions -----------
    _showQuotes(code) {
        ResultManager.getInstance().showQuotesModal([code]);
    }

    _getObjectFromClosestTr(element) {
        return this.codeManager.repository.get(element.closest('tr').attr('data-code-id'));
    }

    refreshTreeView() {
        const data = [];

        this.codeManager.repository.all().forEach(code => {
            let quotesCount = 0;
            if (code.tableRow && code.tableRow.data && code.tableRow.data()) quotesCount = code.tableRow.data()[4];

            let text = `${code.name} <span class="small text-muted">(${quotesCount} quote${quotesCount !== 1 ? 's' : ''})</span>`;
            if (code.children && code.children.length)
                text += ` <span class="small text-muted">(${code.children.length} ${code.children.length !== 1 ? 'children' : 'child'})</span>`

            data.push({
                text,
                id: code.id,
                parent: code?.parent?.id || '#',
                li_attr: {
                    'data-color': code.color,
                    'data-text-color': code.text_color || 'black',
                    'data-id': code.id,
                }
            });
        });


        this.jsTree.jstree(true).settings.core.data = data;
        this.jsTree.jstree(true).refresh();
    }
}
