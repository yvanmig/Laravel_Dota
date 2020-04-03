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
        <div id="bg"></div>
            <nav id="title">
                <div id="navLeft">
                    <a href="{{ route('welcome') }}"> <h1> Dota Tinder </h1> </a>
                    <a href="{{ route('hero-create') }}"> Create a hero</a>
                    <a href="{{ route('hero') }}"> Match</a>
                </div>
                <div id="navRight">
                    @if (Route::has('login'))
                    <div class="topLinks">
                        @auth
                            <a href="{{ url('/home') }}">My profile</a>
                        @else
                            <a href="{{ route('login') }}">Login</a>
    
                            @if (Route::has('register'))
                                <a href="{{ route('register') }}">Register</a>
                            @endif
                        @endauth
                    </div>
                @endif
                </div>                
            </nav>
            <div class="content">
                
                
                <div class="wrap">  
                    
                    <div id="mainContent">
                        <h2> Ready to match with a Hero ?</h2>
                    
                    <div id="containerMode">
                        
                        <div class="blocMode">  
                            <a href=" {{ route('hero-create') }}">                              
                            <div class="wrapMode">
                                <h3> Create your own Hero </h3>
                                <p> Make a profile and our futuristic AI will start looking for your perfect soul mate<span id="maybeNot">*</span></p>
                                <!-- *There's actually no AI or soul mate, it's all a lie. Sorry -->
                                
                            </div>       
                        </a>                         
                        </div>                        
                        <div class="blocMode"> 
                            <a href="{{ route('hero') }}">
                            <div class="wrapMode">
                            <h3> Match with another Hero</h3>
                            <p> Browse our selection of beautiful individuals and pick the ones you like</p>
                            </div>
                            </a>
                            
                        </div>
                    </div>
                    <div id="titleReview"> <h2> What our visitors say about us </h2></div>
                    <div id="containerReview">       
                        
                        @foreach ($review as $r)
                            <div class="blocReview">
                                <div class="contentReview">" {{ $r->content }} "</div>
                                <div class="authorReview">- {{ $r->author }}</div>
                            </div>
                        @endforeach
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
</html>
