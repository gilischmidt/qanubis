import DocumentManager from "../documents/documentManager";
import CodeManager from "../codes/codeManager";
import QuoteManager from "../quotes/quoteManager";
import ProjectManager from "../project/projectManager";
import AjaxHelper from "../helpers/ajaxHelper";
import MemoManager from "../memos/memoManager";

export default class AppState {
    _initialize() {
        this.unsavedChangesMessageElement = $('#message-unsaved-changes');
        this.savedChangesMessageElement = $('#message-saved-changes');

        this.hasUnsavedChanges = false;
        this.ignoreNewChanges = false;

        this.unsavedChangesMessageElement.hide();
        this.savedChangesMessageElement.hide();
    }

    async initializeData() {
        let appInitialData = await AjaxHelper.ajaxCall({
            method: 'GET',
            url: appRoutes.fetch,
        });

        if (isset(appInitialData)) {
            let documents = appInitialData.documents;
            let documentManager = DocumentManager.getInstance();
            for (let i = documents.length - 1; i >= 0; i--) {
                await documentManager.instantiateDocument({
                    ...documents[i],
                    showIfFirst: false
                });
            }

            let codes = appInitialData.codes;
            let codeManager = CodeManager.getInstance();
            for (let i = codes.length - 1; i >= 0; i--) {
                await codeManager.instantiateCode({
                    ...codes[i]
                }, false);
            }
            const codeRepository = CodeManager.getInstance().repository;
            codeRepository.forEach(code => {
                if (isset(code.parent_code_id)) {
                    code.parent = codeRepository.get(code.parent_code_id);

                    if (code.parent) {
                        if (!code.parent.children) code.parent.children = [];
                        code.parent.children.push(code);
                        CodeManager.getInstance().updateChildrenCount(code.parent);
                    }
                }
            });

            CodeManager.getInstance().uiManager.refreshTreeView();


            let quotes = appInitialData.quotes ?? [];
            let quoteManager = QuoteManager.getInstance();
            for (let i = quotes.length - 1; i >= 0; i--) {
                let codes = quotes[i].codes.map(t => codeManager.repository.get(t.id));
                let document = documentManager.repository.get(quotes[i].document_id);

                const data = {
                    ...quotes[i],
                    text: quotes[i].data.text,
                    extraData: quotes[i].extra_data,
                };

                delete data.extra_data;
                delete data.data;
                delete data.laravel_through_key

                await quoteManager.instantiateQuote(document, codes, data);
            }


            let memos = appInitialData.memos;
            let memoManager = MemoManager.getInstance();
            for (let i = memos.length - 1; i >= 0; i--) {
                await memoManager.instantiateMemo(memos[i]);
            }

            let projectData = appInitialData.project;
            let projectManager = ProjectManager.getInstance();
            projectManager.projectData = projectData;
        }

        $('#documents-page-tab').click();
    }

    notifyHasUnsavedChanges() {
        if (this.ignoreNewChanges) return;

        this.savedChangesMessageElement.hide();
        this.unsavedChangesMessageElement.show();
        this.hasUnsavedChanges = true;
    }

    notifyResolvedUnsavedChanges() {
        this.unsavedChangesMessageElement.hide();
        this.savedChangesMessageElement.show();

        this.hasUnsavedChanges = false;
    }

    static getInstance() {
        if (AppState.instance === undefined) {
            AppState.instance = new AppState();
            AppState.instance._initialize();
        }

        return AppState.instance;
    }
}
