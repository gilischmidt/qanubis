const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.scripts(['resources/js/global.js'], 'public/js/global.js');

mix.js('resources/js/pages/projects.js', 'public/js/pages');
mix.js('resources/js/pages/home.js', 'public/js/pages');



// pdfjs
mix.copyDirectory('node_modules/pdfjs-dist/cmaps', 'public/vendor/pdfjs/cmaps');
mix.copyDirectory('node_modules/pdfjs-dist/web/images', 'public/vendor/pdfjs/images');
mix.scripts(['node_modules/pdfjs-dist/es5/build/pdf.worker.min.js'], 'public/vendor/pdfjs/pdf.worker.js');


// datatables
mix.scripts(['resources/plugins/datatables/datatables.min.js'], 'public/vendor/datatables/datatables.min.js');
mix.styles(['resources/plugins/datatables/datatables.min.css'], 'public/vendor/datatables/datatables.min.css');

// d3
mix.scripts(['node_modules/d3/dist/d3.min.js'], 'public/vendor/d3/d3.js');
mix.scripts(['node_modules/d3-context-menu/js/d3-context-menu.js'], 'public/vendor/d3/context-menu.js');
mix.scripts(['node_modules/d3-zoom/dist/d3-zoom.min.js'], 'public/vendor/d3/zoom.js');



mix.scripts(['node_modules/pdfjs-dist/es5/build/pdf.min.js',
    'node_modules/pdfjs-dist/es5/web/pdf_viewer.js',
    'node_modules/pdfjs-dist/es5/image_decoders/pdf.image_decoders.min.js'
], 'public/vendor/pdfjs/viewer.js');

mix.styles([
    'node_modules/pdfjs-dist/es5/web/pdf_viewer.css'
], 'public/vendor/pdfjs/viewer.css');
// end pdfjs


mix.version();
mix.version('img/**');


