@extends('layouts.app2')
@section('content')
        {{-- @include('partials.nav') --}}
    <div class="wrap">

        <div id="containerUser">

            <div class="wrapUser">      
                
                <div id="containerProfile">

                    <div class="blocUser">
                        <h2> Your hero </h2>
                            <div id="name"> Your name : {{ $heroes->name }}</div>
                            <div id="picture"> <img src={{ $heroes->picture }} alt=""></div>
                            <div id="stat"> Your main stat : {{ $heroes->mainStat }}</div>
                            <div id="range"> Age : {{ $heroes->age }}</div>
                            <div id="orientation"> Looking for : {{ $heroes->orientation }}</div> 
                            
                            @foreach ($name as $name)
                            {{ $name }}
                            @endforeach
                            
                    </div>
                   
                    <div class="blocUser">
                        <h2> Your profile</h2>
                        <div id="uName"> {{ $user->name}}</div>
                        <div id="uTime"> <p> Member since : {{ $timeParsed }} </p></div>
                        <div id="uDis"> <p> Number of dislikes : {{ $likes->dislikes}}  </p></div>
                        <div id="uLik"> <p> Number of likes : {{ $likes->likes}}  </p></div>
                        <div id="uSup"> <p> Number of super likes : {{ $likes->super_Likes}}  </p></div>                        
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