@extends('layouts.portal.project')

@push('head')
    <link href="{{ mix('vendor/pdfjs/viewer.css') }}" rel="stylesheet">
    <link href="{{ mix('vendor/datatables/datatables.min.css') }}" rel="stylesheet">

    <style>
        .pdf-text-selection-highlight {
            cursor: pointer;
        }

        #footer-app {
            display: none !important;
        }

        .page-pane {
            height: 100%;
            width: 100%;
            display: flex !important;
            justify-content: center !important;
        }

        .tab-page {
            height: 100%;
            width: 100%;
        }

        .first-col {
            border-right: 4px solid #14213d !important;
        }

        .data-cell {
            cursor: pointer;
        }

        .data-cell:hover {
            background: yellow;
        }

        .node text {
            font: 12px sans-serif;
        }

        .d3-context-menu {
            position: absolute;
            display: none;
            background-color: #f2f2f2;
            border-radius: 4px;

            font-family: Arial, sans-serif;
            font-size: 14px;
            min-width: 150px;
            border: 1px solid #d4d4d4;

            z-index:1200;
        }

        .d3-context-menu ul {
            list-style-type: none;
            margin: 4px 0px;
            padding: 0px;
            cursor: default;
        }

        .d3-context-menu ul li {
            padding: 4px 16px;
        }

        .d3-context-menu ul li:hover {
            background-color: #4677f8;
            color: #fefefe;
        }

        .badge {
            white-space: break-spaces;
        }

        /* huge */
        .tpd-size-huge .tpd-content,
        .tpd-size-huge .tpd-title {
            padding: 15px;
            font-size: 15px;
            line-height: 20px;
        }
        .tpd-size-huge .tpd-background {
            border-radius: 10px;
        }
        .tpd-size-huge .tpd-stem {
            width: 24px;
            height: 12px;
            margin-left: 8px; /* space from the side */
            margin-top: 2px; /* space between stem and target */
        }
        .tpd-size-huge.tpd-no-radius .tpd-stem {
            margin-left: 10px;
        }
        .tpd-size-huge .tpd-close {
            margin: 11px 5px 11px 5px;
        }
        .tpd-size-huge .tpd-close-icon {
            font-size: 32px;
        }
        .tpd-size-huge .tpd-spinner {
            width: 66px;
            height: 50px;
        }
        .tpd-size-huge .tpd-spinner-spin {
            margin: 14px 0 0 22px;
        }
        .tpd-size-huge .tpd-spinner-spin,
        .tpd-size-huge .tpd-spinner-spin:after {
            width: 22px;
            height: 22px;
        }
    </style>
@endpush

@push('script')
    <script src="{{ mix('vendor/pdfjs/viewer.js') }}"></script>
    <script defer src="{{ mix('js/pages/projects.js') }}"></script>
    <script src="{{ mix('vendor/datatables/datatables.min.js') }}"></script>
    <script src="{{ mix('vendor/d3/d3.js') }}"></script>
    <script src="{{ mix('vendor/d3/zoom.js') }}"></script>

    <script>
        let projectName = "{{ $project->name }}";
        const projectId = "{{ $project->id }}";
        const defaultPage = "{{ $defaultPage ?? 'documents' }}";

        const appRoutes = {
            fetch: "{{ route('portal.projects.fetch', $project->id) }}",
            documents: {
                store: "{{ route('portal.projects.documents.store', $project->id) }}",
                update: "{{ route('portal.projects.documents.update', [$project->id, '#documentId']) }}",
                destroy: "{{ route('portal.projects.documents.destroy', [$project->id, '#documentId']) }}",
                download: "{{ route('portal.projects.documents.download_base64', [$project->id, '#documentId']) }}",
            },
            codes: {
                store: "{{ route('portal.projects.codes.store', $project->id) }}",
                update: "{{ route('portal.projects.codes.update', [$project->id, '#codeId']) }}",
                destroy: "{{ route('portal.projects.codes.destroy', [$project->id, '#codeId']) }}",
            },
            quotes: {
                store: "{{ route('portal.projects.quotes.store', $project->id) }}",
                update: "{{ route('portal.projects.quotes.update', [$project->id, '#quoteId']) }}",
                destroy: "{{ route('portal.projects.quotes.destroy', [$project->id, '#quoteId']) }}",
            },
            memos: {
                store: "{{ route('portal.projects.memos.store', $project->id) }}",
                update: "{{ route('portal.projects.memos.update', [$project->id, '#memoId']) }}",
                destroy: "{{ route('portal.projects.memos.destroy', [$project->id, '#memoId']) }}",
            },
            project: {
                update: "{{ route('portal.projects.update', $project->id) }}",
            }
        };
    </script>

    <script defer>
        $(document).ready(function () {
            $('.tabs').DataTable();
        });
    </script>

    <script defer>
        pdfjsLib.GlobalWorkerOptions.workerSrc = "{{ mix('vendor/pdfjs/pdf.worker.js') }}";
    </script>
@endpush

@section('content')
    <div class="position-absolute vh-100 vw-100 main-loading-info"
         style="top: 0; left: 0; right: 0; bottom: 0; z-index: 99999999999;">
        <div class="h-100 w-100 bg-white d-flex flex-column justify-content-center align-items-center">
            <i class="fas fa-spinner fa-spin fa-7x mb-3"></i>
            <h1 class="m-0">Loading required files...</h1>
        </div>
    </div>

    <div class="project-page w-100 d-flex overflow-hidden">
        <div id="main-content" class="main-content tab-content w-auto h-auto flex-fill d-flex justify-content-center">
            <div class="tab-pane tab-page fade" id="documents-page" role="tabpanel"
                 aria-labelledby="documents-page-tab">
                <div class="page-pane">
                    @include('app.portal.projects.components.documents.list')
                    @include('app.portal.projects.components.documents.types.pdf.show')
                </div>
            </div>

            <div class="tab-pane tab-page fade" id="codes-page" role="tabpanel" aria-labelledby="codes-page-tab">
                <div class="page-pane">
                    @include('app.portal.projects.components.codes.list')
                </div>
            </div>

            <div class="tab-pane tab-page fade" id="memos-page" role="tabpanel" aria-labelledby="memos-page-tab">
                <div class="page-pane">
                    @include('app.portal.projects.components.memos.list')
                    @include('app.portal.projects.components.memos.show')
                </div>
            </div>

            <div class="tab-pane tab-page fade" id="project-page" role="tabpanel" aria-labelledby="project-page-tab">
                <div class="page-pane">
                    @include('app.portal.projects.components.project.form')
                </div>
            </div>

            <div class="tab-pane tab-page fade" id="report-page" role="tabpanel" aria-labelledby="report-page-tab">
                <div class="page-pane">
                    @include('app.portal.projects.components.reports.index')
                </div>
            </div>
        </div>


        <div class="pdf-context-menu border rounded shadow bg-white">
            <ul class="list-group">
                <li class="list-group-item btn-add-pdf-quote"><i class="fas fa-code mr-1"></i> Add quote</li>
            </ul>
        </div>

        <div id="hover-toolbar" class="position-absolute p-2" style="display: none">
            <button type="button" class="btn btn-sm btn-success pr-2 confirm-select-text">
                <i class="fas fa-check"></i>
            </button>

            <button type="button" class="btn btn-sm btn-danger cancel-select-text">
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div>
@endsection

@push('modal')
    @include('app.portal.projects.components.reports.modals.report-quotes')

    @include('app.portal.projects.components.documents.modals.edit')
    @include('app.portal.projects.components.documents.types.pdf.add_quote_modal')
    @include('app.portal.projects.components.documents.types.pdf.edit_quote_modal')
    @include('app.portal.projects.components.documents.types.pdf.search_quotes_modal')

    @include('app.portal.projects.components.codes.modals.add')
    @include('app.portal.projects.components.codes.modals.edit')
@endpush

