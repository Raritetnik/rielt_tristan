<template>
  <Section>
    <div class="flex flex-col justify-center w-full">
      <div class="flex justify-between w-full px-8 pt-20 pb-8">
        <Titre>My listing</Titre>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-h-none px-16 pb-20">
        <CardHouse v-for="house in dataHouses.liste" :one={house}></CardHouse>
      </div>
    </div>
  </Section>
</template>
<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import dataHouses from "~/assets/data/house.json";
import Titre from "~/components/elements/Titre.vue";
import CardHouse from "~/components/elements/CardHouse.vue";
</script>