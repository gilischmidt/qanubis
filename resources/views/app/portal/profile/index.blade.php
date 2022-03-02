@extends('layouts.portal.app')

@section('content')
    <div class="container">
        <div class="page-title-container d-flex justify-content-between align-items-center">
            <h5 class="d-inline page-title">Edit your profile</h5>

            <a href="{{ route('home') }}" class="btn btn-sm btn-primary float-right">
                <i class="fas fa-arrow-left mr-1"></i> back
            </a>
        </div>

        <form method="POST" action="{{ route('portal.profile.update') }}">
            @csrf
            @method('PATCH')

            <div class="row">
                <div class="row">
                    <div class="col-md-6 col-12">
                        @include('components.portal.input-text',['id'=>'name', 'name'=>'name','label'=>'Name',
                                'value'=>old('name', $user->name ?? null), 'required'=>true])
                    </div>

                    <div class="col-md-6 col-12">
                        @include('components.portal.input-text',['id'=>'email', 'name'=>'email','label'=>'Email',
                                'value'=>old('email', $user->email ?? null), 'required'=>false, 'readonly'=>true,
                                'help'=>'Your email can not be changed manually. If you need to do it, contact us.'])
                    </div>
                </div>

                <hr class="my-5">

                <h5 class="mb-3">If you wish to change your password fill the inputs bellow. Don't worry! We won't
                    update it
                    if you leave the fields empty <i class="far fa-smile-wink"></i>.</h5>

                <div class="row">
                    <div class="col-12">
                        @include('components.portal.input-password',['id'=>'current_password', 'name'=>'current_password','label'=>'Current Password',])
                    </div>

                    <div class="col-md-6 col-12">
                        @include('components.portal.input-password',['id'=>'password', 'name'=>'password','label'=>'New Password',
                            'help'=>'Your password must be at least 6 characters long.'])
                    </div>

                    <div class="col-md-6 col-12">
                        @include('components.portal.input-password',['id'=>'password_confirmation', 'name'=>'password_confirmation','label'=>'Confirm New Password'])
                    </div>
                </div>

                <div class="w-100">
                    @include('components.portal.btn-submit')
                </div>
            </div>

        </form>
    </div>
@endsection

