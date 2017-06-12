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

Route::group(['prefix' => 'blog'], function()
{

	// Authentication Routes...
	Route::get('/login', 'Auth\AuthController@getLogin');
	Route::post('/login', 'Auth\AuthController@postLogin');
	Route::get('/logout', 'Auth\AuthController@getLogout');

	// Registration Routes...
	Route::get('/register', 'Auth\AuthController@getRegister');
	Route::post('/register', 'Auth\AuthController@postRegister');
						
	Route::get('/sections', 'SectionController@index');				//главные страницы

	Route::get('/profile', 'UserController@index');					//страница пользователя
	Route::get('/setting/{id}', 'UserController@edit');				//страница настройки
	Route::post('/profile/new_avatar', 'UserController@update_avatar');		//загрузка новой фотки

	Route::get('/profile/{id}/topics', 'UserController@show');		//вывод тем на стр пользователя
	Route::delete('/profile/{id}/delete', 'UserController@destroy');	//удаление пользователя
	Route::post('/profile/{id}/change', 'UserController@update');	//изменение имени пользователя

	Route::get('/create', 'TopicController@create');				//страница создания новой темы
	Route::get('/create/option', 'TopicController@option');
	Route::post('/posts', 'TopicController@new_topic');				//создание новой темы

	Route::get('/new_section', 'SectionController@create');				//страница создания нового раздела
	Route::post('/sections/new_section', 'SectionController@new_section');				//создание нового раздела

	Route::get('/sections/{section}', 'TopicController@index');		//вывод страницы с темами раздела
	Route::get('/sections/{section}/title', 'TopicController@show_section');		//вывод названия раздела странице с темами раздела
	Route::get('/posts/{topic}', 'TopicController@show');			//вывод темы
	Route::get('/posts/{topic}/comments', 'CommentController@index');	//вывод комментариев на странице 

	Route::post('/posts/{topic}/comments', 'CommentController@create');	//создает новый коммент

	Route::delete('/posts/{topic}/delete', 'TopicController@destroy');		//удаление поста
	Route::delete('/comments/{id}', 'CommentController@destroy');		//удаление коммента

	Route::get('/user_list', 'Admin\AdminController@index');		//список пользователей
	Route::post('/filter', 'Admin\AdminController@create');	//фильтр слов


});
	Route::get( '/{slug?}',
				[function($slug)
					{
						return view('pages.index');
					}
				])->where('slug', '.+');

