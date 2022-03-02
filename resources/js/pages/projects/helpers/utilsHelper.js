const disableClickableElementsFn = function (ev) {
    ev.preventDefault();
};

export default class UtilsHelper {

    static showLoadingOverlay(elementSelector = null, params = {}) {
        let element = null;

        params.progressColor = '#E99A2C';

        if (params.progress) {
            params.text = isset(params.text) ? params.text : "Loading..."
        }

        if (elementSelector === null) {
            element = $('body');
        } else {
            element = $(elementSelector);
        }

        element.LoadingOverlay("show", params);

        UtilsHelper.disableClickableElements();
    }

    static hideLoadingOverlay(elementSelector = null, force = true) {
        if (elementSelector === null) {
            $.LoadingOverlay("hide", force);
        } else {
            $(elementSelector).LoadingOverlay("hide", force);
        }

        UtilsHelper.enableClickableElements();
    }

    static updateLoadingOverlayProgress(elementSelector = null, progress = 0) {
        if (elementSelector === null) {
            $.LoadingOverlay("progress", progress);
        } else {
            $(elementSelector).LoadingOverlay("progress", progress);
        }
    }

    static updateLoadingOverlayText(elementSelector = null, text = false) {
        if (elementSelector === null) {
            $.LoadingOverlay("text", text);
        } else {
            $(elementSelector).LoadingOverlay("text", text);
        }
    }

    static showFatalErrorMessage({title = null, message = null} = {}) {
        title = isset(title) ? title : 'Ops, something went wrong.';
        message = isset(message) ? message : 'A fatal occurred. We\'ll need to refresh the page before you continue.';

        Swal.fire({
            title: title,
            text: message,
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Refresh now'
        }).then((result) => {
            // document.location.reload(true);
        });
    }

    static waitForMessage(messageEvent, callback) {
        let fn = function (e) {
            let event = e.originalEvent;
            let params = JSON.parse(event.data);

            if (params.event === messageEvent) {
                $(window).off('message', fn);
                callback(params);
            }
        }

        $(window).on('message', fn);
    }

    static getDataFromFieldsInSwalModal(modal = null) {
        let data = {};

        modal = modal ?? '.swal2-modal.swal2-show';
        modal = $(modal);

        modal.find('input').each(function (pos, el) {
            el = $(el);
            data[el.attr('name')] = el.val();
        });

        // TODO: get data from selects
        // not implemented yet because it's not needed

        return data;
    }

    static getInputFieldsInSwalModal(modal = null) {
        let res = {};

        modal = modal ?? '.swal2-html-container';
        modal = $(modal);

        modal.find('input').each(function (pos, el) {
            el = $(el);
            res[el.attr('name')] = el;
        });

        // TODO: get data from selects
        // not implemented yet because it's not needed

        return res;
    }

    static disableClickableElements() {
        $(document).on('click keypress', disableClickableElementsFn);
    }

    static enableClickableElements() {
        $(document).off('click keypress', disableClickableElementsFn);
    }

    static parseDate(date) {
        return Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: "numeric",
            minute: "numeric"
        }).format(new Date(date))
    }

    static reset() {
        window.CodeManager.reset();
        window.DocumentManager.reset();
        window.QuoteManager.reset();
    }
}
