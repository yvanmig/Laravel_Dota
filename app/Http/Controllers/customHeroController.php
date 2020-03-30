<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class customHeroController extends Controller
{

    public function index() {
        $hero = \App\Hero::find(1); //Prendre la première ligne du tableau (correspond au profil utilisateur utilisé par défaut)

        $curl = curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.opendota.com/api/heroStats",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_POSTFIELDS => "",
        CURLOPT_COOKIE => "__cfduid=d5d64367cc61de7f6538056c9126e2eda1582288201",
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);

        if ($err) {
        echo "cURL Error #:" . $err;
        } else {        
            $response = json_decode($response); //covertir notre json en variable php
            
            //Aller chercher 6 images aléatoires
            for ($i=0; $i<6; $i++) {
                $random = rand(0, count($response)-1); //Créer un nombre aléatoire basé sur la taille de la réponse, qu'on utilisera comme indice pour parcour le tableau
                $urlImg[$i] = "https://api.opendota.com";
                $urlImg[$i] = $urlImg[$i] . $response[$random]->img;
            }               

        return view('customHero', ['hero' => $hero, 'urlImg' => $urlImg]);
    }
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
        $hero->picture= $request->input('picture');
        $hero->save();

        $curl = curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.opendota.com/api/heroStats",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_POSTFIELDS => "",
        CURLOPT_COOKIE => "__cfduid=d5d64367cc61de7f6538056c9126e2eda1582288201",
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);

        if ($err) {
        echo "cURL Error #:" . $err;
        } else {        
            $response = json_decode($response); //covertir notre json en variable php
            
            //Aller chercher 6 images aléatoires
            for ($i=0; $i<6; $i++) {
                $random = rand(0, count($response)); //Créer un nombre aléatoire basé sur la taille de la réponse, qu'on utilisera comme indice pour parcour le tableau
                $urlImg[$i] = "https://api.opendota.com";
                $urlImg[$i] = $urlImg[$i] . $response[$random]->img;
            }
        } 

        return view('customHero', ['hero' => $hero, 'urlImg' => $urlImg]);
    }
}
