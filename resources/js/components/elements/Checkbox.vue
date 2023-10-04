<template>
    <label :for="name" class="flex items-center"><input class="me-1" type="checkbox" :class="classes" :name="name" :value="title" :id="name" required>{{ title }}</label>
</template>

<script>
export default {
    props: ['title', 'name', "classes"],
}
</script>
<style scoped>
[type='checkbox'] {
    margin: 0;
    padding: 0;
    height: 20px;
    width: 20px;
}
</style>