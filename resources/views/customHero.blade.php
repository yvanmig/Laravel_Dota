<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Dota Tinder </title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Spartan:200,300,400,500,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/index.css') }}"> 
        <link rel="stylesheet" href="{{ asset('css/create.css') }}"> 

    </head>
    <body>
    <div class="wrap">
        <div id="containerFormHero">
            <div id="containerForm">
            <h1> Create your own hero </h1>
                <form action="{{ route('hero-update') }}" method="get">
                
                @csrf
                
                <input type="text" name="name" placeholder="Your name" required> 
                <input type="text" name="stat" placeholder="Your main stat (strength, agility or intelligence)" required> 
                <input type="text" name="age" placeholder="Your age" required> 
                <input type="text" name="orientation" placeholder="What you're looking for (humanoid, insect, orc..)" required>  
                
                <h2> Choose your profile picture </h2>
                <div id="containerPhotos">
                    @foreach ($urlImg as $urlImg)
                        <label>
                        <input type="radio" name="picture" value= {{ $urlImg }} checked>
                        <img src={{ $urlImg }}>
                        </label>
                    @endforeach
                    
                </div>
                <button> Create </button>
                </form>

                  

                
            </div>
            <div id="containerHero">
                <div id="name"> Your name : {{ $hero->name }}</div>
                <div id="picture"> <img src={{ $hero->picture }} alt=""></div>
                <div id="stat"> Your main stat : {{ $hero->mainStat }}</div>
                <div id="range"> Age : {{ $hero->age }}</div>
                <div id="orientation"> Looking for : {{ $hero->orientation }}</div>            
            </div>
            
        </div>
       
    </div>


    </body>
    <script 
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous">
    </script>


    
</html>