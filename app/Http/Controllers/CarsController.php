<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Car;

class CarsController extends Controller
{
    public function index() {
        $cars = \App\Car::all(); //On prend toute la base de donnée
        // $cars = \App\Car::find(1); //Si on veut juste une ligne précise
        return view('cars', ['cars' => $cars]); //On la passe dans la vue

    }
    public function fill() {
        $car = new Car; //Créer un nouvel objet voiture, on va pouvoir le remplir avec nos valeurs
        $car->brand= 'Renault';
        $car->model= 'Clio';
        $car->color= 'Rouge';
        $car->price= 10000;
        $car->speed= 200;
        $car->year= 2000;
        $car->save(); //On a fini l'opération, on sauvegarde notre objet
    }
    public function update() {
        $car = \App\Car::find(1); //Se base sur la clé primaire de la table (ici c'est la colonne id)pour chercher une ligne précise
        $car->color = 'Bleu'; //Modifier la valeur de cette ligne, à la colonne "color";
        $car->save();
        dd($car);
    }
    public function delete() {
        $car = \App\Car::find(3); 
        $car->delete(); //Chercher la troisième ligne et la supprimer
    }

    //Mettre à jour la bdd avec une nouvelle ligne venant du formulaire utilisateur
    public function insert(Request $request) { 
        
        $car = new Car; //Créer un nouvel objet voiture, on va pouvoir le remplir avec nos valeurs
        $car->brand= $request->input('brand');
        $car->model= $request->input('model');
        $car->color= $request->input('color');
        $car->price= $request->input('price');
        $car->speed= $request->input('speed');
        $car->year= $request->input('year');
        $car->save(); //On a fini l'opération, on sauvegarde notre objet
        // dd($car);
        return view('cars', ['cars' => $cars]);
    }
}
