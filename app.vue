<template>
  <NuxtLayout>
    <NuxtLoadingIndicator/>
    <NuxtPage/>
  </NuxtLayout>
  <pre class="text-white">{{ data }}</pre>
</template>

<script setup>
const {data} = await useFetch('/api/hello')
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Fasthand&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

:root {
  --color_primary: #c4971c;
}

body {
  background-color: black;
}

* {
  font-family: "Poppins", sans-serif;
  color: white;
}

.decor-text {
  font-family: "Dancing Script", cursive;
  letter-spacing: .1rem;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
