<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'QAnubis') }}</title>

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="57x57" href="{{ mix('img/favicon/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ mix('img/favicon/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ mix('img/favicon/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ mix('img/favicon/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ mix('img/favicon/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ mix('img/favicon/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ mix('img/favicon/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ mix('img/favicon/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ mix('img/favicon/apple-icon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ mix('img/favicon/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ mix('img/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ mix('img/favicon/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ mix('img/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ mix('img/favicon/manifest.json') }}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{ mix('img/favicon/ms-icon-144x144.png') }}">
    <meta name="theme-color" content="#ffffff">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    @stack('head')
</head>
<body>
<!-- BEGIN toasts -->
<div id="sessions-toast-container" class="alert-container" style="display: none;">
    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span
                    aria-hidden="true">&times;</span>
            </button>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    @foreach (['danger', 'warning', 'success', 'about'] as $msg)
        @if(Session::has($msg))
            <div class="alert alert-{{$msg}}">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <ul>
                    @if(is_array(Session::get($msg)))
                        @foreach(Session::get($msg) as $alert)
                            <li>{{ $alert }}</li>
                        @endforeach
                    @else
                        <li>{{ Session::get($msg) }}</li>
                    @endif
                </ul>
            </div>
        @endif
    @endforeach
</div>
<!-- END toasts -->

<div id="app" class="h-100 w-100 d-flex flex-column">
    @yield('page_content')

    @if(!isset($hide_page_footer) || !$hide_page_footer)
        <footer id="footer-app" class="text-center d-flex justify-content-center align-items-center bg-primary">
            <div class="icons-info" data-toggle="tooltip" title="Icons made by Freepik from www.flaticon.com">
                App logo made by <a target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>

            <p class="m-0 p-0 text-truncate" data-toggle="tooltip"
               title="@ {{ \Carbon\Carbon::now()->year }} Giliardi Schmidt gili.schmidt@hotmail.com">
                @ {{ \Carbon\Carbon::now()->year }} Giliardi Schmidt
                <span class="text-muted">gili.schmidt@hotmail.com</span>
            </p>
        </footer>
    @endif
</div>

@stack("modal")

<!-- Scripts -->
<script src="{{ mix('js/app.js') }}"></script>
<script src="{{ mix('js/global.js') }}"></script>

@autopagesasync('.refresh-on-paging')
@autowherescript('.btn-filter', '.input-filter')

@stack('script')

</body>
</html>
