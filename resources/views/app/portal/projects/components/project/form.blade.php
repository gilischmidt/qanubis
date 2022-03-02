<div id="project-component-form" class="h-100 w-100 mb-5 mx-5" style="max-width: 900px;">
    <div class="w-100 mt-3">
        <h2 class="m-0">Project Info</h2>
        <p class="m-0 text-muted">Manage general project information</p>
    </div>

    <div class="w-100 mt-5">
        <h4 class="m-0">Project Information</h4>
        <p class="text-muted">Created at: {{ $project->getDate('created_at') }}</p>

        <form id="form-project">
            <div class="row">
                <div class="col-12">
                    @include('components.portal.input-text', ['name'=>'name', 'label'=>'Project Title', 'required'=>true,
                                  'value'=>$project->name])
                </div>

{{--                <div class="col-12 col-md-6">--}}
{{--                    @include('components.portal.input-color', ['name'=>'color', 'label'=>'Color', 'required'=>true,--}}
{{--                     'value'=>$project->color])--}}
{{--                </div>--}}

                <div class="col-12">
                    @include('components.portal.input-text', ['name'=>'description', 'label'=>'Description',
                         'value'=>$project->description, 'help'=>'Max 255 chars.'])
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Update project information</button>
                </div>
            </div>
        </form>

        <hr>

        <h4>Delete Project</h4>

        <form id="form-delete-project" method="POST" action="{{ route('portal.projects.destroy', $project->id) }}">
            @csrf
            @method('DELETE')

            <div class="row">
                <div class="col-12">
                    <p>This action is irreversible.
                        <span class="font-weight-bold">All data related to this project will be deleted forever</span>
                        (including documents and quotes)!
                    </p>
                </div>

                <div class="col-12">
                    <button id="btn-delete-project" type="button" class="btn btn-danger">Delete
                        project
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
