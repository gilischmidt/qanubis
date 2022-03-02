@extends('layouts.app', ['hide_page_footer'=>true])

@section('page_content')
    @include('layouts.portal.project.header')

    <main class="d-flex flex-grow-1">
        @yield('content')
    </main>
@endsection
