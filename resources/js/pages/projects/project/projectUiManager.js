import AppState from "../appState/appState";
import UtilsHelper from "../helpers/utilsHelper";

export default class ProjectUiManager {
    constructor(projectManager) {
        this.projectManager = projectManager;
        this.projectPage = $('#project-component-form');

        this._initializeForm();
        this._bindWindowEventListeners();
    }

    _initializeForm() {
        this.projectPage.find('[name=color]').spectrum({
            type: "component",
            hideAfterPaletteSelect: true,
            showAlpha: false,
            allowEmpty: false,
        });
    }

    _bindWindowEventListeners() {
        let manager = this;

        // show page
        $('#btn-project-page').click(function () {

            let form = $('#form-project');
            form.find('[name=name]').val(manager.projectManager.projectData.name);
            form.find('[name=color]').spectrum('set', manager.projectManager.projectData.color);
            form.find('[name=description]').val(manager.projectManager.projectData.description);

            AppState.getInstance().showPage(manager.projectPage);
        });

        $('#btn-delete-project').click(function () {
            let btn = this;
            confirmModal(null, null, null, null, function () {
                btn.closest('form').submit();
            });
        });

        // validate delete project input
        $('#form-delete-project').on('submit', function (ev) {
            if ($('#delete-project-confirm-input').val() === manager.projectManager.projectData.name) {
                return true;
            } else {
                ev.preventDefault();
                return false;
            }
        });

        // handle update project data form
        $('#form-project').submit(function (ev) {
            ev.preventDefault();
            UtilsHelper.showLoadingOverlay();

            $('#delete-project-confirm-input').val('').trigger('keyup');
            let form = $(this);

            manager.projectManager.update({
                name: form.find('[name=name]').val(),
                color: form.find('[name=color]').val(),
                description: form.find('[name=description]').val(),
            }).catch(reason => {
                console.error(reason);
                UtilsHelper.hideLoadingOverlay();

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
}
