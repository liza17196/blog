<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
<!--     <link rel="icon" href="../../favicon.ico"> -->

    <title>Blog</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <!-- Custom styles for this template -->
    <link href="/css/justified-nav.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/react-quill/dist/quill.snow.css">
    <link rel="stylesheet" href="/css/react-quill/dist/quill.bubble.css">
    <link rel="stylesheet" href="/css/react-quill/dist/quill.core.css">

  </head>
  <body>
    <div id='container'></div>
  </body>
    <script>
        window.data = {};
        window.data.csrf = "{{ csrf_token() }}";
    </script>
    <script src="http://localhost:5995/_assets/src/build/index.js"></script>
</html>