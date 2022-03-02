<div id="memo-component-listing" class="h-100 w-100 mb-5 mx-5" style="max-width: 900px;">
    <div class="d-flex justify-content-between w-100 mt-3">
        <div>
            <h2 class="m-0">Memo Manager</h2>
            <p class="m-0 text-muted">Manage diaries used to help you understand your data</p>
        </div>

        <div>
            <button id="add-memo-button" class="btn btn-primary" type="button">
                <i class="fas fa-plus mr-1"></i> Add a new diary
            </button>
        </div>
    </div>

    <div class="w-100 table-responsive mt-5">
        <table class="memos-list table table-striped table-bordered table-hover w-100">
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Created at</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>

        <div class="memos-list-options-col" style="display: none;">
            <button type="button" class="btn btn-primary btn-sm btn-select-memo">
                <i class="fas fa-arrow-right"></i>
            </button>

            <button type="button" class="btn btn-primary btn-sm btn-edit-memo">
                <i class="fas fa-edit"></i>
            </button>

            <button type="button" class="btn btn-danger btn-sm btn-remove-memo">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </div>
</div>

@include('app.portal.projects.components.memos.modals.add')
@include('app.portal.projects.components.memos.modals.edit')
