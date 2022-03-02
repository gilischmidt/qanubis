import CodeRepository from "./codeRepository";
import Code from "./code";
import BaseManager from "../baseClasses/baseManager";
import CodeUiManager from "./codeUiManager";
import QuoteManager from "../quotes/quoteManager";
import AjaxHelper from "../helpers/ajaxHelper";

export default class CodeManager extends BaseManager {

    _initialize() {
        this.repository = new CodeRepository();

        this.uiManager = new CodeUiManager(this);
        this.codesList = null;

        this._initializeList();
    }

    // ------------ initialization ----------
    _initializeList() {
        this.codesList = this.uiManager.codeListingPage.find('.codes-list').DataTable({
            autoWidth: false,
            order: [[1, "asc"]],
            columnDefs: [
                {
                    targets: [0, 7],
                    orderable: false,
                },
                {
                    targets: [0, 4, 5],
                    width: '50px',
                },
                {
                    targets: 6,
                    className: "text-center",
                    width: '150px',
                },
                {
                    targets: 7,
                    className: "text-center",
                    width: '110px',
                }
            ],
            language: {
                "emptyTable": "No codes found. Use the button above to add one."
            },
        });
    }


    // ---------- public functions ------------
    async add(data) {
        let self = this;

        if (isset(data.color)) {
            data.text_color = pickTextColorBasedOnBgColor(data.color);
        }

        return AjaxHelper.ajaxCall({
                method: 'POST',
                url: appRoutes.codes.store,
                data: data
            }
        ).then(async function (result) {
            const code = self.instantiateCode(result);
            self.uiManager.refreshTreeView();
            return code;
        })
    }

    instantiateCode(data, touchParent = true) {
        try {
            let code = new Code(data);

            let row = this.codesList.row.add([
                `<span class="badge p-2" style="color: ${code.text_color}; background: ${code.color};"> ${code.color}</span>`,
                code.name,
                isset(code.brief_description) ? code.brief_description : '<span class="font-italic text-muted">-</span>',
                isset(code.full_description) ? code.full_description : '<span class="font-italic text-muted">-</span>',
                0,
                code?.children?.length || 0,
                UtilsHelper.parseDate(code.created_at),
                this.uiManager.codeListingPage.find('.code-list-options-col').clone().html()
            ]).draw();

            $(row.node()).attr('data-code-id', code.id);

            code.tableRow = row;
            this.repository.add(code);

            if (touchParent && isset(data.parent_code_id)) {
                code.parent = this.repository.get(data.parent_code_id);
                if (code.parent) {
                    if (!code.parent.children) code.parent.children = [];
                    code.parent.children.push(code);
                    this.updateChildrenCount(code.parent);
                }
            }

            return code;
        } catch (e) {
            console.error(e);
            throw 'fatal';
        }
    }

    async update(code, data) {
        const self = this;

        if (isset(data.color)) {
            data.text_color = pickTextColorBasedOnBgColor(data.color);
        }

        return AjaxHelper.ajaxCall({
                method: 'PUT',
                url: appRoutes.codes.update.replace('#codeId', code.id),
                data: data,
            }
        ).then(async function (result) {
            try {
                if (isset(code.parent_code_id) && (!isset(data.parent_code_id) || data.parent_code_id !== code.parent_code_id)) {
                    code.parent.children = code.parent.children.filter(c => c.id !== code.id);
                    self.updateChildrenCount(code.parent);
                    code.parent = null;
                }

                if (isset(data.parent_code_id) && data.parent_code_id !== code.parent_code_id) {
                    code.parent = self.repository.get(data.parent_code_id);
                    if (!code.parent.children) code.parent.children = [];
                    code.parent.children.push(code);
                    self.updateChildrenCount(code.parent);
                }

                code.updateData(result);

                let rowData = code.tableRow.data();
                rowData[0] = `<span class="badge p-2" style="color: ${code.text_color}; background: ${code.color};"> ${code.color}</span>`;
                rowData[1] = code.name;
                rowData[2] = isset(code.description) ? code.brief_description : '<span class="font-italic text-muted"-</span>';
                rowData[3] = isset(code.full_description) ? code.full_description : '<span class="font-italic text-muted">-</span>';

                code.tableRow.data(rowData).draw();

                await QuoteManager.getInstance().updateCode(code);

                self.uiManager.refreshTreeView();
            } catch (e) {
                console.error(e);
                throw  'fatal';
            }
        });
    }

    async remove(code) {
        let self = this;

        await AjaxHelper.ajaxCall({
                method: 'DELETE',
                url: appRoutes.codes.destroy.replace('#codeId', code.id)
            }
        ).then(async function (result) {
            try {
                if (isset(code.parent_code_id)) {
                    code.parent.children.filter(c => c.id !== code.id);
                    self.updateChildrenCount(code.parent);
                }

                if (code.children) {
                    code.children.forEach(c => c.parent = null);
                }

                code.tableRow.remove().draw();
                self.repository.remove(code);

                await QuoteManager.getInstance().removeCode(code);

                self.uiManager.refreshTreeView();
            } catch (e) {
                console.error(e);
                throw 'fatal';
            }
        });
    }

    async updateQuotesCount(code, amount = null) {
        let rowData = code.tableRow.data();

        if (isset(amount)) {
            let currentCount = parseInt(rowData[4]);

            if (typeof amount === 'string') {
                if (amount.charAt(0) === '+') {
                    amount = currentCount + parseInt(amount.substr(1));
                } else {
                    amount = currentCount - parseInt(amount.substr(1));
                }
            }
        } else {
            amount = QuoteManager.getInstance().repository.getForCode(code).length;
        }

        rowData[4] = amount;
        code.tableRow.data(rowData).draw();

        this.uiManager.refreshTreeView();
    }

    updateChildrenCount(code) {
        let rowData = code.tableRow.data();
        rowData[5] = code?.children?.length || 0;
        code.tableRow.data(rowData).draw();
    }


    // ----------- static functions ----------
    static getInstance() {
        if (CodeManager.instance === undefined) {
            CodeManager.instance = new CodeManager();
            CodeManager.instance._initialize();
        }

        return CodeManager.instance;
    }
}

