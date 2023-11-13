<template>
  <!-- Banniere -->
  <Section>
    <div class="grid grid-cols-2 w-full relative">
      <div class="flex flex-col justify-center items-center w-full">
        <span class="flex flex-col gap-2">
          <h1 class="text-3xl">Unreal Properties</h1>
          <h3 class="text-2xl">Courtier immobilier résidentiel</h3>
          <Button class="self-end">Contactez-moi</Button>
        </span>
      </div>
      <div class="w-full">
        <img
          alt="Banniere maison image"
          class="h-[700px] w-full object-cover"
          src="~/assets/images/nataliia-kvitovska-2HKJACExHeo-unsplash.jpg"
        />
      </div>
      <img
        alt="Mini image"
        class="absolute w-[250px] h-[250px] bottom-0 left-0 object-cover"
        src="~/assets/images/bailey-anselme-Bkp3gLygyeA-unsplash.jpg"
      />
    </div>
  </Section>

  <!-- A propos -->
  <Section>
    <div class="w-full">
      <img
        alt="Banniere maison image"
        class="min-h-[700px] w-full object-cover"
        src="~/assets/images/5.png"
      />
    </div>
    <div
      class="w-full flex flex-col justify-center items-center text-white p-20"
    >
      <div class="flex flex-col gap-3 border-s-2 border-[#C4971C] ps-8">
        <h1 class="text-3xl font-semibold uppercase">À propos de moi</h1>
        <p class="max-w-[40ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, commodi?
          Laborum numquam soluta in harum inventore quas consequuntur illum.
          Quidem aperiam porro nostrum repellendus! Corporis perferendis atque
          distinctio doloribus qui.
        </p>
      </div>
    </div>
  </Section>

  <!-- Profile -->
  <Section
    :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'center',
      backgroundSize: '100%',
    }"
  >
    <div class="flex justify-center w-full h-full items-center py-[120px]">
      <div class="flex flex-col items-center text-white">
        <img
          alt="Tristan image profile"
          class="w-52 aspect-square object-cover border-2 border-black rounded-full"
          src="~/assets/images/Tristan_Barbeau-_web.png"
        />
        <h2 class="text-[8rem] leading-none m-0">+</h2>
      </div>
      <div class="flex gap-4">
        <h2 class="text-[8rem] decor-text text-white">
          Tristan <br />
          Barbeau
        </h2>
      </div>
    </div>
  </Section>

  <!-- Contact -->
  <Section class="py-[60px]">
    <div class="w-full flex flex-col items-center text-white">
      <div class="p-8 flex flex-col gap-4">
        <Titre>Contactez-moi</Titre>
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
    <div class="w-full p-8 flex justify-center">
      <img
        alt="Banniere maison image"
        class="h-[500px] aspect-square object-cover border-[#C4971C] border-2"
        src="~/assets/images/les-argonautes-89xlwcDKWEw-unsplash.jpg"
      />
    </div>
  </Section>
</template>

<script setup>
import Section from "~/components/elements/Section.vue";
import Button from "~/components/elements/Button.vue";
import bgImage from "~/assets/images/Maison_de_bord.png";
import Titre from "~/components/elements/Titre.vue";
</script>

<style>
input[type="text"],
textarea,
input[type="number"],
select {
  padding: 10px;
  color: black;
}

:root {
  --form-control-color: white;
  --form-control-disabled: #959495;
  --form-background: white;
}

.formulaire input[type="text"] {
  padding: 5px 10px;
  font-size: 18px;
}

.form-control {
  font-size: 1.3rem;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

input[type="checkbox"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: var(--form-background);
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 1em;
  height: 1em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

.calculatrice input[type="text"] {
  min-width: auto;
}

.calcApercu {
  font-size: 18px;
}

.calcApercu tr > * {
  border: 1px solid var(--color_primary);
  padding: 10px 15px;
}

.listeCalc ul {
  list-style: inside;
}

.listeCalc h3:not(:first-child) {
  padding-top: 40px;
}

.listeCalc h3 {
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
}

#pretHypot:after {
  content: "$";
  color: white;
  background-color: var(--color_primary);
  width: 40px;
  height: 40px;
}
</style>