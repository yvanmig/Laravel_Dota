@extends('layouts.app2')

@section('content')
<div class="wrap">
    <div id="containerFormHero">
        <div id="containerFormHard">
           

                <form action="{{ route('hero-custom-hard') }}" method="post">                                   
                    @csrf           
                    <h1> Create your own hero : Hardcore Edition</h1> 

                    <div id="containerName">
                        <input type="text" name="name" placeholder="Name" required class="form-control"  id="nameUser" maxlength="1" autocomplete="off"> 
                        <div class="containerLimit">
                            <div>
                                <div id="closeLimit"><img src="images/cancel.png" alt=""></div>
                                <h2> Vous avez atteint la limite de caractères (<span id="cptLength"> </span> max)</h2>
                                <p> Cliquer sur le bouton "+" pour en ajouter</p>
                                <div id="annoyingButtonHitBox"> 
                                    <button type="button" id="annoyingButton"> + </button> 
                                </div>                                
                            </div>                            
                        </div>

                        <div id="checkName"> Verify  </div>
                        <div id="errorName"></div>
                        
                    </div>
                    
                    <div id="containerNameValidation">
                        
                        <div id="generateName"> 
                            <button type="button" id="genName">Generate New Name </button> 
                        </div>
                        <div id="userNameValidation"></div>
                        
                    </div>
                    
                    <input type="text" name="stat" placeholder="mainStat" required class="form-control" value="Main Stat"> 
                    <input type="text" name="age" placeholder="age" required class="form-control" > 
                    <input type="text" name="orientation" placeholder="orient" required class="form-control" > 
                    <input type="text" name="picture" placeholder="pic" required class="form-control" > 
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
    <script src="{{ asset('js/verifyButton.js') }}"></script>
    
@endpush