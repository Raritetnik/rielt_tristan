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
        <nav class="bg-dark">
            <div class="container flex justify-between items-center text-white p-2">
                <a class="navbar-brand py-2" href="{{ url('/home') }}">
                    <img src="/" alt="{{ config('app.name', 'Tristan') }}">
                </a>
                <button type="button" class="text-white">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <ul class="flex gap-3 text-white">
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
                    <li class="py-2">
                        <span class="">(514) 444 - 4545</span>
                    </li>
                </ul>
            </div>
        </nav>
        <main class="max-w-[100%]">
            @yield('content')
        </main>
    </div>
</body>
</html>
