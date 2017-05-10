@extends('layouts.app')
@section('content')
	<div class="container">
		<div class="row">
			<?php echo '<img src='.Auth::user()->avatar.' style="width=150px; height=150px; float=left; Alt=Avatar; margin: 0px 15px;">' ?>
			<h1>{{ Auth::user()->name }}<h1>
		</div>
		<br>
		<h2>Мои темы</h2>
		<br>
		@include('pages.tables.profile')
	</div>
@endsection