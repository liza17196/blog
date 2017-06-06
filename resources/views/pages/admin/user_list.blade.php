@extends('layouts.app')
@section('content')
	<div class="container">
		<h2>Все пользователи</h2>
		<br>
		@include('pages.admin.table')
	</div>
@endsection