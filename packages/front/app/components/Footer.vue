<template>
  <div
    class="grid grid-rows sm:grid-flow-col sm:grid-cols-12 w-full h-20 items-center justify-center inset-shadow-[0_15px_15px_rgba(0,0,0,.25)] p-4"
  >
    <p
      class="order-3 sm:order-1 sm:col-span-8 text-center text-gray-500 text-sm"
    >
      © 2025 Kids of Legends 🚀 par Gilles COGNIN. Kids of Legends is not
      endorsed by Riot Games and does not reflect the views or opinions of Riot
      Games or anyone officially involved in producing or managing League of
      Legends or Arcane. League of Legends, Arcane and Riot Games are trademarks
      or registered trademarks of Riot Games, Inc. League of Legends © Riot
      Games, Inc.
    </p>
    <USeparator
      :orientation="orientation"
      class="order-2 row-span-1 sm:col-span-1 h-[60%] text-gray-500 py-4 sm:py-0 sm:px-4"
    />
    <div
      class="order-1 sm:order-3 sm:col-span-3 text-gray-500 flex justify-center"
    >
      <p>Social medias soon 👀</p>
    </div>
  </div>
</template>

<script setup>
const orientation = ref("vertical");

onMounted(() => {
  // Met à jour l'orientation en fonction de la largeur de la fenêtre
  const updateOrientation = () => {
    orientation.value = window.innerWidth < 650 ? "horizontal" : "vertical";
  };

  // Initialisation
  updateOrientation();

  // Ajoute un écouteur pour gérer les changements de taille de la fenêtre
  window.addEventListener("resize", updateOrientation);
});
</script>
