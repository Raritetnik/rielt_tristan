<template>
<section class="bg-dark">
    <div class="container flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 h-[60vh] md:h-[50vh] text-white">
        <slot name="description">
            <div class="py-20 h-auto flex flex-col justify-center">
                <h2 class="pb-2 text-xl">À PROPOS DE MOI</h2>
                <p>For more than 25 years, Club Cuisine BCBG specialized in high-end kitchen and bathroom cabinetry. Club Cuisine BCBG knows how to impress their customers with personalized, custom designs. Our kitchen designers offer technical innovations and quality materials to design an interior space that suits you. </p>
            </div>
        </slot>
        <slot name="picture">
            <div class="h-auto">
            <img class="object-cover h-full" src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Houses image">
            </div>
        </slot>
    </div>
</section>
</template>

<script>
    export default {
        props: ['title'],
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
