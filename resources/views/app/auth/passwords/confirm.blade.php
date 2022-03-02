@extends('layouts.auth.app')

@section('content')
    <div class="container flex-grow-1">
        <div class="row h-100 justify-content-center align-items-center pb-md-5">
            <div class="card auth-card">
                <div class="card-body text-center pb-1 px-4">
                    <div>
                        <img src="{{ asset('img/logo.svg') }}" class="logo" alt="logo">
                    </div>


                    <div class="text-left">
                        <h5 class="subtitle mb-4">
                            <span>{{ __('please confirm your password before continuing') }}</span>
                        </h5>

                        <form method="POST" action="{{ route('password.confirm') }}">
                            @csrf

                            <div class="row">
                                <div class="col-12">
                                    @include('components.auth.input-password',['id'=>'password', 'name'=>'password','label'=>'Password',
                                                'required'=>true, 'autocomplete'=>'current-password'])
                                </div>


                                <div class="col-12 mb-2">
                                    <a class="btn btn-link float-right" href="{{ route('password.request') }}">
                                        {{ __('pages/auth/login.forgot_password') }}
                                    </a>
                                </div>

                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-primary continue-button">
                                        Continue <i class="fas fa-arrow-right ml-1"></i>
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
