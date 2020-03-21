<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class customHeroController extends Controller
{

    public function index() {
        $hero = \App\Hero::find(1);
        return view('customHero', ['hero' => $hero]);

    }
    public function createHero(Request $request){
        $hero = new Hero; //Créer un nouvel objet voiture, on va pouvoir le remplir avec nos valeurs
        $hero->name= $request->input('name');
        $hero->mainStat= $request->input('stat');
        $hero->range= $request->input('range');
        $hero->orientation= $request->input('orientation');
        $hero->save();
    }
}
