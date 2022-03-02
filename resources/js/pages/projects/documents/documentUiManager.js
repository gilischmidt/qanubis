import UtilsHelper from "../helpers/utilsHelper";
import ResultManager from "../results/resultManager";

export default class DocumentUiManager {

    constructor(documentManager) {
        this.documentManager = documentManager;
        this.documentListingPage = $('#documents-component-listing');

        this._bindWindowEventListeners();
    }

    _bindWindowEventListeners() {
        let self = this;

        $(document).on('click', '.show-document-listing-page', function () {
            $('.show-document').hide();
            $('#documents-component-listing').fadeIn();
        });


        // ------- document crud --------
        this.documentListingPage.on('click', '.btn-edit-document', function () {
            self._showEditModal(self._getObjectFromClosestTr($(this)));
        });

        this.documentListingPage.on('click', '.btn-remove-document', function () {
            self._showRemoveModal(self._getObjectFromClosestTr($(this)));
        });

        this.documentListingPage.on('click', '.btn-select-document', function () {
            self._selectDocument(self._getObjectFromClosestTr($(this)));
        });

        this.documentListingPage.on('click', '.btn-show-current-document', function () {
            let doc = $(this).closest('.document-option').attr('data-id');
            doc = self.documentManager.repository.get(doc);
            self._selectDocument(doc);
        });

        this.documentListingPage.on('click', '.btn-show-document-quotes', function () {
            self._showQuotes(self._getObjectFromClosestTr($(this)));
        });
    }


    // ---------- private functions ----------
    _showQuotes(document) {
        ResultManager.getInstance().showQuotesModal([],[document]);
    }

    _showEditModal(document) {
        let self = this;
        let modal = $('#modal-edit-document');
        let form = modal.find('form');
        let inputName = modal.find('[name=name]');
        let inputDescription = modal.find('[name=description]');

        inputName.val(document.name);
        inputDescription.val(document.description);

        form.off('submit').on('submit', function (ev) {
            ev.preventDefault();

            UtilsHelper.showLoadingOverlay();

            self.documentManager.update(document, {
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
                modal.modal('hide');
                UtilsHelper.hideLoadingOverlay();
            });
        });

        modal.modal();
    }

    _showRemoveModal(document) {
        let self = this;

        confirmModal(null, null, null, null, function () {
            UtilsHelper.showLoadingOverlay();

            self.documentManager.remove(document).catch(reason => {
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

    _selectDocument(document) {
        UtilsHelper.showLoadingOverlay();

        this.documentManager.select(document).catch(reason => {
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

    _resetFilterQuotesModal(){
        const modal = $('#modal-search-quotes');
        modal.find('')
    }


    _getObjectFromClosestTr(element) {
        return this.documentManager.repository.get(element.closest('tr').attr('data-document-id'));
    }

}
