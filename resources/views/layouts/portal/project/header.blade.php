<nav id="header" class="navbar navbar-expand-md navbar-light bg-white shadow-sm project-header py-0">
    <a class="navbar-brand mr-1" href="{{ url('/') }}">
        <img src="{{ asset('img/logo.svg') }}" style="height: 35px"
             alt="logo">
    </a>

    <div class="flex-fill project-subheader">
        <h5 class="m-0 project-name overflow-ellipsis" style="max-width: 200px;">
            {{ $project->name }}
        </h5>

        <p class="text-muted small m-0 project-description overflow-ellipsis" style="max-width: 200px;">
            {{ $project->description }}
        </p>
    </div>


    <div class="d-inline ml-auto">
        <ul class="nav nav-pills" role="tablist">
            <li class="nav-item" role="presentation">

                <button type="button" class="btn btn-sm btn-outline-primary mr-1" id="quotes-explorer">
                    <i class="fas fa-search mr-1"></i> Explore quotes
                </button>

                <span class="border border-right mr-2"></span>

                <button type="button" class="btn btn-sm btn-select-page btn-primary text-white" id="documents-page-tab" data-toggle="pill" href="#documents-page"
                        role="tab" aria-controls="documents-page">
                    <i class="fas fa-file mr-1"></i> Documents
                </button>

                <button type="button" class="btn btn-sm btn-select-page btn-primary text-white" id="codes-page-tab" data-toggle="pill" href="#codes-page"
                        role="tab" aria-controls="codes-page">
                    <i class="fas fa-tag mr-1"></i> Codes
                </button>

                <button type="button" class="btn btn-sm btn-select-page btn-primary text-white" id="memos-page-tab" data-toggle="pill" href="#memos-page"
                        role="tab" aria-controls="memos-page">
                    <i class="fas fa-sticky-note mr-1"></i> Memos
                </button>

                <button type="button" class="btn btn-sm btn-select-page btn-primary text-white" id="report-page-tab" data-toggle="pill" href="#report-page"
                        role="tab" aria-controls="report-page">
                    <i class="fas fa-poll mr-1"></i> Reports
                </button>

                <button type="button" class="btn btn-sm btn-select-page btn-primary text-white" id="project-page-tab" data-toggle="pill" href="#project-page"
                        role="tab" aria-controls="project-page">
                    <i class="fas fa-info mr-1"></i> Project Info
                </button>
            </li>
        </ul>
    </div>

    <div class="d-inline">
        @include('layouts.portal.partials.header_dropdown')
    </div>

</nav>
