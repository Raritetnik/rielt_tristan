<template>
  <Navigation></Navigation>

    <!-- Content Section -->
    <slot></slot>


  <Footer></Footer>
</template>
<script setup lang="ts">
import Navigation from "~/layouts/Navigation.vue";
import Menu from "~/layouts/Menu.vue";
import Footer from "~/layouts/Footer.vue";
</script>