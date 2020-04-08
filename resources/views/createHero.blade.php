
@extends('layouts.app2')
@section('content')
    <div class="wrap">
        <div id="containerFormHero">
            <div id="containerForm">
               

                    <form action="{{ route('hero-custom-create') }}" method="post">    
                                    
                    @csrf              
                    <h1> Create your own hero</h1>  
                    <input type="text" name="name" placeholder="Your name" required class="form-control"> 
                    <input type="text" name="stat" placeholder="Your main stat (strength, agility or intelligence)" class="form-control" required>  
                    <input type="text" name="age" placeholder="Your age" class="form-control" required> 
                    <input type="text" name="orientation" placeholder="What you're looking for (humanoid, insect, orc..)" class="form-control" required>  
                    
                    <h2> Choose your profile picture </h2>

                    <div id="containerPhotos">
                        @foreach ($urlImg as $urlImg)
                            <label>
                            <input type="radio" name="picture" value= {{ $urlImg }} checked>
                            <img src={{ $urlImg }}>
                            </label>
                        @endforeach
                    </div>

                    <button> Create </button>
                    </form> 
            </div> 
        </div>      
    </div>
@endsection

