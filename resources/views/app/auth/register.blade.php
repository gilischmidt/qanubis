@extends('layouts.auth.app')

@section('content')
    <div class="container flex-grow-1">
        <div class="row h-100 justify-content-center align-items-center pb-md-5">
            <div class="card auth-card">
                <div class="card-body text-center pb-1 px-4">

                    @if(\App\Helpers\FeatureFlag::socialAuth())
                        <div>
                            <h5 class="subtitle mb-4">
                                <span>@lang('pages/auth/register.register_using_social_account')</span>
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

                    <div>
                        <h5 class="subtitle mb-4">
                            <span>@lang('pages/auth/register.register_using_email')</span>
                        </h5>

                        <form method="POST" action="{{ route('register') }}">
                            @csrf

                            <div class="text-left">
                                <div class="row">
                                    <div class="col-12">
                                        @include('components.auth.input-text',['id'=>'name', 'name'=>'name','label'=>__('pages/auth/register.name'), 'value'=>old('name'),
                                                    'required'=>true, 'autocomplete'=>'name'])
                                    </div>

                                    <div class="col-12">
                                        @include('components.auth.input-text',['id'=>'email', 'name'=>'email','label'=>__('pages/auth/register.email'), 'value'=>old('email'),
                                                    'required'=>true, 'autocomplete'=>'email'])
                                    </div>


                                    <div class="col-12">
                                        @include('components.auth.input-password',['id'=>'password', 'name'=>'password','label'=>__('pages/auth/register.password'),
                                                    'required'=>true, 'autocomplete'=>'current-password',
                                                    'help'=>'Your password must be at least 6 characters long.'])
                                    </div>

                                    <div class="col-12">
                                        @include('components.auth.input-password',['id'=>'password_confirmation', 'name'=>'password_confirmation','label'=>__('pages/auth/register.password_confirmation'),
                                                    'required'=>true, 'autocomplete'=>'new-password'])
                                    </div>

                                    <div class="col-12 text-center">
                                        <button type="submit" class="btn btn-primary continue-button">
                                            {{ __('pages/auth/register.complete_registration') }} <i
                                                class="fas fa-arrow-right ml-1"></i>
                                        </button>
                                    </div>

                                    <div class="col-12 text-center mt-2">
                                        <hr>
                                        @lang('pages/auth/register.already_has_account')

                                        <a href="{{ route('login') }}">
                                            {{ __('pages/auth/register.loggin') }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

