<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\hero;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

//Controlleur qui prend les valeurs du formulaire et renvoie la vue hero avec les bonnes valeurs
class HeroController extends Controller
{
    //fonction index qui affiche la vue welcome
    public function index() {
        return view('welcome');
    }
    public function send(Request $request) { 

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
            $random = rand(0, count($response)); //Créer un nombre aléatoire basé sur la taille de la réponse, qu'on utilisera comme indice pour parcour le tableau
            $winRate = Round(($response[$random]->pro_win*100)/($response[$random]->pro_pick))-1; //Calcul du % de victoire, en se basant sur le nombre de pick et de victoires
            $mainStat = $response[$random]->primary_attr;
            $nameMainStat ="";

            //Transformer l'abbréviation en mot complet
            if ($mainStat == "str") {
                $nameMainStat = "Strength";                
            } else if ($mainStat == "agi") {
                $nameMainStat = "Agility";
            } else if ($mainStat == "int") {
                $nameMainStat = "Intelligence";
            }
        }
        $user = Auth::user();
        $urlImg = "https://api.opendota.com";
        $urlImg = $urlImg . $response[$random]->img;
        //On renvoie la vue, avec les valeurs de la requête
        return view('hero2', ['heroes' => $response[$random], 'urlImg' => $urlImg, 'winRate' => $winRate, 'nameMainStat' => $nameMainStat, 'user' => $user ]); 
    }
    //Incrémenter les compteurs qui traquent le nombre de likes, dislikes et super likes donnés par l'utilisateur
    public function store(Request $request)
    {
        $hero = new Hero; 
        DB::table('users_data')
            ->where('id_user', Auth::id())
            ->increment('likes');
   
        //    $hero->save();
           return response()->json(['success'=>'Data is successfully added']);
    }



}
