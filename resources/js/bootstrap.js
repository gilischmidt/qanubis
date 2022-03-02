window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    // dependencies
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    window.Swal = require('sweetalert2');
    window.StreamSaver = require('streamsaver');
    window.FileDialog = require('file-dialog');
    window.pdfmake = require('pdfmake/build/pdfmake.min');
    window.pdffonts = require('pdfmake/build/vfs_fonts');
    window.Tipped = require('@staaky/tipped/dist/js/tipped.min');

    require('bootstrap');
    require('@fortawesome/fontawesome-free/js/all.min');
    require('jquery-slimscroll/jquery.slimscroll.min');
    require('spectrum-colorpicker2/dist/spectrum.min');
    require('gasparesganga-jquery-loading-overlay/dist/loadingoverlay.min');
    require('web-streams-polyfill/dist/ponyfill');
    require('select2/dist/js/select2.min');
    require('summernote/dist/summernote-bs4.min');
    require('moment/dist/moment');
    require('jstree/dist/jstree.min');
} catch (e) {
    console.error(e);
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

//window.axios = require('axios');

//window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
