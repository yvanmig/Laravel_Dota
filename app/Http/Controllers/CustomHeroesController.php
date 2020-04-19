<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Hero;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Str;

class CustomHeroesController extends Controller
{
    // Rediriger l'utilisateur vers la page de connexion s'il n'est pas authentifié
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    //Diriger l'utilisateur vers la page montrant son héro, ou la page pour en créer un s'il n'en possède pas
    public function index() {
        $heroes = DB::table('hero')
                    ->where('idUser', Auth::id())
                    ->first();        

        //Vérifier si l'utilisateur a déjà créé un personnage dans la base de données
        $check = DB::table('hero')
                    ->where('idUser', Auth::id())
                    ->exists();

        //Si il en a déjà créé un, l'envoyer vers la page présentant le perso
        if ($check) {
            $user = DB::table('users')
                    ->where('id', Auth::id())
                    ->first();

            //Parser la date de création pour change son format d'affichage            
            $timeParsed = Carbon::parse($user->created_at)->isoFormat('LLLL');   
            $likes = DB::table('users_data')
                        ->where('id_user', Auth::id())
                        ->first();         
                
            return view('userHero', ['heroes' => $heroes, 'user' => $user, 'timeParsed' => $timeParsed, 'likes' => $likes]);
        }

        //Sinon, l'envoyer sur la page de création
        if (!$check) {            
                return view('formSelection');
            }       
        }

public function formEasy(){
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

        // return view('createHero', ['urlImg' => $urlImg]);
        return view('createHero', ['urlImg' => $urlImg]);

    }   
}
    //Créer un nouveau héro à partir du formulaire
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
                        ->first();
        $user = DB::table('users')
                    ->where('id', Auth::id())
                    ->first();
        $likes = DB::table('users_data')
                    ->where('id_user', Auth::id())
                    ->first(); 

            
                            //Parser la date de création pour change son format d'affichage
                            $timeParsed = Carbon::parse($user->created_at)->isoFormat('LLLL');
                            
                        return view('userHero', ['heroes' => $heroes, 'user' => $user, 'timeParsed' => $timeParsed, 'likes' => $likes]);
                    
        // return view('userHero', ['heroes' => $heroes, 'user' => $user]);
        
    }

//Mettre à jour le héro de l'utilisateur et retourner la vue avec les nouvelles valeurs
    public function updateHero(Request $request) {
        $hero = \App\Hero::find(1);
        $heroes = DB::table('hero')
        ->where('idUser', Auth::id())
        ->delete();
        return view('formSelection');
    }

    public function createHard(Request $request) {
        $name = $request->input('name');
        // $name = Str::of('dqz dd')->explode(' ');
        // $name = explode('', $name);
        $name = str_split($name);
        // echo $name;
        $hero = new Hero; 
            $hero->idUser= Auth::id(); //renseigner l'id de l'utilisateur
            $hero->name= $request->input('name');
            $hero->mainStat= $request->input('stat');
            $hero->age= $request->input('age');
            $hero->orientation= $request->input('orientation');
            $hero->picture= $request->input('picture');
            $hero->save(); //Enregistrer le nouveau héro

            $heroes = DB::table('hero')
            ->where('idUser', Auth::id())
            ->first();
            $user = DB::table('users')
                    ->where('id', Auth::id())
                    ->first();
        $likes = DB::table('users_data')
                    ->where('id_user', Auth::id())
                    ->first();
            //Parser la date de création pour change son format d'affichage
            $timeParsed = Carbon::parse($user->created_at)->isoFormat('LLLL');
                            
            return view('userHero', ['heroes' => $heroes, 'user' => $user, 'timeParsed' => $timeParsed, 'likes' => $likes, 'name' => $name]);
    }

    public function createHardTest(Request $request) {
        $stat = $request->input("stat");
        $name = $request->input('name');
        echo($stat);
    }
}
