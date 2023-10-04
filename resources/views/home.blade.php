@extends('layouts.app')

@section('content')
<banner-block image="./assets/house-banner.jpg">
    <div class="text-center">
        <h1 class="text-5xl">Tristan Barbeau</h1>
        <h2 class="text-xl">Courtier Immobilier Résidentiel, Commercial</h2>
        <p class="text-main">514-444-4444</p>
    </div>
</banner-block>
<section-block>
    <template v-slot:description>
        <!-- content for the header slot -->
    </template>
    <template v-slot:picture>
        <!-- content for the header slot -->
    </template>
</section-block>
@endsection
