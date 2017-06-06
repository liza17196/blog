@extends('layouts.app')
@section('content')
	<h1 style="margin-left: 20px;">Настройки</h1>
	<br><br>
	<div class="container">
		<div class="row">
		<div class="col-md-3 col-md-offset-1">
				<form method="POST" action="/profile/{{ Auth::user()->id }}/update">
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
					<label for="update" style="font-size: 20px">Изменить имя:</label>
					<input type="text" name="new_nickname" id="update">
					<input type="submit" value="Отправить" class="btn btn-sm btn-default" style="margin-top: 15px; padding: 5px 10px; font-size: 15px">
				</form>
				<br>
				<form enctype="multipart/form-data" method="POST" action="/profile/new_avatar">
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
					<label for="new-avatar" style="font-size: 20px">Сменить аватарку:</label>
					<input id="new-avatar" type="file" name="new-avatar">
                    <input type="submit" value="Отправить" class="btn btn-sm btn-default" style="margin-top: 15px; padding: 5px 10px; font-size: 15px">
				</form>
				<br>
				@if(Auth::user()->hasRole('user owner'))
					<form method="GET" action="/profile/{{ Auth::user()->id }}/delete">
						<label for="delete" style="font-size: 20px">Удалить страницу:</label><br>
						<input type="submit" id="delete" value="delete" class="btn btn-sm btn-default" style="padding: 5px 10px; font-size: 15px">
					</form>
					<br>
				@endif
				@if(Auth::user()->hasRole('user admin'))
					<form method="POST" action="/profile/{{ Auth::user()->id }}/filter">
						<input type="hidden" name="_token" value="{{ csrf_token() }}">
						<label for="filter" style="font-size: 20px">Фильтр слов:</label>
						<input type="text" name="filter" id="filter">
						<input type="submit" value="Отправить" class="btn btn-sm btn-default" style="margin-top: 15px; padding: 5px 10px; font-size: 15px">
					</form>
				@endif
			</div>
		</div>
	</div>
@endsection