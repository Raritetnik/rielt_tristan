<template>
    <section class="relative">
    <div class="absolute inset-0 h-[60vh] md:h-[80vh] lg:[100vh] z-10 bg-black">
        <img class="h-full w-full object-fit-cover opacity-60" :src="image" alt="Banner">
    </div>
    <div class="z-20 relative text-white container mx-auto h-[60vh] md:h-[80vh] lg:[100vh] flex items-center justify-center">
        <slot></slot>
    </div>
</section>
</template>

<script>
    export default {
        props: ['image'],
    }
</script>
