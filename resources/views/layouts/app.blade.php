<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/js/app.js', 'resources/css/app.css'])
</head>
<body>
    <div id="app">
        <nav class="bg-black text-xl border-b-2 border-main">
            <div class="container flex justify-between items-center text-white p-2 relative">
                <a class="navbar-brand py-2 font-title text-3xl text-main" href="{{ url('/home') }}">
                    <img src="/" alt="{{ config('app.name', 'Tristan') }}">
                </a>
                <navigation>
                        @if (Route::has('home'))
                            <li class="py-2">
                                <a class="" href="{{ route('home') }}">{{ __('Accueil') }}</a>
                            </li>
                        @endif
                        @if (Route::has('about'))
                            <li class="py-2">
                                <a class="" href="{{ route('about') }}">{{ __('À propos') }}</a>
                            </li>
                        @endif
                        @if (Route::has('contact'))
                            <li class="py-2">
                                <a class="" href="{{ route('contact') }}">{{ __('Contact') }}</a>
                            </li>
                        @endif 
                </navigation>
            </div>
        </nav>
        <main class="max-w-[100%] bg-dark">
            @yield('content')
        </main>
    </div>
</body>
</html>
