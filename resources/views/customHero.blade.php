<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Dota Tinder </title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Spartan:200,300,400,500,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/index.css') }}"> 

    </head>
    <body>
   <h1> Créez votre profil </h1>
        <div class="coucou">
            <form action="{{ route('hero-create') }}" method="post">
            @csrf
               <input type="text" name="name" placeholder="Your name"> 
               <input type="text" name="stat" placeholder="Your main stat"> 
               <input type="text" name="range" placeholder="Your range"> 
               <input type="text" name="orientation" placeholder="Your orientation"> 
               <button> Valider </button>
            </form>
        </div>
        <div class="oui">

                <div id="name"> {{ $hero->name }}</div>
                <div id="stat"> {{ $hero->mainStat }}</div>
                <div id="range"> {{ $hero->range }}</div>
                <div id="orientation"> {{ $hero->orientation }}</div>


            
        </div>
    </body>
    <script 
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous">
    </script>
    <!-- <script src="{{ asset('js/heroDetails.js') }}"></script> -->

    
</html>