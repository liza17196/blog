@extends('layouts.app')
@section('content')
	        <h1>Создать новую тему</h1>
			<form method="POST" action="/posts">
	{{ csrf_field() }}

		<br><br>
	  <div class="form-group">
	    <label for="title">Название темы:</label>
	    <input type="text" class="form-control col-md-6" id="title" name="title">
	  </div>
	  @if(count($errors))
	    <div class="alert alert-danger col-md-6">
	      @foreach ($errors->get('title') as $error)
	        {{ $error }}
	      @endforeach
	    </div>
	  @endif
		<div class="form-group">
			<label for="section">Раздел</label>
			<select class="form-control col-md-2" id="section" name="section_id">
				@foreach($options as $option)
					<option value="{{ $option->id }}">{{ $option->section }}</option>
				@endforeach
			</select>
		</div>
	  <div class="form-group">
	    <label for="body">Сообщение:</label>
	    <textarea class="form-control col-md-6" id="body" name="body"></textarea>
	  </div>
	  
	  <button type="submit" class="btn btn-default">Отправить</button>

	</form>
@endsection