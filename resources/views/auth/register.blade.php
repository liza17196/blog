@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">       
                <h2>Register</h2>
                <br>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}" enctype="multipart/form-data">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('name') ? 'has-error' : '' }}">
                            <label for="name" class="col-md-4 control-label">Name</label>
                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}">
                                @if($errors->has('name'))
                                    <div class="help-block">
                                        <string>{{ $errors->first('name') }}</string>
                                    </div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{$errors->has('email') ? 'has-error' : ''}}">
                            <label for="email" class="col-md-4 control-label">E-mail</label>
                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}" placeholder="yourmail@mail.ru" value="{{ old('email') }}">
                                @if($errors->has('email'))
                                    <div class="help-block">
                                        <string>{{ $errors->first('email') }}</string>
                                    </div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{$errors->has('phone') ? 'has-error' : ''}}">
                            <label for="phone" class="col-md-4 control-label">Phone</label>
                            <div class="col-md-6">
                                <input id="phone" type="phone" class="form-control" name="phone" pattern="^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$" value="{{ old('phone') }}" placeholder="+38(012)345-67-89" >
                                @if($errors->has('phone'))
                                    <div class="help-block">
                                        <string>{{ $errors->first('phone') }}</string>
                                    </div>
                                @endif
                            </div>
                        </div>
                        
                        <div class="form-group{{$errors->has('password') ? 'has-error' : ''}}">
                            <label for="password" class="col-md-4 control-label">Password</label>
                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" value="{{ old('password') }}">
                            </div>
                        </div>
                        <div class="form-group{{$errors->has('password_confirmation') ? 'has-error' : ''}}">
                            <label for="password_confirm" class="col-md-4 control-label">Confirm Password</label>
                            <div class="col-md-6">
                                <input id="password_confirm" type="password" class="form-control" name="password_confirmation" value="{{ old('password_confirmation') }}">
                                @if($errors->has('password_confirmation'))
                                    <div class="help-block">
                                        <string>{{ $errors->first('password_confirmation') }}</string>
                                    </div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{$errors->has('avatar') ? 'has-error' : ''}}">
                            <label for="password_confirm" class="col-md-4 control-label">Your avatar</label>
                            <div class="col-md-6">
                                <input id="avatar" type="file" class="form-control" name="avatar" value="{{ old('avatar') }}">
                                @if($errors->has('avatar'))
                                    <div class="help-block">
                                        <string>{{ $errors->first('avatar') }}</string>
                                    </div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-default">
                                    <i class="fa fa-btn fa-sign-in"></i> Register
                                </button>
                            </div>
                        </div>    
                </form>
            </div>
        </div>
    </div>
</div>        
@endsection