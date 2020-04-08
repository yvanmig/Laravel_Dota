@extends('layouts.app2')
    
@section('content')
    <div class="content">        
        <div id="bg"></div>                      
        <div class="wrap">                     
            <div id="mainContent">
                <h2> Ready to match with a Hero ?</h2>

            <div id="containerMode">
                
                <div class="blocMode">  
                    <a href=" {{ route('hero-custom') }}">                              
                    <div class="wrapMode">
                        <h3> Create your own Hero </h3>
                        <p> Make a profile and our futuristic AI will start looking for your perfect soul mate<span id="maybeNot">*</span></p>
                        <!-- *There's actually no AI or soul mate, it's all a lie. Sorry -->
                        
                    </div>       
                </a>                         
                </div>                        
                <div class="blocMode"> 
                    <a href="{{ route('hero') }}">
                    <div class="wrapMode">
                    <h3> Match with another Hero</h3>
                    <p> Browse our selection of beautiful individuals and pick the ones you like</p>
                    </div>
                    </a>
                    
                </div>
            </div>
            <div id="titleReview"> <h2> What our visitors say about us </h2></div>
            <div id="containerReview">       
                
                @foreach ($review as $r)
                    <div class="blocReview">
                        <div class="contentReview">" {{ $r->content }} "</div>
                        <div class="authorReview">- {{ $r->author }}</div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    </div>
@endsection

