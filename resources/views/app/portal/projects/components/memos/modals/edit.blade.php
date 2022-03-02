<div id="modal-edit-memo" class="modal fade in" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <form method="POST" action="">
                <div class="modal-header">
                    <h5 class="modal-title">Edit diary</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    @csrf
                    @include('components.portal.input-text', ['name'=>'name', 'label'=>'Diary name', 'required'=>true])
                    @include('components.portal.input-text', ['name'=>'description', 'label'=>'Description'])
                </div>

                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Update diary</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>
