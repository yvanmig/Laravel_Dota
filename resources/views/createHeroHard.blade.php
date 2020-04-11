@extends('layouts.app2')

@section('content')
<div class="wrap">
    <div id="containerFormHero">
        <div id="containerFormHard">
           

                <form action="{{ route('hero-custom-create') }}" method="post">                                   
                    @csrf           
                    <h1> Create your own hero</h1> 
                    <input type="text" name="name" placeholder="Your name" required class="form-control"> 
                    <select id="let1" name="let1">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                      </select>
                      <select id="let2" name="let2">
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                      </select>
                    <div id="containerCanvas">
                        <canvas width="400" height="400"></canvas>
                        <div class="inputElement">
                            <input type="radio" id="huey" name="drone" value="huey">
                            <label for="huey">Huey</label>
                            <input type="radio" id="hueyd" name="drone" value="hueyd">
                            <label for="hueyd">Hueyd</label>
                        </div>
                        
                    </div>
                      
                    <button> Create </button>
                </form> 
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
    <script src="{{ asset('js/formHard.js') }}"></script>
    
@endpush