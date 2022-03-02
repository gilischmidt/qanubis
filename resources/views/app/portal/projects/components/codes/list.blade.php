<div id="codes-component-listing" class="h-100 w-100 mb-5 mx-5" style="max-width: 1200px;">
    <div class="d-flex justify-content-between w-100 mt-3">
        <div>
            <h2 class="m-0">Code Manager</h2>
            <p class="m-0 text-muted">Manage all codes to be used in this project</p>
        </div>


        <div class="d-flex align-items-start">
            <div class="form-group mr-2">
                <select id="select-codes-view-type" class="form-control select">
                    <option value="tree">Tree view</option>
                    <option value="list">List view</option>
                </select>
            </div>

            <button id="add-code-button" class="btn btn-primary" type="button">
                <i class="fas fa-plus mr-1"></i> Add a code
            </button>
        </div>
    </div>

    <!--
<div class="d-flex justify-content-between w-100 mt-2">
    <button id="filter-codes-button" class="btn btn-secondary text-white rounded-0 d-inline btm-sm">
        <i class="fas fa-filter mr-1"></i> Filter

        <span class="text-muted applied-document-filter-info" style="display: none;">
                            <small><span class="count"></span> filter(s) applied.</small>
                        </span>
    </button>
</div>
-->

    <div class="w-100 mt-5 table-responsive list-view" style="display:none;">
        <table class="codes-list table table-striped table-bordered table-hover w-100">
            <thead>
            <tr>
                <th>Color</th>
                <th>Name</th>
                <th>Brief Description</th>
                <th>Full description</th>
                <th>Quotes</th>
                <th>Children</th>
                <th>Created at</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>

        <div class="code-list-options-col" style="display: none;">
            <button type="button" class="btn btn-primary btn-sm btn-edit-code">
                <i class="fas fa-edit"></i>
            </button>

            <button type="button" class="btn btn-secondary btn-sm btn-show-code-quotes">
                <i class="fas fa-code"></i>
            </button>

            <button type="button" class="btn btn-danger btn-sm btn-remove-code">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </div>

    <div class="w-100 mt-5 tree-view" style="display:none;">
        <p class="text-muted">
            You may drag and drop items to organize the code hierarchy.
            <br/> Right click to edit/remove a code (only one at a time).
        </p>

        <div class="form-group mb-3">
            <label for="search-code-tree">SEARCH: </label>
            <input id="input-code-tree-search" type="text" class="form-control">
        </div>

        <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-sm btn-success btn-expand-all mr-1">Expand all</button>
            <button type="button" class="btn btn-sm btn-danger btn-hide-all">Collapse all</button>
        </div>

        <div class="w-100 text-center no-codes-found" style="opacity: 0;">
            No codes found. Use the button above to add one.
        </div>

        <div id="jstree_demo_div"></div>
    </div>

</div>
