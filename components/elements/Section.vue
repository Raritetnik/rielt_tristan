<script setup>
let sectionStyle;
let insideSectionStyle;
</script>

<template>
  <section class="text-white bg-black">
    <div class="mx-auto
                flex flex-col px-4 max-w-[380px] min-h-[300px]
                md:px-2 md:max-w-[820px] md:min-h-[600px]
                lg:flex-row lg:px-0 lg:max-w-[1920px] lg:min-h-[500px]" :style="sectionStyle" >
      <slot></slot>
    </div>
  </section>
</template>

<style>

// Mobile
@media screen and (min-width: 380px) {

}

// Tablet
@media screen and (min-width: 768px) {

}

// Desktop
@media screen and (min-width: 1536px) {

}
</style>