@extends('layouts.app', ['hide_page_footer'=>true])

@section('page_content')
    @include('layouts.portal.partials.header')

    <main class="@if(!isset($fullPage) || !$fullPage) py-4 px-2 @endif d-flex flex-grow-1">
        @yield('content')
    </main>
@endsection
