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
    dqz
        <div class="coucou">
            <form action=" {{ route('cars-insert') }} " method="post">
                @csrf
                <input type="text" name="brand" placeholder="Marque">
                <input type="text" name="model" placeholder="Modèle">
                <input type="text" name="color" placeholder="Couleur">
                <input type="text" name="price" placeholder="Prix">
                <input type="text" name="speed" placeholder="Vitesse">
                <input type="text" name="year"  placeholder="Année">
                <button> Ajouter la voiture</button>
                @foreach($cars as $car)
                    <div class="car">
                        <p>{{ $car->brand }}</p>
                        <p>{{ $car->model }}</p>
                        <p>{{ $car->color }}</p>
                        <p>{{ $car->price }}</p>
                        <p>{{ $car->speed }}</p>
                    </div>
                @endforeach

            </form>
        </div>
    </body>
    <script 
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous">
    </script>
    <!-- <script src="{{ asset('js/app.js') }}"> </script> -->
    <script src="{{ asset('js/pageLoad.js') }}"></script>
    <script src="{{ asset('js/heroDetails.js') }}"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script> -->

    
</html>