<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class customHeroController extends Controller
{

    public function index() {
        $hero = \App\Hero::find(1);
        return view('customHero', ['hero' => $hero]);

    }
    //Créer un nouveau héro
    public function createHero(Request $request){
        $hero = new Hero; //Créer un nouvel objet voiture, on va pouvoir le remplir avec nos valeurs
        $hero->name= $request->input('name');
        $hero->mainStat= $request->input('stat');
        $hero->range= $request->input('age');
        $hero->orientation= $request->input('orientation');
        $hero->save();
    }

//Mettre à jour le héro de l'utilisateur et retourner la vue avec les nouvelles valeurs
    public function updateHero(Request $request) {
        $hero = \App\Hero::find(1);
        $hero->name= $request->input('name');
        $hero->mainStat= $request->input('stat');
        $hero->age= $request->input('age');
        $hero->orientation= $request->input('orientation');
        $hero->save();
        return view('customHero', ['hero' => $hero]);
    }
}
