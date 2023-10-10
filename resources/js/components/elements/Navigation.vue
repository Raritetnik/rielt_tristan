<template>
    <ul v-if="this.active" class="lg:hidden absolute lg:relative flex flex-col lg:flex-row bg-black items-center z-50 top-[4.375rem] gap-2 lg:top-0 w-full lg:w-auto">
        <slot></slot>
    </ul>
    <ul class="hidden lg:inline-flex gap-2">
        <slot></slot>
    </ul>
    <span class="">(514) 444 - 4545</span>
    <button class="block lg:hidden relative" @click="toggle">
        X
    </button>
</template>

<script>
export default {
    data () {
    return {
        active: false
    }
    },
    methods: {
    toggle () {
        this.active = !this.active
    }
    }
}
</script>