<div id="modal-report-quotes" class="modal fade in" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
            <form method="POST" action="">
                <div class="modal-header">
                    <h5 class="modal-title">Explore quotes</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label class="form-label">Show quotes for code</label>
                                <select class="form-control show-for">
                                    <option selected value="top">Selected code only</option>
                                    <option value="children">Selected code & direct children</option>
                                    <option value="all">Selected code & all children</option>
                                </select>
                                <small class="form-text text-muted">
                                    Works only if you select one or more codes bellow.
                                </small>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="form-group ">
                                <label class="form-label">Show quotes for code</label>
                                <select class="form-control select-codes" multiple="multiple"></select>
                                <small class="form-text text-muted">
                                    Leave empty to show all.
                                </small>
                            </div>

                            <button type="button" class="btn btn-primary btn-sm btn-select-all-codes">Select all
                            </button>
                            <button type="button" class="btn btn-danger btn-sm btn-clear-documents-codes">
                                Clear selection
                            </button>

                            <hr/>
                        </div>


                        <div class="col-12">
                            <div class="form-group mb-0">
                                <label class="form-label">Documents</label>
                                <select class="form-control select-documents" multiple="multiple"></select>
                                <small class="form-text text-muted">
                                    Leave empty to show all.
                                </small>
                            </div>

                            <button type="button" class="btn btn-primary btn-sm btn-select-all-documents">Select all
                            </button>
                            <button type="button" class="btn btn-danger btn-sm btn-clear-documents-selection">
                                Clear selection
                            </button>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary mt-4 btn-update-results">Update results</button>

                    <div class="quotes-wrapper" style="display: none;">
                        <hr>

                        <div class="d-flex justify-content-between">
                            <h4>Quotes</h4>
                            <h4>Count: <span class="quotes-count"></span></h4>
                        </div>

                        <div class="quotes-container">
                            <div class="quote markup mb-3" style="display: none;">
                                <div class="card shadow">
                                    <div class="card">
                                        <div class="card-body">

                                            <div class="d-flex justify-content-between">
                                                <div class="document-container mb-1"></div>
                                                <div>
                                                    <button type="button"
                                                            class="btn btn-sm btn-danger float-right btn-remove-quote">
                                                        <i class="fas fa-trash"></i>
                                                    </button>

                                                    <button type="button"
                                                            class="btn btn-sm btn-primary float-right mr-1 btn-edit-quote">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="d-flex justify-content-between">
                                                <div class="codes-container mb-1"></div>
                                                <div class="extra-info"></div>
                                            </div>
                                            <hr class="m-2">
                                            <div class="content"></div>
                                        </div>

                                        <div class="card-footer">
                                            <h4>Comments:</h4>
                                            <div class="comments-container">
                                                <div class="comment markup" style="display: none;">
                                                    <p class="created-at m-0"></p>
                                                    <div class="comment-content border rounded p-2"></div>
                                                    <hr>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="empty-message" style="display: none;">
                            Nothing to display.
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>
