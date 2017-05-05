<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::auth();

Route::get('/', function () {
    return view('pages/index');
});
Route::get('/', 'SectionController@index');					
Route::get('/sections', 'SectionController@index');				//главные страницы

Route::get('/profile', 'UserController@index');					//страница пользователя
Route::get('/setting/{id}', 'UserController@edit');				//страница настройки
Route::post('/profile', 'UserController@update_avatar');		//загрузка новой фотки

Route::get('/profile/{id}/delete', 'UserController@destroy');	//удаление пользователя
Route::post('/profile/{id}/update', 'UserController@update');	//изменение имени пользователя

Route::get('/create', 'TopicController@create');				//страница создания новой темы
Route::get('/create', 'TopicController@option');
Route::post('/posts', 'TopicController@new_topic');				//создание новой темы

Route::get('/sections/{section}', 'TopicController@index');		//вывод страницы с темами раздела
Route::get('/posts/{topic}', 'TopicController@show');			//вывод темы

Route::post('/posts/{topic}/comments', 'CommentController@create');	//создает новый коммент



