<template>
    <div class="container">
        <h1>Hello World!</h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
