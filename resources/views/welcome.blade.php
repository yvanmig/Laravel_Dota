<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/index.css') }}"> 

    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="wrap">               
                    <div id="title">
                        <h1> Dota Tinder </h1>
                        <h2> Ready to match with a Hero ?</h2>
                    </div>
                    <div id="containerMode">
                    <div class="blocMode">
                        <div class="wrapMode">
                            <h3> Create your own Hero </h3>
                             <p> Make a profile and our futuristic AI will start looking for your perfect soul mate<span id="maybeNot">*</span></p>
                             <form action="hero-create" method="GET">
                             @csrf
                             <input type="submit" value="Créer votre héro">
                    </form>
                        </div>
                         
                    </div>
                    <div class="blocMode"> 
                        <div class="wrapMode">
                          <h3> Match with another Hero</h3>
                          <p> Browse our selection of beautiful individuals and pick the ones you like</p>
                          <form action="hero" method="GET">
                           @csrf
                           <input type="submit" value="hero" name="test">
                    </form>
                        </div>
                        
                    </div>
                    </div>
                    <!-- <form action="hero" method="GET">
                        @csrf
                        <input type="submit" value="hero" name="test">
                    </form>
                    <form action="hero-create" method="GET">

                        @csrf
                        <input type="text" name="name"> </input>
                        <input type="submit" value="Créer votre héro">
                    </form> -->
                    <!-- <form action="cars" method="GET">

                        @csrf
                        <input type="text" name="name"> </input>
                        <input type="submit" value="cars">
                    </form> -->
                    <div id="titleReview"> <h2> What our visitor say about us </h2></div>
                    <div id="containerReview">                    
                        <div class="blocReview">
                            <div class="contentReview">"Who made this ? It doesn't even work !"</div>
                            <div class="authorReview">- Angry customer</div>
                        </div>
                        <div class="blocReview">
                            <div class="contentReview">"Who made this ? It doesn't even work !"</div>
                            <div class="authorReview">- Angry customer</div>
                        </div>
                        <div class="blocReview">
                            <div class="contentReview">"Who made this ? It doesn't even work !"</div>
                            <div class="authorReview">- Angry customer</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </body>
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}"> </script>
    <script src="script/mustache.js"></script>
    <script src="script/mustache.min.js"></script>
</html>
