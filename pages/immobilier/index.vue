<template>
  <Section>
    <div class="flex flex-col justify-center w-full">
      <div class="flex justify-between w-full px-8 pt-20 pb-8">
        <h2 class="self-start text-3xl font-semibold border-s-2 border-primary ps-8">My listing</h2>
        <Button>Afficher plus</Button>
      </div>
      <div class="grid grid-cols-4 gap-8 max-h-none px-16 pb-20">
        <CardHouse v-for="house in dataHouses.liste" :one={house}></CardHouse>
      </div>
    </div>
  </Section>
</template>
<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import CardHouse from "~/components/elements/CardHouse.vue";
import dataHouses from "~/assets/data/house.json";
import Button from "~/components/elements/Button.vue";
</script>