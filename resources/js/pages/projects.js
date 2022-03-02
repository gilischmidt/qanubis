import CodeManager from "./projects/codes/codeManager";
import DocumentManager from "./projects/documents/documentManager";
import QuoteManager from "./projects/quotes/quoteManager";
import UtilsHelper from "./projects/helpers/utilsHelper";
import SaveManager from "./projects/appState/saveManager";
import AppState from "./projects/appState/appState";
import ResultManager from "./projects/results/resultManager";
import ProjectManager from "./projects/project/projectManager";
import MemoManager from "./projects/memos/memoManager";


UtilsHelper.showLoadingOverlay(null, {
    text: 'Fetching project data...'
});
$('.main-loading-info').hide();
/*
window.onbeforeunload = function (e) {
    if (window.AppState.hasUnsavedChanges) {
        return 'Any unsaved changes will be lost! Please save your project before closing.'
    }
};
 */

// abort so it dose not look stuck
window.onunload = () => {
    WritableStream.abort();
    WritableStream.abort();
}


$(document).ready(function () {
    /*
    $('.back-button').click(function () {
        let url = $(this).attr('data-href');
        if (window.AppState.hasUnsavedChanges) {
            confirmModal(null, 'Any unsaved changes will be lost!', null, null, function () {
                window.location = url;
            });
        } else {
            window.location = url;
        }
    });
     */

    $(window).on('click', function () {
        $('.pdf-context-menu').hide();
    });

    $('.slim-scroll-auto').slimScroll({
        height: '100%',
    });

    // app initialization
    try {
        window.CodeManager = CodeManager.getInstance();
        window.DocumentManager = DocumentManager.getInstance();
        window.QuoteManager = QuoteManager.getInstance();
        window.UtilsHelper = UtilsHelper;
        window.SaveManager = new SaveManager();
        window.ResultManager = ResultManager.getInstance();
        window.ProjectManager = ProjectManager.getInstance();
        window.MemoManager = MemoManager.getInstance();
        window.AppState = AppState.getInstance();

        setTimeout(async () => {
            window.history.replaceState(null, null, window.location.pathname);

            await window.AppState.initializeData().catch(reason => {
                console.error(reason);
                showFatalError();
            }).then(() => {
                switch (defaultPage) {
                    case 'project':
                        $('#project-page-tab').click();
                        break;
                }
            }).finally(() => {
                setTimeout(() => {
                    UtilsHelper.hideLoadingOverlay();
                }, 500);
            });
        }, 100);
    } catch (e) {
        console.error(e);
        showFatalError();
    }

    function showFatalError() {
        UtilsHelper.showFatalErrorMessage({
            title: 'Something went wrong.',
            message: 'Your project couldn\'t be loaded. Please refresh the page or contact us to solve this problem.'
        });
    }
});


