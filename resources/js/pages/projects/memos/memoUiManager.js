import UtilsHelper from "../helpers/utilsHelper";

export default class MemoUiManager {
    constructor(manager) {
        this.manager = manager;
        this.memoPage = $('#memo-component-listing');

        this._bindWindowEventListeners();
    }

    _bindWindowEventListeners() {
        let self = this;

        $(document).on('click', '.btn-show-memo-page', function () {
            self.manager.hideShowPage();
            self.memoPage.fadeIn('fast');
        });


        // listing page
        self.memoPage.on('click', '#add-memo-button', function () {
            self._showAddModal();
        });


        // select memo
        this.memoPage.on('click', '.btn-select-memo', function () {
            self.manager.show(self._getObjectFromClosestTr($(this)));
        });

        this.memoPage.on('click', '.btn-edit-memo', function () {
            self._showEditModal(self._getObjectFromClosestTr($(this)));
        });

        this.memoPage.on('click', '.btn-remove-memo', function () {
            self._showRemoveModal(self._getObjectFromClosestTr($(this)));
        });


        // show page listeners
        $(document).on('click', '.memo-show .btn-edit-memo', function () {
            self._showEditModal(self.manager.selectedMemo.memo);
        });

        $(document).on('click', '.memo-show  .btn-remove-memo', function () {
            self._showRemoveModal(self.manager.selectedMemo.memo);
        });

        $(document).on('click', '.memo-show  .btn-save-memo', function () {
            self._updateMemoContent(self.manager.selectedMemo.memo);
        });
    }

    _showAddModal() {
        let self = this;
        let modal = $('#modal-add-memo');
        let form = modal.find('form');
        let inputName = modal.find('[name=name]');
        let inputDescription = modal.find('[name=description]');

        inputName.val('');
        inputDescription.val('');

        form.off('submit').on('submit', function (ev) {
            ev.preventDefault();

            UtilsHelper.showLoadingOverlay();

            self.manager.add({
                name: inputName.val(),
                description: inputDescription.val(),
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

    _showEditModal(memo) {
        let self = this;
        let modal = $('#modal-edit-memo');
        let form = modal.find('form');
        let inputName = modal.find('[name=name]');
        let inputDescription = modal.find('[name=description]');

        inputName.val(memo.name);
        inputDescription.val(memo.description);

        form.off('submit').on('submit', function (ev) {
            ev.preventDefault();

            UtilsHelper.showLoadingOverlay();

            self.manager.update(memo, {
                name: inputName.val(),
                description: inputDescription.val(),
            }).then((memo) => {
                if (isset(self.manager.selectedMemo) && self.manager.selectedMemo.memo === memo) {
                    let page = self.manager.selectedMemo.page;
                    page.find('.memo-name').html(memo.name);
                    page.find('.memo-description').html(memo.description);
                }
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

    _showRemoveModal(memo) {
        let self = this;

        confirmModal(null, null, null, null, function () {
            UtilsHelper.showLoadingOverlay();

            self.manager.remove(memo).catch(reason => {
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

    _getObjectFromClosestTr(element) {
        return this.manager.repository.get(element.closest('tr').attr('data-memo-id'));
    }

    _updateMemoContent(memo) {
        UtilsHelper.showLoadingOverlay();

        let page = this.manager.selectedMemo.page;
        let editor = page.find('.memo-content');
        let content = editor.summernote('isEmpty') ? null : editor.summernote('code');

        this.manager.update(memo, {
            content: content,
        }).then(result => {
            page.find('.info-saved').show();
            page.find('.info-unsaved').hide();
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
    }
}
