<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Blog</title>

    <script src="/vendor/unisharp/laravel-filemanager/js/lfm.js"></script>
	<link rel="stylesheet" href="/vendor/unisharp/laravel-filemanager/css/cropper.min.css">
	<link rel="stylesheet" href="/vendor/unisharp/laravel-filemanager/css/lfm.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <!-- Custom styles for this template -->
    <link href="/css/justified-nav.css" rel="stylesheet">
    <script src="https://cloud.tinymce.com/stable/tinymce.min.js"></script>
  	<script>tinymce.init({ 
  		selector:'textarea',
  		plugins : [
      'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
      'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime nonbreaking',
      'save table contextmenu directionality emoticons template paste textcolor'
    	],
    	toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor backcolor emoticons',
    	relative_urls: false,
    	file_browser_callback : function(field_name, url, type, win) {
      var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
      var y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

      var editor_config = {
    path_absolute : "/",
    selector: "textarea.my-editor",
    plugins: [
      "advlist autolink lists link image charmap print preview hr anchor pagebreak",
      "searchreplace wordcount visualblocks visualchars code fullscreen",
      "insertdatetime media nonbreaking save table contextmenu directionality",
      "emoticons template paste textcolor colorpicker textpattern"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media",
    relative_urls: false,
    file_browser_callback : function(field_name, url, type, win) {
      var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
      var y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

      var cmsURL = editor_config.path_absolute + 'laravel-filemanager?field_name=' + field_name;
      if (type == 'image') {
        cmsURL = cmsURL + "&type=Images";
      } else {
        cmsURL = cmsURL + "&type=Files";
      }

      tinyMCE.activeEditor.windowManager.open({
        file : cmsURL,
        title : 'Filemanager',
        width : x * 0.8,
        height : y * 0.8,
        resizable : "yes",
        close_previous : "no"
      });
    }
  };
      
      var cmsURL = editor_config.path_absolute + 'laravel-filemanager?field_name=' + field_name;
      if (type == 'image') {
        cmsURL = cmsURL + "&type=Images";
      } else {
        cmsURL = cmsURL + "&type=Files";
      }

      tinyMCE.activeEditor.windowManager.open({
        file : cmsURL,
        title : 'Filemanager',
        width : x * 0.8,
        height : y * 0.8,
        resizable : "yes",
        close_previous : "no"
      });
    }
  		});</script>

  </head>
  <body>


   @include ('layouts.nav')
  
    <div class="container">
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
	    <textarea class="form-control col-md-6" id="body" name="body" style="height: 220px"></textarea>
	  </div>
	  
	  <button type="submit" class="btn btn-default">Отправить</button>

	</form>
    </div>
  </body>
</html>