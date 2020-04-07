@extends('layouts.app2')
@section('content')
        {{-- @include('partials.nav') --}}
    <div class="wrap">
        <div id="containerUser">
            <div class="wrapUser">      
                <h1> Your hero </h1>
                <div id="containerProfile">
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

                    <div id="choiceHero">
                        <a href=" {{ route('hero-custom-update') }}">
                          <input type="button" value="Create a new hero">
                        </a>
                    </div>

            </div>
        </div>       
    </div>
@endsection