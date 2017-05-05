<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Blog</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <!-- Custom styles for this template -->
    <link href="/css/justified-nav.css" rel="stylesheet">
    <script src="{{ URL::to('src/js/vendor/tinymce/js/tinymce/tinymce.min.js') }}"></script>
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
	<br>
	<h2>Тема '{{ $topic->title }}'</h2><p style="font-size: 14px; color: #808080">{{ $topic->created_at->toFormattedDateString() }} &nbsp; Автор: &nbsp; {{ $topic->user->name }}</p><br>
	<br>
		<p>{!! $topic->body !!}</p>
		<hr>
		<div class='comments'>
		<h3>Комментарии</h3>
		<br>
			@foreach($comments as $comment)
				<lu class="list-group">
					<article>
						<li class="list-group-item">
							<strong>
								<p>{{ $comment->created_at->diffForHumans() }}: &nbsp;</p> <!-- Вывод даты к коментарию -->
								<p>{{ $comment->user->name }}</p>
							</strong>	
							{!! $comment->body !!}		<!-- Вывод коментарий -->

						</li>
					</article>
				</lu>
			@endforeach
			<?php echo $comments->render() ?>
			<hr>
			<div class="card">
				<dv class="card-block">
				@if (Auth::guest())
					<form method="POST" action="/posts/{{ $topic->id }}/comments">
						{{ csrf_field() }}
						<div class="form-group">
						    <input type="text" class="form-control" name="body" placeholder="Вам необходимо зарегестрироваться что бы оставить комментарии" disabled>
						  </div>
						  <button type="submit" class="btn btn-default" disabled>Опубликовать</button>
					</form>
				@else
					<form method="POST" action="/posts/{{ $topic->id }}/comments">
						{{ csrf_field() }}
						<div class="form-group">
						    <textarea class="form-control" name="body" placeholder="Оставить комментарий" style="height: 220px"></textarea>
						  </div>
						  
						  <button type="submit" class="btn btn-default">Опубликовать</button>
					</form>
				</dv>
			</div>
		</div>
		@endif
    </div>
  </body>
</html>
