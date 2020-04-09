@extends('layouts.app2')
@section('content')
        {{-- @include('partials.nav') --}}
    <div class="wrap">
        <div id="containerUser">
            <div class="wrapUser">      
                
                <div id="containerProfile">
                    <div id="containerHero">
                        <h2> Your hero </h2>

                        <div id="profileLeft">
                            <div id="name"> Your name : {{ $heroes->name }}</div>
                            <div id="picture"> <img src={{ $heroes->picture }} alt=""></div>
                        </div>
                        <div id="profileRight">
                            <div id="stat"> Your main stat : {{ $heroes->mainStat }}</div>
                            <div id="range"> Age : {{ $heroes->age }}</div>
                            <div id="orientation"> Looking for : {{ $heroes->orientation }}</div> 
                        </div>

                    </div>
                   
                    <div id="containerUser">
                        <h2> Your profile</h2>
                        {{ $user->name}}
                        <p> Member since : {{ $timeParsed }} </p>
                        <p> Number of dislikes : {{ $likes->dislikes}}  </p>
                        <p> Number of likes : {{ $likes->likes}}  </p>
                        <p> Number of super likes : {{ $likes->super_Likes}}  </p>
                        
                    </div>
                   
                </div>

                    <div id="choiceHero">
                        <a href=" {{ route('hero-custom-update') }}">
                          <input type="button" value="Create a new hero">
                        </a>
                    </div>

            </div>
        </div>       
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
@endpush