@extends('layouts.app')

@section('content')
<!-------------------------------------------------------->

<banner-block image="./assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg">
    <div class="text-center">
        <h1 class="text-6xl">Tristan Barbeau</h1>
        <h2 class="text-xl">Courtier Immobilier Résidentiel, Commercial</h2>
        <p class="text-main text-lg">514-444-4444</p>
    </div>
</banner-block>

<!-------------------------------------------------------->

<section-block>
    <template v-slot:description>
        <div class="p-20 h-auto flex flex-col justify-center">
            <title-section>À PROPOS DE MOI</title-section>
            <p>For more than 25 years, Club Cuisine BCBG specialized in high-end kitchen and bathroom cabinetry. Club Cuisine BCBG knows how to impress their customers with personalized, custom designs. Our kitchen designers offer technical innovations and quality materials to design an interior space that suits you. </p>
        </div>
    </template>
    <template v-slot:picture>
        <img class="object-cover h-[600px] w-full lg:h-[600px]" src="./assets/brett-jordan-iysaVqBILmw-unsplash.jpg" alt="Side image">
    </template>
</section-block>

<!-------------------------------------------------------->

<bar-block image="./assets/devon-mackay-Sk72X-7Y3qU-unsplash.jpg">
    <div class="text-center flex items-center">
        <img class="w-28 h-28 rounded-full border-2 border-main  object-cover" src="./assets/Tristan_Barbeau-_web.jpg" alt="House with flowers">
        <h1 class="text-7xl">Tristan </br> Barbeau</h1>
    </div>
</bar-block>

<!-------------------------------------------------------->

<contact-form>
    <div class="h-auto flex flex-col justify-center">
        <form class="form-horizontal p-20" method="POST" action="/contact">
            <title-section>Contactez-nous</title-section>
            {{ csrf_field() }}  
            <div class="form-group grid grid-cols-2 gap-4 py-1">
                <div>
                    <label for="first_name">Prénom: </label>
                    <input type="text" class="form-control" id="first_name" placeholder="Prénom" name="first_name" required>
                </div>
                <div>
                    <label for="last_name">Nom: </label>
                    <input type="text" class="form-control" id="last_name" placeholder="Nom" name="last_name" required>
                </div>
            </div>
            <div class="form-group py-1">
                <label for="email">Courriel: </label>
                <input type="text" class="form-control" id="email" placeholder="Courriel" name="email" required>
            </div>
            <div class="form-group py-1">
                <label for="dispos">Disponibilités: </label>
                <div class="flex gap-2">
                    <checkbox title='Matin' name='dispos-matin' classes='form-check-input'></checkbox>
                    <checkbox title='Après-midi' name='dispos-midi' classes='form-check-input'></checkbox>
                    <checkbox title='Soirée' name='dispos-soir' classes='form-check-input'></checkbox>
                    <checkbox title='Fin de semaine' name='dispos-finsemaine' classes='form-check-input'></checkbox>
                </div>
            </div>
            <div class="form-group py-1">
                <label for="message">Message: </label>
                <textarea type="text" class="form-control h-[150px]" id="message" placeholder="Enter your message here" name="message" required> </textarea>
            </div>
            <div class="form-group py-1">
                <button type="submit" class="btn bg-main hover:border-main hover:text-main w-full" value="Send">Envoyer</button>
            </div>
        </form>
    </div>
    <template v-slot:picture>
        <img class="object-cover h-[500px] lg:h-[600px] w-full" src="./assets/jason-briscoe-AQl-J19ocWE-unsplash.jpg" alt="Side image">
    </template>
</contact-form>


@endsection
