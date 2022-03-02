<div id="modal-search-quotes" class="modal fade in" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
            <form method="POST" action="">
                <div class="modal-header">
                    <h5 class="modal-title">Filter quotes</h5>
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
                                    <option value="top">Selected code only</option>
                                    <option value="children">Selected code & direct children</option>
                                    <option selected value="all">Selected code & all children</option>
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

                    </div>

                    <button type="button" class="btn btn-primary mt-4 btn-update-results">Update results</button>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success btn-filter">Apply filters</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>
