import MemoUiManager from "./memoUiManager";
import AjaxHelper from "../helpers/ajaxHelper";
import MemoDiaryRepository from "./memoDiaryRepository";
import Memo from "./memo";

export default class MemoManager {
    constructor() {
        this.repository = new MemoDiaryRepository();
        this.uiManager = new MemoUiManager(this);

        this.showPage = $('#memo-component-show');
        this.selectedMemo = null;
        this.memosList = null;

        this._initializeList();
    }

    // ------------ initialization ----------
    _initializeList() {
        this.codesList = this.uiManager.memoPage.find('.memos-list').DataTable({
            autoWidth: false,
            columnDefs: [
                {
                    targets: [2],
                    width: '150px',
                    orderable: false,
                    className: "text-center",
                },
                {
                    targets: 3,
                    orderable: false,
                    className: "text-center",
                    width: '100px',
                }
            ],
            language: {
                "emptyTable": "No diaries found. Use the button above to add one."
            },
        });
    }


    // ------------ public functions ----------
    async add(data) {
        let self = this;

        return AjaxHelper.ajaxCall({
                method: 'POST',
                url: appRoutes.memos.store,
                data: data
            }
        ).then(async function (result) {
            return self.instantiateMemo(result);
        });
    }

    instantiateMemo(data) {
        try {
            let memo = new Memo(data);

            let row = this.codesList.row.add([
                memo.name,
                isset(memo.description) ? memo.description : '<span class="font-italic text-muted">No description</span>',
                UtilsHelper.parseDate(memo.created_at),
                this.uiManager.memoPage.find('.memos-list-options-col').html()
            ]).draw();

            $(row.node()).attr('data-memo-id', memo.id);

            memo.tableRow = row;
            this.repository.add(memo);

            return memo;
        } catch (e) {
            console.error(e);
            throw 'fatal';
        }
    }

    async update(memo, data) {
        return AjaxHelper.ajaxCall({
                method: 'PATCH',
                url: appRoutes.memos.update.replace('#memoId', memo.id),
                data: data,
            }
        ).then(function (result) {
            try {
                Object.assign(memo, result);

                let rowData = memo.tableRow.data();
                rowData[0] = memo.name;
                rowData[1] = isset(memo.description) ? memo.description : '<span class="font-italic text-muted">No description</span>';

                memo.tableRow.data(rowData).draw();
            } catch (e) {
                console.error(e);
                throw  'fatal';
            }
        });
    }

    async show(memo) {
        let self = this;

        return new Promise((resolve, reject) => {
            if ((isset(self.selectedMemo) && self.selectedMemo.memo !== memo) || !isset(self.selectedMemo)) {
                let newPage = self.showPage.clone();
                newPage.attr('id', '').appendTo(self.showPage.parent());

                newPage.find('.memo-name').html(memo.name);
                newPage.find('.memo-description').html(memo.description);
                newPage.find('.memo-content').html(memo.content).summernote({
                    placeholder: 'Type here...',
                    height: '70vh',
                    minHeight: '70vh',
                    maxHeight: '70vh',
                    disableResizeEditor: true,
                    disableDragAndDrop: true,
                    toolbar: [
                        ['style', ['style']],
                        ['font', ['bold', 'underline', 'strikethrough', 'clear']],
                        ['color', ['color']],
                        ['fontname', ['fontname']],
                        ['fontsize', ['fontsize']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['table', ['table']],
                        ['insert', ['link', 'hr']],
                        ['view', ['fullscreen', 'help']]
                    ],
                    callbacks: {
                        onChange(contents, editable) {
                            newPage.find('.info-saved').hide();
                            newPage.find('.info-unsaved').show();
                        }
                    }
                });

                if (isset(self.selectedMemo)) {
                    self.selectedMemo.page.remove();
                }

                self.selectedMemo = {
                    memo: memo,
                    page: newPage,
                };
            }

            $('#memo-component-listing').hide();
            self.selectedMemo.page.fadeIn('fast');

            resolve(memo);
        });
    }

    async remove(memo) {
        let self = this;

        return AjaxHelper.ajaxCall({
                method: 'DELETE',
                url: appRoutes.memos.destroy.replace('#memoId', memo.id)
            }
        ).then((result) => {
            try {
                if (isset(self.selectedMemo) && self.selectedMemo.memo === memo) {
                    let pageToRemove = self.selectedMemo.page;
                    self.selectedMemo = null;

                    $('#btn-memo-page').click();
                    pageToRemove.remove();
                }

                memo.tableRow.remove().draw();
                self.repository.remove(memo);
            } catch (e) {
                console.error(e);
                throw  'fatal';
            }
        });
    }

    hideShowPage() {
        if (isset(this.selectedMemo)) {
            this.selectedMemo.page.remove();
            this.selectedMemo = null;
        }
    }


    // ----------- static functions ----------
    static getInstance() {
        if (MemoManager.instance === undefined) {
            MemoManager.instance = new MemoManager();
        }

        return MemoManager.instance;
    }
}
