@extends('layouts.app')
@section('content')
<div class="container">
	        <h1>Создать новый раздел</h1>
			<form method="POST" action="/sections/new_section">
	{{ csrf_field() }}

		<br><br>
	  <div class="form-group">
	    <label for="section">Название раздела:</label>
	    <input type="text" class="form-control col-md-6" id="section" name="section">
	  </div>	  
	  <button type="submit" class="btn btn-default">Создать</button>

	</form>
    </div>
@endsection