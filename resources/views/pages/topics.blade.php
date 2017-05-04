@extends('layouts.app')
@section('content')
<br>
          <h1>{{ $title->section }}</h1>
          <br><br>
          @include('pages.tables.topics')
@endsection