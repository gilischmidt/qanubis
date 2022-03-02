<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/home', 'HomeController@index')->name('home');

    Route::group(['middleware' => ['auth', 'verified'], 'as' => 'portal.'], function () {
        Route::get('/projects/{project}/fetch', 'ProjectController@fetch')->name('projects.fetch');
        Route::get('/projects/{project}/edit', 'ProjectController@edit')->name('projects.edit');
        Route::resource('projects', 'ProjectController')->only([
            'index', 'store', 'update', 'destroy'
        ]);

        Route::resource('projects.codes', 'CodeController')->only([
            'store', 'update', 'destroy'
        ]);

        Route::get('/projects/{project}/documents/{tag}/download', 'DocumentController@downloadBase64')->name('projects.documents.download_base64');
        Route::resource('projects.documents', 'DocumentController')->only([
            'store', 'update', 'destroy'
        ]);

        Route::resource('projects.quotes', 'QuoteController')->only([
            'store', 'update', 'destroy'
        ]);

        Route::resource('projects.memos', 'MemoController')->only([
            'store', 'update', 'destroy'
        ]);


        Route::group(['prefix' => '/profile', 'as' => 'profile.'], function () {
            Route::get('/', 'ProfileController@index')->name('index');
            Route::patch('/', 'ProfileController@update')->name('update');
        });

    });
});



