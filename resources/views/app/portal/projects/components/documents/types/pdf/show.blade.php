<div class="pdf-document markup show-document h-100" style="display: none;">
    <div class="w-100 bg-light border-top px-2 py-1">
        <button type="button" class="btn btn-sm btn-primary d show-document-listing-page">
            <i class="fas fa-arrow-left"></i>
        </button>

        <p class="m-0 pl-2 d-inline document-name position-absolute overflow-ellipsis"></p>

        <div class="float-right">
            <button class="btn btn-sm btn-primary d-inline btn-show-pdf-quotes   mr-2" type="button">
                <i class="fas fa-search mr-1"></i> Document quotes explorer
            </button>

            <button class="btn btn-sm btn-primary d-inline btn-show-pdf-quotes-list" type="button">
                <i class="fas fa-code mr-1"></i> Quotes list
            </button>
        </div>
    </div>

    <div class="h-100 w-100">
        <div class="position-relative pdf-document-content float-left">
            @include('app.portal.projects.components.documents.types.pdf.viewer')
        </div>

        <div class="bg-white float-right pdf-right-sidebar overflow-auto">
            <div class="pdf-quotes-list pdf-right-sidebar-container border-left h-100" style="display: none;">
                <div
                    class="bg-secondary text-white pdf-right-sidebar-header w-100 d-flex justify-content-center align-items-center">
                    <h4 class="m-0">Quotes List</h4>
                </div>


{{--                 <div class="mb-2 w-100">--}}
{{--                     <div class="d-flex justify-content-between w-100">--}}
{{--                         <button id="filter-codes-button" class="btn btn-primary rounded-0 d-inline btn-sm w-100">--}}
{{--                             <i class="fas fa-filter mr-1"></i> Filter--}}

{{--                             <span class="small text-white" style="display: none;">--}}
{{--                                 <small> | <span class="count"></span> filter(s) applied.</small>--}}
{{--                             </span>--}}
{{--                         </button>--}}
{{--                     </div>--}}
{{--                 </div>--}}

                <div class="position-relative">
                    <div class="pdf-quotes-wrapper position-absolute overflow-auto px-1 pt-2 w-100">
                        <div class="pdf-quote markup" style="display: none;">
                            <div class="card shadow mb-3 p-1">
                                <div class="card-body p-2">
                                    <div>
                                        <p class="d-inline m-0">
                                            Page(s): <span class="pdf-quote-page"></span>
                                        </p>

                                        <button type="button"
                                                class="btn btn-sm btn-danger float-right btn-remove-quote">
                                            <i class="fas fa-trash"></i>
                                        </button>

                                        <button type="button"
                                                class="btn btn-sm btn-primary float-right mr-1 btn-edit-quote">
                                            <i class="fas fa-edit"></i>
                                        </button>

                                        <button type="button"
                                                class="btn btn-sm btn-primary float-right mr-1 btn-show-quote">
                                            <i class="fas fa-eye"></i>
                                        </button>

                                        <span class="text-muted float-right mr-2">
                                           <span class="pdf-quote-comments-count">0</span> <i class="fas fa-comment"></i>
                                        </span>
                                    </div>

                                    <hr class="my-3">

                                    <div class="quote-content"></div>
                                </div>
                                <div class="card-footer p-2 pdf-quote-codes-container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pdf-comments-list pdf-right-sidebar-container border-left h-100" style="display: none;">
                <div
                    class="bg-secondary text-white pdf-right-sidebar-header w-100 d-flex justify-content-center align-items-center">
                    <h4 class="m-0">Comments List</h4>
                </div>
            </div>

        </div>
    </div>
</div>



