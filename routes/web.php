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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::any('/', 'WelcomePageController@index')->name('welcome');
Route::get('/hero', 'heroController@send')->name('hero'); //Appeler le heroController qui appelle la vue en passant les valeurs du formulaire
Route::post('/hero', 'heroController@store')->name('hero');

Route::get('/match/{heroId}', function ($heroId) { //Appel d'une route en passant une valeur dans l'URL
    return 'Le héro est ' .$heroId; //Afficher directement la valeur passée
});

Route::get('/cars', 'CarsController@index')->name('cars');
Route::get('/cars-update', 'CarsController@update')->name('cars-update');
Route::get('/cars-delete', 'CarsController@delete')->name('cars-delete');
Route::post('/cars-insert', 'CarsController@insert')->name('cars-insert');

// Route::get('/hero-create', 'customHeroController@index')->name('hero-create');
// Route::any('/hero-create', 'customHeroController@index')->name('hero-create');
// Route::post('/hero-update', 'customHeroController@updateHero')->name('hero-update'); //mettre à jour la ligne du héro grâce au formulaire

Route::any('/hero-custom', 'CustomHeroesController@index')->name('hero-custom');
Route::post('/hero-custom-create', 'CustomHeroesController@createHero')->name('hero-custom-create');
Route::any('/hero-custom-hard', function() {
    return view('createHeroHard');
});
Route::any('/hero-custom-update', 'CustomHeroesController@updateHero')->name('hero-custom-update');

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
