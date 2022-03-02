@extends('layouts.auth.app')

@section('content')
    <div class="container flex-grow-1">
        <div class="row h-100 justify-content-center align-items-center pb-md-5">
            <div class="card auth-card">
                <div class="card-body text-center pb-1 px-4">
                    <div>
                        <img src="{{ asset('img/logo.svg') }}" class="logo" alt="logo">
                    </div>

                    @if(\App\Helpers\FeatureFlag::socialAuth())
                        <div>
                            <h5 class="subtitle mb-4"><span>@lang('pages/auth/login.loggin_using_social_account')</span>
                            </h5>

                            <div class="row">
                                <div class="col-md-6 col-12 mb-2">
                                    <a href="#" class="btn btn-facebook btn-block">
                                        <i class="fab fa-facebook-f mr-1"></i>
                                        Facebook
                                    </a>
                                </div>

                                <div class="col-md-6 col-12">
                                    <a href="#" class="btn btn-google btn-block">
                                        <i class="fab fa-google mr-1"></i> Google
                                    </a>
                                </div>
                            </div>
                        </div>
                    @endif

                    <div class="text-left">
                        <h5 class="subtitle  mb-3 mt-2"><span>@lang('pages/auth/login.loggin_using_email')</span></h5>

                        <form method="POST" action="{{ route('login') }}">
                            @csrf

                            <div class="row">
                                <div class="col-12">
                                    @include('components.auth.input-text',['id'=>'email', 'name'=>'email','label'=>__('pages/auth/login.email'), 'value'=>old('email'),
                                                'required'=>true, 'autofocus'=>true, 'autocomplete'=>'email'])
                                </div>

                                <div class="col-12">
                                    @include('components.auth.input-password',['id'=>'password', 'name'=>'password','label'=>__('pages/auth/login.password'),
                                                'required'=>true, 'autocomplete'=>'current-password'])
                                </div>


                                <div class="col-6 mb-2 d-flex align-items-center">
                                    @include('components.auth.input-checkbox',['id'=>'remember', 'name'=>'remember','label'=>__('pages/auth/login.remember'),
                                                'value'=> old('remember', false)])
                                </div>

                                @if(\App\Helpers\FeatureFlag::sendEmail())
                                    <div class="col-6 mb-2">
                                        <a class="btn btn-link float-right" href="{{ route('password.request') }}">
                                            {{ __('pages/auth/login.forgot_password') }}
                                        </a>
                                    </div>
                                @endif

                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-primary continue-button">
                                        {{ __('pages/auth/login.login') }} <i class="fas fa-arrow-right ml-1"></i>
                                    </button>
                                </div>


                                <div class="col-12 text-center mt-2">
                                    <hr>
                                    @lang('pages/auth/login.create_new_account')

                                    <a href="{{ route('register') }}">
                                        {{ __('pages/auth/login.sign_up') }}
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
