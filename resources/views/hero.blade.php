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
    <div class="containerHero">
    <img src="images/courier.gif" alt="Image chargement" id="gifLoading">
        <div id="wrapHero">
        <div id="containerImgName">
            
            <div id="bgHero"></div>
            <div id="bgHeroFiltre"></div>
            <img src="{{ $urlImg }}" alt="Photo héro" class="heroPhoto">   
            <div id="heroName">
                
                 <h1>  {{ $heroes->localized_name }}</h1>   
                 <div id="mainStat">
                    <h2> {{ $nameMainStat }}</h2>
                </div>              
            </div>
            
        </div>
        
         <div class="wrapInfos">
                    
            <div class="containerRoles">
                <div class="range"> {{ $heroes->attack_type }}  - </div>
                <div class="rolesRefresh"></div>
            @foreach ($heroes->roles as &$heroes->roles) 
                <div class="heroRoles"> {{ $heroes->roles }}{{$loop->last ? ' ' : '‎, '}} </div> 
             @endforeach 
            
            </div>
            <div class="containerWinStats">
                <div id="containerHealth">
                    <div class="blocHealth">santé</div>
                    <div class="blocHealth">mana</div>
                </div>
                <p class="charRoles"></p>
                <div id="containerLogoStat">
                    <div class="stat" id="mainstr">
                        <div class="logoStat"><img src="images/strength.png" alt="Force" id="imgStatstr"></div>
                        <p class="charStat" id="statstr"> {{ $heroes->base_str }}</p>
                    </div>
                    <div class="stat">
                        <div class="logoStat"><img src="images/agility.png" alt="Agilité" id="imgStatagi"></div>
                        <p class="charStat" id="statagi"> {{ $heroes->base_agi }}</p>
                    </div>
                    <div class="stat">
                        <div class="logoStat"><img src="images/intelligence.png" alt="Intelligence" id="imgStatint"></div>
                        <p class="charStat" id="statint"> {{ $heroes->base_int }}</p>
                    </div>
                </div>
            </div>
            <div id="blocWin">
                    <p> <span class="winRate">Taux de victoire -</span>  <span id="winRate" >{{ $winRate }} </span>%</p>
                    <div class="winBorder">
                        <div class="winFill" style= "width:{{ $winRate }}%"></div>
                    </div>
                </div>
            
            </div>
            <input type="button" value="refresh" class="refresh">
        </div>         
    </div>
    <div id="containerReactions">
                <div class="blocReaction"> <img src="images/cross.png" alt=""></div>
                <div class="blocReaction"><img src="images/star.png" alt=""></div>
                <div class="blocReaction"><img src="images/heart.png" alt=""></div>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>
    <!-- <script src="{{ asset('js/heroList.js') }}"></script> -->
    
</html>