<div id="@yield('modal_id')" class="modal fade in modal-document-form" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <form method="POST" action="">
                <div class="modal-header">
                    <h5 class="modal-title">Add a new document</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    @csrf
                    @include('components.portal.input-text', ['name'=>'name', 'label'=>'Document name', 'required'=>true])
                    @include('components.portal.input-text', ['name'=>'description', 'label'=>'Description'])

                    @yield('modal_content')
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Add a new document</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>
