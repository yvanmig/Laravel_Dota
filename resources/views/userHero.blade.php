@extends('layouts.app2')
@section('content')
        {{-- @include('partials.nav') --}}
    <div class="wrap">
        <div id="containerFormHero">
            <div id="containerForm">
            <h1> Your hero </h1>
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
@endsection