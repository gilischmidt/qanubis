<div id="modal-edit-code" class="modal fade in" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <form method="POST" action="">
                <div class="modal-header">
                    <h5 class="modal-title">Edit code</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <label>Created at</label>
                        <input type="text" class="form-control created-at" disabled>
                    </div>

                    @csrf
                    @include('components.portal.input-text', ['name'=>'name', 'label'=>'Code name', 'required'=>true])
                    @include('components.portal.input-color', ['name'=>'color', 'label'=>'Color', 'required'=>true])
                    @include('components.portal.select', ['name'=>'parent_code_id', 'label'=>'Parent Code', 'content'=>''])
                    @include('components.portal.input-text', ['name'=>'brief_description', 'label'=>'Brief Description'])
                    @include('components.portal.text-area', ['name'=>'description', 'label'=>'Full description',
                    'help'=>'Expand the brief definition by defining guidelines about when and how to use this code'])
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Update code</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>
