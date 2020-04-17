@extends('layouts.app2')
@section('content')

    <div class="wrap">
        <div id="containerFormChoose">
            <h1> Choose your difficulty</h1>
            <div id="containerSelect">
                <div id="leftArea">                
                <div id="left">
                    <a href= {{ route('form-easy') }}>
                        <div class="wrapS">
                            <h2> Easy mode</h2>
                            <p> The classic form. Simple, efficient.</p>
                            <p> Take a stroll through our beginner-friendly interface</p>
                        </div>
                    
                    </a>
                </div>
            </div>
                <div id="right">
                    <a href= {{ route('hero-custom-hard') }}>
                    <div class="wraps">
                        <h2> Hard Mode </h2>
                        <p> Experience the true adventure of creating your own hero</p>
                        <p> The intent is to provide you with a sense of pride and accomplishment for defeating this hellish form</p>
                    </div>
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
    <script src="{{ asset('js/formSelection.js') }}"></script>

@endpush