<template>
  <Section class="flex justify-center">
    <form
        class="border-2 border-primary my-20 w-full lg:max-w-[1540px] flex flex-col"
    >
      <div
          class="px-20 pb-10 pt-20 flex flex-col lg:grid lg:grid-cols-2 gap-20 calculatrice"
      >
        <div class="text-white flex flex-col p-2 gap-4 w-full">
          <h2
              class="uppercase self-start text-3xl font-semibold border-s-2 border-primary ps-8"
          >
            Versement régulier
          </h2>
          <span class="flex flex-col w-full"
          ><label for="pretHypot">Montant du prêt hypothécaire:</label>
            <input
                id="pretHypot"
                v-model="pretHypothec"
                class="w-full"
                max="{1000000}"
                min="{10000}"
                name="pretHypot"
                type="number"
            /></span>

          <div class="flex gap-2 items-end">
            <span class="flex flex-col w-[calc(50%-.25rem)]"
            ><label for="tauxInteret">Taux d'intéret</label>
              <input
                  id="tauxInteret"
                  v-model="tauxInteret"
                  max="{30}"
                  min="{0.01}"
                  name="tauxInteret"
                  step="{0.01}"
                  type="number"
              /></span>

            <span class="flex flex-col w-[calc(50%-.25rem)]"
            ><label for="amortissement">Période d'amortissement:</label>
              <span class="grid grid-cols-2 w-full gap-6">
                <select
                    id="ammortisAnnees"
                    v-model="ammortisAnnees"
                    class="text-black"
                    name="ammortisAnnees"
                >
                  <option
                      v-for="annee in annees"
                      :value="annee"
                      class="text-black"
                  >
                    {{ annee }} ans
                  </option>
                </select>
                <select
                    id="ammortisMois"
                    v-model="ammortisMois"
                    class="text-black"
                    name="ammortisMois"
                >
                  <option v-for="m in mois" :value="m" class="text-black">
                    {{ m }} mois
                  </option>
                </select>
              </span>
            </span>
          </div>
          <div class="flex gap-2 items-end">
            <span class="flex flex-col w-[calc(50%-.25rem)]"
            ><label for="freqVersement">Fréquence des versements:</label>
              <select
                  id="freqVersement"
                  v-model="freqVersement"
                  class="text-black"
                  name="freqVersement"
              >
                <option class="text-black" value="mois">Par mois</option>
                <option class="text-black" value="demi-semaine">
                  Par semaine
                </option>
                <option class="text-black" value="bi-semaine">
                  Aux 2 semaine
                </option>
                <option class="text-black" value="semaine">Par semaine</option>
              </select>
            </span>

            <span class="flex flex-col w-[calc(50%-.25rem)]"
            ><label for="termes">Terme:</label>
              <select
                  id="termes"
                  v-model="termeDuree"
                  class="text-black"
                  name="termes"
              >
                <option :value="1" class="text-black">1 an</option>
                <option
                    v-for="terme in termes"
                    :value="terme"
                    class="text-black"
                >
                  {{ terme }} ans
                </option>
              </select></span
            >
          </div>
        </div>
        <div class="text-white flex flex-col p-2 gap-4 w-full">
          <h2
              class="uppercase self-start text-3xl font-semibold border-s-2 border-primary ps-8"
          >
            Remboursement anticipé
          </h2>
          <span class="flex flex-col"
          ><label for="rembAnticipe"
          >Montants des remboursements anticipés:</label
          >
            <input id="rembAnticipe" name="rembAnticipe" type="text"
            /></span>

          <span class="flex flex-col"
          ><label for="freq">Fréquence:</label>
            <input id="freq" name="freq" type="text"
            /></span>

          <span class="flex flex-col"
          ><label for="departVersement">À partir du versement:</label>
            <input id="departVersement" name="departVersement" type="text"
            /></span>
        </div>
      </div>
      <Button
          :onclick="
          (e) => {
            submit(e);
          }
        "
          class="self-center mb-8"
          type="button"
      >Calculer
      </Button>
    </form>
  </Section>
  <Section class="flex justify-center">
    <div class="my-20 flex flex-col w-full lg:max-w-[1540px]">
      <Titre>Aperçu des calculs</Titre>
      <table class="calcApercu w-full">
        <thead>
        <tr class="w-full">
          <th class="w-1/3 bg-primary font-bold text-left">Catégorie</th>

          <td class="w-1/3 bg-primary font-bold">Période d’amortissement</td>
        </tr>
        </thead>
        <tbody>
        <tr class="">
          <td>Nombre de versements</td>

          <td>{{ duree }}</td>
        </tr>
        <tr class="">
          <td>Versement hypothécaire</td>

          <td>{{ CADollar.format(versementMensuel) }}</td>
        </tr>
        <tr class="">
          <td>Remboursement anticipé</td>
          
          <td>--</td>
        </tr>
        <tr class="">
          <td>Paiement de capital</td>

          <td>{{ CADollar.format(paiementCapital) }}</td>
        </tr>
        <tr class="">
          <td>Paiement de frais d’intérêt</td>

          <td>{{ CADollar.format(paiementFraisInteret) }}</td>
        </tr>
        <tr class="">
          <td>Coût total</td>

          <td>{{ CADollar.format(prixTotale) }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </Section>
  <Section class="flex justify-center">
    <div class="w-full lg:max-w-[1540px]">
      <Titre>Aperçu des calculs</Titre>
      <div
          class="border-2 border-primary mb-20 px-14 py-8 flex flex-col listeCalc"
      >
        <h3>Au cours de la période d’amortissement de 25 ans, vous aurez :</h3>
        <ul>
          <li class="text-primary">
            <span class="text-white"
            >Fait 300 versements mensuels (12x par année) de 581,60 $.</span
            >
          </li>
          <li class="text-primary">
            <span class="text-white"
            >Payé 100 000,00 $ en capital, 74 481,50 $ en intérêts, pour un
              total de 174 481,50 $.</span
            >
          </li>
        </ul>

        <h3>Au cours du terme de 5 ans, vous aurez :</h3>
        <ul>
          <li class="text-primary">
            <span class="text-white"
            >Fait 60 versements mensuels (12x par année) de 581,60 $</span
            >
          </li>
          <li class="text-primary">
            <span class="text-white"
            >Payé 11 492,50 $ en capital, 23403,80 $ en intérêts, pour un
              total de 34 896,30 $.</span
            >
          </li>
        </ul>

        <h3>À la fin du terme de 5 ans, vous aurez :</h3>
        <ul>
          <li class="text-primary">
            <span class="text-white">Un solde de 88 507,50$.</span>
          </li>
        </ul>
      </div>
    </div>
  </Section>
</template>
<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import Button from "~/components/elements/Button.vue";
import Titre from "~/components/elements/Titre.vue";
import {ref} from "vue";

let termes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let mois = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let annees = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

Intl.NumberFormat();
let CADollar = new Intl.NumberFormat("fr-CA", {
  style: "currency",
  currency: "CAD",
});

let versementMensuel: number = ref(0);
let pretHypothec: number = 250000;
let tauxInteret: number = 5;

// Periode d'ammortissement
let ammortisAnnees: number = 25;
let ammortisMois: number = 0;
let duree: number = ammortisAnnees * 12 + ammortisMois;

// Chaque mois / semaine / 2 semaine / demi-mois
let freqVersement: string = "mois";


// ----------- Les calculs -------------------
let prixTotale = ref(0);
let paiementCapital = ref(0);
let paiementFraisInteret = ref(0);


const submit = (e: any) => {
  duree = ammortisAnnees * 12 + ammortisMois;
  prixTotale.value = versementMensuel.value * duree;
  versementMensuel.value = calculerInteret(pretHypothec, tauxInteret, duree);

  prixTotale.value = versementMensuel.value * duree;
  paiementCapital.value = 0;
  paiementFraisInteret.value = versementMensuel.value * duree - pretHypothec;
};

const calculerInteret = (pret: number, taux: number, time: number) => {
  // (1 + taux/100)^duree
  let a = 1 + (taux / 100 / 12);
  let pow = Math.pow(a, -time);

  let upperCalc = (pret * (taux / 100) / 12)
  return upperCalc / (1 - pow);
};
</script>