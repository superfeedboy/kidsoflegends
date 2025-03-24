<template>
  <div class="flex flex-col gap-4 mt-6">
    <h1 class="text-3xl text-center">Casting</h1>
    <div
      class="w-full flex flex-col lg:flex-row flex-nowrap justify-center px-10 lg:px-0 mb-6"
    >
      <USection
        v-for="player in players"
        :key="player"
        class="h-60 lg:h-[50vh] lg:size-[15vw] hover:grow-7 transition-grow duration-300 bg-[center_top_30%] lg:bg-center shadow-[15px_0_15px_-15px,-15px_0_15px_-15px] lg:shadow-[0_15px_15px_-15px,0_-15px_15px_-15px] shadow-black hover:shadow-yellow-200"
        :class="[
          player.id === 1
            ? 'rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl'
            : '',
          player.id === players.length
            ? 'rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl'
            : '',
        ]"
        :style="`background-image: url('/players/${player.id}.png'); background-size: cover;`"
        @mouseover="hoverPlayer(player.id)"
        @mouseleave="hoverPlayer(null)"
      >
        <div
          class="grid grid-rows-3 h-full hover:bg-black/60 transform-background duration-500 text-white text-center p-2"
          :class="[hoveredPlayer === player.id ? 'bg-black/60' : '']"
        >
          <p
            class="row-span-1 text-lg"
            :style="{
              visibility: hoveredPlayer === player.id ? 'visible' : 'hidden',
            }"
          >
            {{ player.role }}
          </p>
          <div
            class="flex flex-col row-span-1 items-center justify-center"
            :style="{
              visibility: hoveredPlayer === player.id ? 'visible' : 'hidden',
            }"
          >
            <p class="text-md">{{ player.description }}</p>
          </div>
          <h1 class="row-span-1 content-end text-2xl">
            {{ player.name }}
          </h1>
        </div>
      </USection>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const hoveredPlayer = ref(false);
const players = ref([
  {
    id: 1,
    name: "Pierre Huntzinger",
    role: "MJ Suprême",
    description:
      "Créateur du Podcast Amour, Gloire et Dragons, Pierre est aussi comédien, improvisateur, chanteur et amateur de quiches aux oignons.",
  },
  {
    id: 2,
    name: "Gilles COGNIN",
    role: "Joueur",
    description:
      "Créateur du podcast DnD 4 Noobs, Gilles est également à la tête de la structure Esports et gaming de son entreprise sous son nom de joueur: SuperFeedBoy.",
  },
  {
    id: 3,
    name: "Jeanne CHARTIER",
    role: "Joueuse",
    description:
      "Docteur Lachatte dans Peepoodoo, Sandy/Hello Kitty/Leia et tant d'autres dans les Kassos, Jeanne est comédienne, improvisatrice, DA de doublage, tant de cordes à son arc!",
  },
  {
    id: 4,
    name: "Elsa DAVOINE",
    role: "Joueuse",
    description:
      "La voix Française de Caitlyn dans la série Arcane, Elsa est actrice, comédienne de doublage et novice dans le JdR :)",
  },
  {
    id: 5,
    name: "Bora KIM",
    role: "Joueur",
    description:
      "Multiple Champion d'Europe de League of Legends, Légendaire support de la team Fnatic, Bora est plus connu sous le nom de YellowStar!",
  },
]);

const hoverPlayer = (playerId) => {
  hoveredPlayer.value = playerId;
  console.log("Hovering:", hoveredPlayer.value);
};
</script>
