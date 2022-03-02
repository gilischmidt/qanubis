@extends('layouts.auth.app')

@section('content')
    <div class="container flex-grow-1">
        <div class="row h-100 justify-content-center align-items-center pb-md-5">
            <div class="card auth-card">
                <div class="card-body text-center pb-1 px-4">

                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('A fresh verification link has been sent to your email address.') }}
                        </div>
                    @endif

                    <div class="text-center">
                        <h5 class="subtitle  mb-3 mt-2">
                            <span>{{ __('verify your email address') }}</span>
                        </h5>

                        <h2 class="my-5">
                            {{ __('Before proceeding, please check your email for a verification link.') }}
                        </h2>

                        <h5>
                            {{ __('If you did not receive the email') }},
                        </h5>

                        <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                            @csrf
                            <button type="submit" class="btn btn-primary continue-button">
                                {{ __('click here to request another') }}
                            </button>
                        </form>

                        <div class="text-center mt-2">
                            <hr>

                            <form class="d-inline" method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button type="submit" class="btn btn-link">
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

