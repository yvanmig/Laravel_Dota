<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Hero;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CustomHeroesController extends Controller
{
    // Rediriger l'utilisateur vers la page de connexion s'il n'est pas authentifié
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index() {

        $heroes = DB::table('hero')
        ->where('idUser', Auth::id())
        ->get();

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
                $random = rand(0, (count($response)-1)); //Créer un nombre aléatoire basé sur la taille de la réponse, qu'on utilisera comme indice pour parcour le tableau
                $urlImg[$i] = "https://api.opendota.com";
                $urlImg[$i] = $urlImg[$i] . $response[$random]->img;
            }

            //Vérifier si l'utilisateur a déjà créé un personnage dans la base de données
            $check = DB::table('hero')
                        ->where('idUser', Auth::id())
                        ->exists();

            //Si il en a déjà créé un, l'envoyer vers la page présentant le perso
            if ($check) {
                return view('userHero', ['heroes' => $heroes, 'urlImg' => $urlImg]);
            }

            //Sinon, l'envoyer sur la page de création
            if (!$check) {
                return view('createHero', ['heroes' => $heroes, 'urlImg' => $urlImg]);
            }       
    }
}
    //Créer un nouveau héro
    public function createHero(Request $request){
        //Vérifier qu'un héro n'a pas déjà été créé (empêcher l'utilisateur de créer plusieurs fois le mm héro en rafraîchissant et renvoyant le formulaire de nouveau)
        $check2 = DB::table('hero')
        ->where('idUser', Auth::id())
        ->doesntExist();

        if($check2) {
            $hero = new Hero; 
            $hero->idUser= Auth::id(); //renseigner l'id de l'utilisateur
            $hero->name= $request->input('name');
            $hero->mainStat= $request->input('stat');
            $hero->age= $request->input('age');
            $hero->orientation= $request->input('orientation');
            $hero->picture= $request->input('picture');
            $hero->save(); //Enregistrer le nouveau héro
        }
        

         //Sélectionner les héros créés par l'utilisateur actuellement connecté
        $heroes = DB::table('hero')
                        ->where('idUser', Auth::id())
                        ->get();

        return view('userHero', ['heroes' => $heroes]);
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

        return view('testCreate', ['hero' => $hero, 'urlImg' => $urlImg]);
    }
}
