<template>
  <Section
    :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'center',
      backgroundSize: '100%',
    }"
  >
  </Section>
  <Section class="py-[60px]">
    <div class="w-full flex flex-col items-center text-white">
      <div class="p-8 flex flex-col gap-4">
        <Titre>Vous voulez plus d'information?</Titre>
        <form action="" class="formulaire flex flex-col w-full gap-5">
          <div class="flex gap-6">
            <span class="flex flex-col">
              <label for="prenom"
                >Prénom: <br />
                <input id="prenom" name="prenom" type="text"
              /></label>
            </span>
            <span class="flex flex-col">
              <label for="nom"
                >Nom: <br />
                <input id="nom" name="nom" type="text"
              /></label>
            </span>
          </div>
          <div class="flex gap-6">
            <span class="flex flex-col">
              <label for="prenom"
                >Courriel: <br />
                <input id="prenom" name="prenom" type="text"
              /></label>
            </span>
            <span class="flex flex-col">
              <label for="telephone"
                >Téléphone: <br />
                <input id="telephone" name="telephone" type="text"
              /></label>
            </span>
          </div>
          <div class="flex gap-6">
            <span class="flex flex-row gap-4">
              <label class="form-control" for="f_matin"
                ><input id="f_matin" name="matin" type="checkbox" />
                Matin</label
              >
              <label class="form-control" for="f_midi"
                ><input id="f_midi" name="midi" type="checkbox" /> Après
                midi</label
              >
              <label class="form-control" for="f_soir"
                ><input id="f_soir" name="soir" type="checkbox" /> Soir</label
              >
              <label class="form-control" for="f_finSemaine"
                ><input id="f_finSemaine" name="finSemaine" type="checkbox" />
                Fin de semaine</label
              >
            </span>
          </div>
          <label for="message"
            >Message: <br />
            <textarea
              id="message"
              class="w-full min-h-[120px]"
              name="message"
            />
          </label>
          <Button class="self-start" type="submit">Envoyer message</Button>
        </form>
      </div>
    </div>
    <div class="w-full p-8 flex flex-col gap-4 justify-center items-center">
      <Titre>Contactez-moi</Titre>
      <span class="flex items-center"
        ><img
          alt="phone"
          class="pe-2"
          src="../../assets/images/phone_icon.png"
          width="40"
        />514-142-4254</span
      >
      <span class="flex items-center"
        ><img
          alt="email"
          class="pe-2"
          src="../../assets/images/mail_icon.png"
          width="40"
        />tristanbarbeau@gmail.com</span
      >
      <img
        alt=""
        class="w-[500px] py-6"
        src="../../assets/images/house-banner.jpg"
      />
    </div>
  </Section>
</template>
<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import bgImage from "assets/images/Maison_de_bord.png";
import Titre from "~/components/elements/Titre.vue";
import Button from "~/components/elements/Button.vue";
</script>