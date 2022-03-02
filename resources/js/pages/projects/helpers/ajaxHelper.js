export default class AjaxHelper {

    static ajaxCall({method, url, data = null, options = null}) {
        method = method.toUpperCase();
        options = options ?? {};
        data = data ?? {};

        switch (method) {
            case 'PUT':
            case 'PATCH':
            case 'DELETE':
                data['_method'] = method;
                method = 'POST';
                break;
        }

        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                method: method,
                data: data,
                headers: {
                    'X-CSRF-TOKEN': AjaxHelper.getToken()
                },
                success: function (result) {
                    if (isset(result.status) && result.status === false) {
                        toastDanger(data.error);
                        reject(result, data.error);
                    } else {
                        resolve(result);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    let msg = AjaxHelper.parseAjaxError(jqXHR, errorThrown);
                    toastDanger(msg);
                    reject(data, msg, jqXHR);
                },
                ...options
            });
        })
    }

    static parseAjaxError(jqXHR, errorThrown) {
        if (jqXHR.status === 400) { // validation error
            let response = $.parseJSON(jqXHR.responseText);
            if (typeof response.error == "string")
                return response.error;
            return "One or more fields are incorrect. Please check them and try again."
        }
        if (jqXHR.status === 401) { // unauthorized
            return "401: Your session has expired. Please refresh the page and try again.";
        }
        if (jqXHR.status === 403) { // forbidden
            return "403: Action not allowed.";
        }
        if (jqXHR.status === 404) { // not Found
            return "404: Page not found";
        }
        if (jqXHR.status === 405) { // method not allowed
            return "405: An unexpected error occurred. Please contact an administrator.";
        }
        if (jqXHR.status === 422) { // validation fields
            let errors = $.parseJSON(jqXHR.responseText);
            $.each(errors, function (index, value) {
                return value[0];
            });
        }
        if (jqXHR.status === 500) { // Internal Server Error
            return "500: An unexpected error occurred. Please try again or contact an administrator";
        }

        try {
            $.parseJSON(jqXHR.responseText);
            return errorThrown;
        } catch (e) {
            return "An unexpected error occurred. Please try again or contact an administrator";
        }
    }

    static getToken() {
        return $('meta[name="csrf-token"]').attr('content');
    }
}
