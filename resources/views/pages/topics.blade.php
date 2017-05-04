@extends('layouts.app')
@section('content')
          <h1>{{ $title->section }}</h1>
          @include('pages.tables.topics')
@endsection