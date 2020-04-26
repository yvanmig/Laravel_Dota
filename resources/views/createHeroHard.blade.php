@extends('layouts.app2')

@section('content')
<div class="wrap">
    <div id="containerFormHero">
        <div id="containerFormHard">
           

                <form action="{{ route('hero-custom-hard') }}" method="post">                                   
                    @csrf           
                    <h1> Create your own hero : Hardcore Edition</h1> 

                    <div id="containerName">
                        <input type="text" name="nameUser" placeholder="Name" required class="form-control"  id="nameUser" maxlength="2" autocomplete="off"> 
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
                        <div id="checkName"> <img src="images/tick.png" alt=""></div>
                    </div>
                    
                    <div id="containerStat">
                        <div id="buttonStat"> 
                            <p> Choose your stat <p>
                                <img src="images/down-arrow.png" alt="">
                        </div>

                        <div id="menuStat">
                            <label>
                                <div class="labelFill"></div>
                                <input type="radio" name="stat" value="Agility" onclick="return false;" id="agi">
                                <p>Agility</p>                                 
                            </label>
                            <label>
                                <div class="labelFill"></div>
                                <input type="radio" name="stat" value="Strength" onclick="return false;">
                                <p>Strength</p>
                            </label>
                            <label>
                                <div class="labelFill"></div>
                                <input type="radio" name="stat" value="Intelligence" onclick="return false;">
                                <p>Intelligence</p>
                            </label>
                        </div>                        
                    </div>                    
 
                    <div id="buttonAge"> 
                        <p> Choose your age <p>
                            <img src="images/down-arrow.png" alt="">
                    </div> 
                    <div id="hardSelect">  
                                            
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
    <script src="{{ asset('js/statMenu.js') }}"></script>
    
@endpush