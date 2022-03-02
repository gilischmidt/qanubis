<div id="modal-add-pdf-quotes" class="modal fade in" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <form method="POST" action="">
                <div class="modal-header">
                    <h5 class="modal-title">Add new quote</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    @csrf

                    <div class="form-group">
                        <label class="form-label">Codes</label>
                        <select class="form-control select codes-select" required="required"
                                multiple="multiple"></select>
                        <span class="form-text text-muted small">To add a new code, type its name and press 'Enter'</span>
                    </div>

                    <hr>

                    <div class="w-100">
                        <div class="pdf-quote-comments w-100">
                            <div class="w-100 pdf-quote-comment markup pb-1" style="display: none;">
                                <div class="w-100">
                                    <span>-</span>
                                    <button type="button"
                                            class="btn btn-sm btn-danger float-right mb-1 btn-remove-pdf-quote-comment">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>

                                <textarea class="form-control" maxlength="65530" rows="3"></textarea>

                                <hr class="mb-0">
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-sm btn-primary  btn-add-pdf-quote-comment mt-2">
                        Add comment
                    </button>

                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Add Quote</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>
