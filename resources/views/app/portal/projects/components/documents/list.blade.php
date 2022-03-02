<div id="documents-component-listing" class="h-100 w-100 mb-5 mx-5" style="max-width: 1200px;">
    <div class="d-flex justify-content-between w-100 mt-3">
        <div>
            <h2 class="m-0">Document Manager</h2>
            <p class="m-0 text-muted">Manage all documents to be analyzed</p>
        </div>

        <div>
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-plus mr-1"></i> Add a document
                </button>
                <div class="dropdown-menu">
                    <button id="btn-add-pdf-document" class="dropdown-item" type="button">
                        <i class="fas fa-file-pdf mr-1"></i> PDF <span class="text-muted small">/.pdf</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-5">
        <h4>Current Document</h4>

        <div class="selected-document-option">
            <div class="card shadow mb-2 no-document-selected-info">
                <div class="card-body ">
                    No document selected.
                </div>
            </div>

            <div class="selected-data" style="display: none;"></div>
        </div>

        <div class="card document-option shadow mb-2 markup" style="display: none;">
            <div class="card-body">
                <div class="d-flex">
                    <div class="btn-show-current-document clickable d-inline flex-grow-1 mr-2">
                        <span class="document-option-icon document-option-icon-pdf">
                            <i class="fas fa-file-pdf mr-1"></i>
                        </span>

                        <span class="document-name"></span>
                        <p class="document-description text-muted small m-0">/p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr>

    <div class="w-100 table-responsive">
        <table class="documents-list table table-striped table-bordered table-hover w-100">
            <thead>
            <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Description</th>
                <th>Quotes</th>
                <th>Added at</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>

        <div class="document-list-options-col" style="display: none;">
            <button type="button" class="btn btn-primary btn-sm btn-select-document">
                <i class="fas fa-arrow-right"></i>
            </button>

            <button type="button" class="btn btn-primary btn-sm btn-edit-document">
                <i class="fas fa-edit"></i>
            </button>

            <button type="button" class="btn btn-secondary btn-sm btn-show-document-quotes">
                <i class="fas fa-code"></i>
            </button>

            <button type="button" class="btn btn-danger btn-sm btn-remove-document">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </div>
</div>


