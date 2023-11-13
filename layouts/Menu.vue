<template>
  <nav class="menu translate-y-2/3 z-[2] flex">
    <ul class="flex text-black text-center items-center">
      <li>
        <NuxtLink to="/">Accueil</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/a-propos">À propos</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/evaluation">Évaluation maison</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/calculatrice">Calculatrice</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/immobilier">Immobiliére</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu {
  border: 2px solid black;
  border-radius: 50px 50px 50px 50px;
}

.menu li {
  display: flex;
  align-items: center;
  padding: 20px 20px;
  transition:
    background-color 0.5s,
    color 0.5s;
  border: 2px solid white;
  color: black;

  height: 100%;
}

.menu li:hover {
  background-color: black;
  color: white;
}

.menu li {
  list-style: none;
  background-color: white;
}

.menu li:last-child {
  padding-right: 40px;
  border-radius: 0px 50px 50px 0px;
}

.menu li:first-child {
  padding-left: 40px;
  border-radius: 50px 0px 0px 50px;
}
</style>
