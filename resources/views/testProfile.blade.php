<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Dota Tinder </title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Spartan:200,300,400,500,700&display=swap" rel="stylesheet">
        <!-- <link rel="stylesheet" href="{{ asset('css/index.css') }}">  -->
        <link rel="stylesheet" href="{{ asset('css/create.css') }}"> 

    </head>
    <body>
    <div class="wrap">
        <div id="containerFormHero">
            <div id="containerForm">
            <h1> Create your own hero TEST PAGE OUIOUIOUIAZERTY </h1>
            @foreach ($heroes as $h)
                <div id="containerHero">
                    <div id="name"> Your name : {{ $h->name }}</div>
                    <div id="picture"> <img src={{ $h->picture }} alt=""></div>
                    <div id="stat"> Your main stat : {{ $h->mainStat }}</div>
                    <div id="range"> Age : {{ $h->age }}</div>
                    <div id="orientation"> Looking for : {{ $h->orientation }}</div>            
                </div>
            @endforeach
                  

                
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