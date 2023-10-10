<template>
<section class="bg-black py-0 lg:py-20 ">
    <div class="container flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 min-h-[80vh] lg:min-h-[50vh] text-white">
        <slot name="description">
        </slot>
        <slot name="picture">
        </slot>
    </div>
</section>
</template>

<script>
    export default {
        props: ['title'],
    }
</script>
