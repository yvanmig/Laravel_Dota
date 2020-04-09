<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class WelcomePageController extends Controller
{
    //affichage de la page d'accueil avec chargement des commentaires visiteurs
    public function index(){
        $review=\App\Review::all();

        $reviewRand = DB::table('review')
                          ->inRandomOrder()
                          ->get();

        return view('welcome', ['review' => $reviewRand]);
    }
}
