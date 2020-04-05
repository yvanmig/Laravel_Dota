{{-- <!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/_global.css') }}">
        <link rel="stylesheet" href="{{ asset('css/_index.css') }}"> 

    </head>
    <body> --}}
        {{-- @include('partials.nav') --}}
        
        
             {{-- @extends('layouts.header')
             @section('text','coucou') --}}
             
            @extends('layouts.app2')
             
            @section('content')
            <div class="content">        
                <div id="bg"></div>                      
                <div class="wrap">                     
                    <div id="mainContent">
                        <h2> Ready to match with a Hero ?</h2>
                       @if(Auth::check()) <h2> T'es connecté c'est cool</h2>
                       @else <h2> T'es pas connecté c'est ringard</h2>
                       @endif
                  {{-- @section('title', 'Page Title') --}}

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
            @endsection
        </div>
    {{-- </body>
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}"> </script>
</html> --}}
