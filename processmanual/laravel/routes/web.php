<?php

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


// Auth::routes();

// Route::view('/', 'home');
Route::view('/{path?}', 'index');



// Route::get('/', 'PagesController@index');

// //Add Manual
// Route::get('/manual/add', function () {
//     return view('pages.addmanual');
// });

// //My Manuals
// Route::get('/mymanuals/', function () {
//     return view('pages.addmanual');
// });

// //Edit Manual
// Route::get('/manual/{id}', function ($id) {
//     return "This is ".$id;
//     // return view('pages.addmanual');
// });


// // Route::get('/operations', 'OperationsController@show');
