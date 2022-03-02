<div id="memo-component-show" class="w-100 memo-show mx-5" style="display: none; max-width: 1200px;">
    <div class="d-flex justify-content-between w-100 mt-3">
        <div>
            <div class="d-flex align-items-center">
                <button type="button" class="btn btn-primary btn-sm mr-2 btn-show-memo-page" data-page="listing">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2 class="m-0 d-inline memo-name">Memo Manager</h2>
            </div>
            <p class="m-0 text-muted memo-description"></p>
        </div>

        <div style="min-width: 98px">
            <button type="button" class="btn btn-success btn-sm d-inline btn-save-memo">
                <i class="fas fa-save"></i>
            </button>

            <button type="button" class="btn btn-primary btn-sm d-inline btn-edit-memo">
                <i class="fas fa-edit"></i>
            </button>

            <button type="button" class="btn btn-danger btn-sm d-inline btn-remove-memo">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </div>


    <div class="memo-content-container w-100 mt-3">
        <p class="m-0 info-saved text-success">All changes saved.</p>
        <p class="m-0 info-unsaved text-danger" style="display: none;">
            Changes not saved. Use the button above to save.
        </p>
        <div class="memo-content"></div>
    </div>
</div>
