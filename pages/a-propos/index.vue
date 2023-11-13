<template>
  <Section
    :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'center',
      backgroundSize: '100%',
    }"
    class="flex justify-center"
  >
    <div class="max-w-[80ch] text-black text-center flex flex-col my-20">
      <img
        alt="Profile Img"
        class="self-center border-2 border-primary rounded-full translate-y-20"
        src="../../assets/images/tristan_profil.png"
        width="250"
      />
      <div class="bg-white px-14 pt-32 pb-24">
        <h2 class="text-3xl pb-5 text-black">Tristan Barbeau</h2>
        <p class="text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
          veritatis! Ex rem itaque voluptate qui accusamus minima eligendi,
          accusantium voluptatibus doloremque dolorum quas quis temporibus,
          deleniti ipsa distinctio similique aut amet iusto vel ab quaerat
          sapiente? A voluptatum, dolor, ipsum architecto numquam totam iure
          delectus facilis inventore sit odit assumenda quibusdam laudantium
          saepe! Autem, itaque, inventore quae odio sapiente rerum consequuntur
          tempora incidunt minima pariatur facere eum nam, iusto tenetur.
          Pariatur consequatur aperiam perspiciatis blanditiis impedit inventore
          mollitia repellat sapiente.
        </p>
      </div>
    </div>
  </Section>
</template>

<script setup>
import Section from "~/components/elements/Section.vue";
import bgImage from "assets/images/dillon-kydd-XGvwt544g8k-unsplash.jpg";
</script>