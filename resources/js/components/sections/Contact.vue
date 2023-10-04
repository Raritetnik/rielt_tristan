<template>
    <section class="bg-black py-0">
        <div class="container flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 text-white">
            <slot>
            </slot>
            <slot name="picture">
            </slot>
        </div>
    </section>
</template>

<script>
import Title from '../elements/Title.vue';
    export default {
    props: ['title'],
    components: { Title }
}
</script>
    