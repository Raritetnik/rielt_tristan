@extends('layouts.app')

@section('content')
<biographie image="./assets/brendan-stephens-fUHoB0mls0M-unsplash.jpg">
    <div class="flex flex-col justify-center  bg-black max-w-[70vh] p-20 h-full text-center items-center gap-3" >
        <img class="aspect-[1/1] w-[150px] rounded-full border-2 border-main  object-cover" src="./assets/Tristan_Barbeau-_web.jpg" alt="Image profile">
        <h2>Tristan Barbeau</h2>
        <p>For more than 25 years, Club Cuisine BCBG specialized in high-end kitchen and bathroom cabinetry. Club Cuisine BCBG knows how to impress their customers with personalized, custom designs. Our kitchen designers offer technical innovations and quality materials to design an interior space that suits you.</p>
        <p>With you for the duration of your project, our kitchen designers make home visits in Montreal, Laval, Montreal’s North Shore and the surrounding area.</p>
        <span class="flex">
            <a href="#"><img class="w-10 h-10" src="./assets/icons/facebook.png" alt="Facebook"></a>
            <a href="#"><img class="w-10 h-10" src="./assets/icons/instagram.png" alt="Instagram"></a>
            <a href="#"><img class="w-10 h-10" src="./assets/icons/linkedin.png" alt="Linkedin"></a>
        </span>
    </div>
</biographie>

  
  
@endsection