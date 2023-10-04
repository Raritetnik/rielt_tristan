<template>
    <h2 class="title text-white pb-2 uppercase text-xl">
    <slot></slot></h2>
</template>

<script>
export default {
    props: ['title'],
}
</script>
<style scoped>
.title::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -10px;
    height: 30px;
    width: 3px;
    background-color: #FFDE82;

}
.title {
    position: relative;
}
</style>