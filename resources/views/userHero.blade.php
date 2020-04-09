@extends('layouts.app2')
@section('content')
        {{-- @include('partials.nav') --}}
    <div class="wrap">
        <div id="containerUser">
            <div class="wrapUser">      
                
                <div id="containerProfile">
                    <div id="containerHero">
                        <h2> Your hero </h2>
                        @foreach ($heroes as $h)
                        <div id="profileLeft">
                            <div id="name"> Your name : {{ $h->name }}</div>
                            <div id="picture"> <img src={{ $h->picture }} alt=""></div>
                        </div>
                        <div id="profileRight">
                            <div id="stat"> Your main stat : {{ $h->mainStat }}</div>
                            <div id="range"> Age : {{ $h->age }}</div>
                            <div id="orientation"> Looking for : {{ $h->orientation }}</div> 
                        </div>
                      @endforeach
                    </div>
                   
                    <div id="containerUser">
                        <h2> Your profile</h2>
                        @foreach ($user as $user)
                            
                        @endforeach
                        {{ $user->name}}
                        <p> Member since : {{ $timeParsed }} </p>
                        <p>  </p>
                        
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