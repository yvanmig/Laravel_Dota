<nav id="title">
    <div id="navLeft">
        <a href="{{ route('welcome') }}"> <h1> Dota Tinder </h1> </a>
        <a href="{{ route('hero-custom') }}"> Your hero</a>
        <a href="{{ route('hero') }}"> Match</a>
    </div>
    <div id="navRight">
        @if (Route::has('login'))
        <div class="topLinks">
            @auth
                <a href="{{ url('/home') }}">My profile</a>
            @else
                <a href="{{ route('login') }}">Login</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}">Register</a>
                @endif
            @endauth
        </div>
    @endif
    </div>                
</nav>