$(document).ready(function () {
    toastSessionMessages();
    initializeComponents();

    $(document).on('click', 'button.confirm', function () {
        let el = $(this);
        let title = isset(el.attr('data-title')) ? el.attr('data-title') : 'Are you sure?';
        let message = isset(el.attr('data-message')) ? el.attr('data-message') : "You won't be able to revert this!";
        let type = isset(el.attr('data-type')) ? el.attr('data-type') : "warning";
        let confirmButtonText = isset(el.attr('data-confirm-text')) ? el.attr('data-title') : 'Yes, continue';

        confirmModal(el.attr('data-title'), el.attr('data-message'), el.attr('data-type'), el.attr('data-confirm-text'), function () {
            el.closest('form').first().submit();
        });
    });

    $(document).on('submit', function () {
        $.LoadingOverlay('show');
    });


    $(document).on('click', '.btn-filter', function () {
        $.LoadingOverlay('show');
    });
});

function initializeComponents(container = null) {
    container = isset(container) ? container : 'body';
    container = $(container);

    container.find('[data-toggle="tooltip"]').tooltip();

    container.find('.input-quill-basic').not('.component-initialized').each(function (pos, el) {
        el = $(el);
        el.addClass('component-initialized');

        let quill = new Quill(el[0], {
            placeholder: 'Type here...',
            theme: 'snow',
            modules: {
                toolbar: false,
            },
        });

        // max length for 'text' db type
        quill.on('text-change', function (delta, old, source) {
            if (quill.getLength() > 65535) {
                quill.deleteText(65535, quill.getLength());
            }
        });

        // prevent pasting formatted content
        quill.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
            let ops = []
            delta.ops.forEach(op => {
                if (op.insert && typeof op.insert === 'string') {
                    ops.push({
                        insert: op.insert
                    })
                }
            })
            delta.ops = ops
            return delta
        });

        el.data("quill", quill);
    });
}

function toastSessionMessages() {
    let container = $('#sessions-toast-container');

    container.find('.alert').each(function (k, el) {
        let msg = $(el).find("li").text();

        if ($(this).hasClass("alert-danger"))
            toastDanger(msg);
        if ($(this).hasClass("alert-warning"))
            toastWarning(msg);
        if ($(this).hasClass("alert-info"))
            toastInfo(msg);
        if ($(this).hasClass("alert-success"))
            toastSuccess(msg);
        $(el).remove();
    });
}

function toastSuccess(title, message = null) {
    toast('success', title, message);
}

function toastInfo(title, message = null) {
    toast('info', title, message);
}

function toastWarning(title, message = null) {
    toast('warning', title, message);
}

function toastDanger(title, message = null) {
    toast('error', title, message);
}

function toast(type, title, message = null) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: type,
        title: title,
        text: message,
    })
}

function confirmModal(title, message, type, confirmButtonText, successCallback, cancelCallback = ()=>{}) {
    title = isset(title) ? title : 'Are you sure?';
    message = isset(message) ? message : "You won't be able to revert this!";
    type = isset(type) ? type : "warning";
    confirmButtonText = isset(confirmButtonText) ? confirmButtonText : 'Yes, continue';
    successCallback = isFunction(successCallback) ? successCallback : function () {
    };

    Swal.fire({
        title: title,
        text: message,
        icon: type,
        showCancelButton: true,
        confirmButtonText: confirmButtonText
    }).then((result) => {
        if (result.value) {
            successCallback();
        }else{
            cancelCallback();
        }
    });
}

function successModal(title, message, confirmButtonText, successCallback) {
    title = isset(title) ? title : 'Success';
    confirmButtonText = isset(confirmButtonText) ? confirmButtonText : 'Ok!';
    successCallback = isFunction(successCallback) ? successCallback : function () {
    };

    Swal.fire({
        title: title,
        text: message,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: confirmButtonText
    }).then((result) => {
        if (result.value) {
            successCallback();
        }
    });
}

function errorModal(title, message, confirmButtonText, successCallback) {
    title = isset(title) ? title : 'Ops, something went wrong.';
    message = isset(message) ? message : "We couldn't complete your request. Please try again or contact us!";
    confirmButtonText = isset(confirmButtonText) ? confirmButtonText : 'Close';
    successCallback = isFunction(successCallback) ? successCallback : function () {
    };

    Swal.fire({
        title: title,
        text: message,
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: confirmButtonText
    }).then((result) => {
        if (result.value) {
            successCallback();
        }
    });
}

function infoModal(title, message, confirmButtonText, successCallback) {
    confirmButtonText = isset(confirmButtonText) ? confirmButtonText : 'Close';
    successCallback = isFunction(successCallback) ? successCallback : function () {
    };

    Swal.fire({
        title: title,
        text: message,
        icon: 'info',
        showCancelButton: false,
        confirmButtonText: confirmButtonText
    }).then((result) => {
        if (result.value) {
            successCallback();
        }
    });
}

function isset(param) {
    return (param !== undefined && param !== null && param !== '');
}

function isFunction(param) {
    return (isset(param) && typeof param == "function");
}

function getTextFromQuill(element) {
    let quill = element.data('quill');
    return quill.getText().trim().length === 0 ? null : quill.root.innerHTML;
}

function uniqid(length = 10) {
    let dec2hex = [];
    for (let i = 0; i <= 15; i++) {
        dec2hex[i] = i.toString(16);
    }

    let uuid = '';
    for (let i = 1; i <= 36; i++) {
        if (i === 9 || i === 14 || i === 19 || i === 24) {
            uuid += '-';
        } else if (i === 15) {
            uuid += 4;
        } else if (i === 20) {
            uuid += dec2hex[(Math.random() * 4 | 0 + 8)];
        } else {
            uuid += dec2hex[(Math.random() * 16 | 0)];
        }
    }

    if (length) uuid = uuid.substring(0, length);
    return uuid;
}


// thanks to SudoPlz and Mark Ranson (https://stackoverflow.com/a/41491220)
function pickTextColorBasedOnBgColor(bgColor, lightColor = '#FFFFFF', darkColor = '#000000') {
    let color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    let r = parseInt(color.substring(0, 2), 16); // hexToR
    let g = parseInt(color.substring(2, 4), 16); // hexToG
    let b = parseInt(color.substring(4, 6), 16); // hexToB
    let uicolors = [r / 255, g / 255, b / 255];
    let c = uicolors.map((col) => {
        if (col <= 0.03928) {
            return col / 12.92;
        }
        return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    let L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return (L > 0.179) ? darkColor : lightColor;
}

function getWindowTextSelection() {
    let selectedText = "";

    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    } else if (document.selection) {
        selectedText = document.selection.createRange().text;
    }

    return selectedText;
}

function clearWindowTextSelection() {
    let selection = window.getSelection ? window.getSelection() : document.selection;

    if (selection) {
        if (selection.removeAllRanges) {
            selection.removeAllRanges();
        } else if (selection.empty) {
            selection.empty();
        }
    }
}

function hasExtension(fileName, validExtensions) {
    return (new RegExp('(' + validExtensions.join('|').replace(/\./g, '\\.') + ')$', 'i')).test(fileName);
}

function readLocalFile(file) {
    return new Promise((resolve, reject) => {
        let fr = new FileReader();
        fr.onload = x => resolve(fr.result);
        fr.readAsDataURL(file);
    })
}

// use to read base64 files
function base64ToString(base64) {
    let base64Index = base64.indexOf(";base64,") + ";base64,".length;
    return window.atob(base64.substring(base64Index));
}
