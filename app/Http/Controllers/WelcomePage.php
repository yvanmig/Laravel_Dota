<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomePage extends Controller
{
    //affichage de la page d'accueil avec chargement des commentaires visiteurs
    public function index(){
        $review=\App\Review::all();
        return view('welcome', ['review' => $review]);
    }
}
