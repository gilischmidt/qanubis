@extends('layouts.app')

@section('page_content')
    @include('layouts.auth.partials.header')

    <main class="auth-page py-4 d-flex flex-grow-1">
        @yield('content')

        <div id="bg"></div>
        <img id="bg-img" src="{{ asset('img/login.svg') }}" alt="">
    </main>
@endsection

