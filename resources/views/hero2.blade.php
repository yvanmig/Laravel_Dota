@extends('layouts.app2')

@section('content')
        <div id="blocLoading">
             <img src="images/courier.gif" alt="Image chargement" id="gifLoading">
             <h1> We are searching for your future lover ;) </h1>
        </div>
    
    <div class="containerHero">
    
        <div id="wrapHero">
        <div id="containerImgName">
            
            <div id="bgHero"></div>
            <div id="bgHeroFiltre"></div>
            <img src="{{ $urlImg }}" alt="Photo héro" class="heroPhoto">   
            <div id="heroName">
                
                 <h2>  {{ $heroes->localized_name }}</h2>   
                 <div id="mainStat">
                    <h3> {{ $nameMainStat }}</h3>
                </div>              
            </div>
            
        </div>
        
         <div class="wrapInfos">
                    
            
            <div class="containerWinStats">
                <div class="containerRoles">
                    <div class="range"> {{ $heroes->attack_type }}  - </div>
                    <div class="rolesRefresh"></div>
                    <div class="heroRoles">  @foreach ($heroes->roles as &$heroes->roles)
                    {{ $heroes->roles }}{{$loop->last ? ' ' : '‎, '}}   
                    @endforeach </div> 
                     
               
                
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
                    <p> <span class="winRate">Win rate -</span>  <span id="winRate" >{{ $winRate }} </span>%</p>
                    <div class="winBorder">
                        <div class="winFill" style= "width:{{ $winRate }}%"></div>
                    </div>
                </div>
            
            </div>
        </div>         
    </div>
    <div id="containerReactions">

        <div class="blocReaction" id="dislike" data-id="dislikes">
             <img src="images/cross.png" alt="Dislike" class="reactionImg">
            </div>
        <div class="blocReaction" id="superLike" data-id="super_Likes"><img src="images/star.png" alt="Super like" class="reactionImg"></div>
        <div class="blocReaction" id="like" data-id="likes"><img src="images/heart.png" alt="Like" class="reactionImg" id="allo"></div>

    </div>

@endsection
@push('scripts')
    <script 
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous">
    </script>
    <script src="{{ asset('js/heroDetails.js') }}"></script>
    <script src="{{ asset('js/gifLoading.js') }}"></script>
    <script src="{{ asset('js/buttonAnimation.js') }}"></script>
    <script src="{{ asset('js/dataUpdate.js') }}"></script>
@endpush

    
