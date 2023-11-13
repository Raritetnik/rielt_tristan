<template>
    <header class="w-full py-2 z-[2] px-1 md:px-2 lg:px-4 text-white border-b-2 border-primary">
      <div class="mx-auto flex justify-between max-w-[1920px] items-center py-2" >
        <h2 class="decor-text text-5xl inline-flex" >
          <img src="~/assets/images/realtor-96.png" class="w-12 h-12 aspect-auto" alt="Realtor icon" />
          Tristan Barbeau
        </h2>
        <!-- Menu Bar -->
        <Menu></Menu>
        <h2 class="bg-white rounded-full py-2 px-6 me-4 border-black border-2 inline-block text-black text-xl">514-555-2525</h2>
      </div>
    </header>
</template>
<script setup>

import Menu from "~/layouts/Menu.vue";
</script>