@extends('layouts.auth.app')

@section('content')
    <div class="container flex-grow-1">
        <div class="row h-100 justify-content-center align-items-center pb-md-5">

            <div class="card auth-card">
                <div class="card-body text-center pb-1 px-4">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div class="text-left">
                        <h5 class="subtitle  mb-3 mt-2"><span>please inform your new password</span>
                        </h5>

                        <form method="POST" action="{{ route('password.update') }}">
                            @csrf

                            <input type="hidden" name="token" value="{{ $token }}">

                            <div class="row">
                                <div class="col-12">
                                    @include('components.auth.input-text',['id'=>'email', 'name'=>'email','label'=>'E-mail', 'value'=>($email ?? old('email')),
                                                'required'=>true, 'readonly'=>true])
                                </div>

                                <div class="col-12">
                                    @include('components.auth.input-password',['id'=>'password', 'name'=>'password','label'=>'New Password',
                                                'required'=>true, 'autocomplete'=>'new-password'])
                                </div>

                                <div class="col-12">
                                    @include('components.auth.input-password',['id'=>'password_confirmation', 'name'=>'password_confirmation','label'=>'Confirm Your Password',
                                                'required'=>true, 'autocomplete'=>'new-password'])
                                </div>

                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-primary continue-button">
                                        Reset Password <i class="fas fa-arrow-right ml-1"></i>
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



