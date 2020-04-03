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

Route::get('/', 'WelcomePage@index')->name('welcome');
Route::get('/hero', 'heroController@send'); //Appeler le heroController qui appelle la vue en passant les valeurs du formulaire

Route::get('/match/{heroId}', function ($heroId) { //Appel d'une route en passant une valeur dans l'URL
    return 'Le héro est ' .$heroId; //Afficher directement la valeur passée
});

Route::get('/cars', 'CarsController@index')->name('cars');
Route::get('/cars-update', 'CarsController@update')->name('cars-update');
Route::get('/cars-delete', 'CarsController@delete')->name('cars-delete');
Route::post('/cars-insert', 'CarsController@insert')->name('cars-insert');

// Route::get('/hero-create', 'customHeroController@index')->name('hero-create');
Route::any('/hero-create', 'customHeroController@index')->name('hero-create');
Route::post('/hero-update', 'customHeroController@updateHero')->name('hero-update'); //mettre à jour la ligne du héro grâce au formulaire
