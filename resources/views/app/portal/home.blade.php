@extends('layouts.portal.app')

@push('script')
    <script src="{{ mix('js/pages/home.js') }}"></script>
@endpush

@push('head')
    <style>


    </style>
@endpush

@section('content')
    <div class="container home-page">
        <div class="page-title-container d-flex justify-content-between align-items-center">
            <h5 class="d-inline page-title">Select a project below or create a new one</h5>
            <button class="btn btn-sm btn-primary float-right btn-create-project">
                <i class="fas fa-plus mr-1"></i> New project
            </button>
        </div>

        <div class="d-flex mb-1">
            @php($isInvalid = ($projects->count() == 0))
            @php($hasFilter = \App\Helpers\FilterHelper::filter('name') != '')


            <input id="search-project" type="text" name="name"
                   value="{{ \App\Helpers\FilterHelper::filter('name') }}"
                   placeholder="Search project..."
                   class="form-control input-filter mr-2
                   @if($hasFilter && $isInvalid) is-invalid @endif">


            <button type="button" class="btn btn-primary btn-filter flex-grow-1">
                <i class="fas fa-search"></i>
            </button>
        </div>


        <div class="row">
            @if(sizeof($projects) == 0)
                <div class="col-12 text-center">
                    @if($hasFilter)
                        <i class="far fa-laugh-wink"></i> No projects found for the applied filter.
                    @else
                        <i class="far fa-frown"></i>
                        No projects found. Use the button above to create a new one.
                    @endif
                </div>
            @else
                <div class="col-12 p-2 pb-3 pl-4 border-bottom">
                    <i class="fas fa-filter mr-1"></i> Sort projects by:

                    <span class="p-3">@autosort('name','Name')</span>
                    <span class="p-3">@autosort('updated_at','Last update')</span>

                    <div class="float-right">
                        Showing {{ $projects->count() }} out of {{ $totalProjects }}.
                    </div>
                </div>


                @foreach($projects as $project)
                    <div class="col-12 row  py-4 border-bottom">
                        <div class="col">
                            <div class="d-inline-block">
                                <h3 class="m-0">
                                    <a href="{{ route('portal.projects.edit', $project->id) }}">{{ $project->name }}</a>
                                </h3>
                            </div>

                            @if(isset($project->description))
                                <div>
                                    <p class="mb-2">
                                        {{ $project->description }}
                                    </p>
                                </div>
                            @endif

                            <div class="text-muted mt-2">
                                <div class="d-inline">
                                    <i class="fas fa-file-alt"></i> {{ $project->documents_count }} |
                                </div>

                                <div class="d-inline">
                                    <i class="fas fa-tag"></i> {{ $project->codes_count }} |
                                </div>

                                <div class="d-inline">
                                    <i class="fas fa-code"></i> {{ $project->quotes_count }} |
                                </div>

                                <div class="d-inline">
                                    <i class="fas fa-sticky-note"></i> {{ $project->memos_count }} |
                                </div>

                                <div class="d-inline small">
                                    Created at: {{ $project->getDate('created_at', false) }} |
                                </div>

                                <div class="d-inline small font-weight-bold">
                                    Last update: {{ $project->getDateTime('updated_at') }}
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <a href="{{ route('portal.projects.edit', [$project->id, 'page=project']) }}"
                               class="btn btn-primary btn-sm btn-edit">
                                <i class="fas fa-edit"></i>
                            </a>

                            <form class="d-inline" method="POST"
                                  action="{{ route('portal.projects.destroy', $project->id) }}">
                                @method('DELETE')
                                @csrf

                                <button type="button" class="btn btn-danger btn-sm btn-remove">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                @endforeach
            @endif
        </div>
    </div>
@endsection

@push('modal')
    <div id="modal-create-project" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <form id="form-create-project" class="show-loading-on-submit" method="POST"
                      action="{{ route('portal.projects.store') }}">
                    <div class="modal-header">
                        <h5 class="modal-title">Create a new project</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        @csrf
                        @include('components.portal.input-text', ['name'=>'name', 'label'=>'Project Title', 'required'=>true])
                        {{-- @include('components.portal.input-color', ['name'=>'color', 'label'=>'Color', 'required'=>true]) --}}
                        @include('components.portal.input-text', ['name'=>'description', 'label'=>'Description',
                            'help'=>'Max 255 chars.'])
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Create a new project</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endpush
