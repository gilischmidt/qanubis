<div class="pdf-main-content-wrapper">
    <div class="pdf-viewer-container">
        <div></div>
    </div>

    <div class="pdf-toolbar d-flex justify-content-center px-4">
        <div>
            <button type="button"
                    class="btn btn-secondary btn-sm btn-decrement-page find-text"
                    data-container="body" data-toggle="popover" data-placement="bottom">
                <i class="fas fa-search"></i>
            </button>

            <div style="display: none;">
                <div class="find-text-bar">
                    <div class="form-inline">
                        <div class="input-group mr-2">
                            <input type="text" class="form-control-sm find-input" style="width: 200px"
                                   placeholder="Type here...">
                            <div class="input-group-append">
                                <button type="button"
                                        class="btn btn-primary btn-sm m-0 input-group-text find-previous">
                                    <i class="fas fa-arrow-up"></i>
                                </button>

                                <button type="button"
                                        class="btn btn-primary btn-sm m-0 input-group-text find-next">
                                    <i class="fas fa-arrow-down"></i>
                                </button>
                            </div>
                        </div>

                        <div class="form-check form-check-inline mr-2">
                            <input class="form-check-input find-highlight-all" type="checkbox">
                            <label class="form-check-label">Highlight all</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input find-case-sensitive" type="checkbox">
                            <label class="form-check-label">Case sensitive</label>
                        </div>

                        <div class="find-info-message text-muted"></div>
                    </div>
                </div>
            </div>
        </div>

        <span class="vertical-separator"></span>

        <div>
            <button type="button" class="btn btn-secondary btn-sm previous-page">
                <i class="fas fa-arrow-up"></i>
            </button>

            <button type="button" class="btn btn-secondary btn-sm next-page">
                <i class="fas fa-arrow-down"></i>
            </button>

            <div class="d-inline ml-2">
                <input style="width: 43px" class="current-page"> of <span class="pages-count">0</span>
                page(s)
            </div>
        </div>
        <span class="vertical-separator"></span>
        <div>
            <select class="zoom-scale-select">
                <option value="auto">Auto</option>
                <option value="page-actual">Original size</option>
                <option value="page-width">Page width</option>
                <option value="page-fit">Fit page</option>
                <option value="0.5">50%</option>
                <option value="0.75">75%</option>
                <option value="1">100%</option>
                <option value="1.25">125%</option>
                <option value="1.50">150%</option>
                <option value="2.0">200%</option>
                <option value="3.0">300%</option>

                <option value="custom-zoom-scale" disabled="disabled" hidden="true"></option>
            </select>

            <button type="button" class="btn btn-secondary btn-sm increment-zoom">
                <i class="fas fa-plus"></i>
            </button>

            <button type="button"
                    class="btn btn-secondary btn-sm btn-decrement-page decrement-zoom">
                <i class="fas fa-minus"></i>
            </button>
        </div>

    </div>
</div>
