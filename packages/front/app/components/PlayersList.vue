<template>
  <div id="players-list" class="bg-darkblue-500 flex flex-col gap-4 pt-6 pb-20">
    <h1 class="text-3xl text-center">Casting</h1>
    <div
      class="flex flex-col lg:flex-row flex-nowrap justify-center px-10 lg:px-0 mb-6"
    >
      <div
        v-for="player in players"
        :id="player.id"
        :key="player"
        class="kol_player w-full h-60 lg:h-[50vh] lg:size-[15vw] hover:grow-7 transition-grow duration-300 bg-[center_top_30%] lg:bg-center hover:bg-[center_top_30%] shadow-[15px_0_15px_-15px,-15px_0_15px_-15px] lg:shadow-[0_15px_15px_-15px,0_-15px_15px_-15px] shadow-black hover:shadow-yellow-200 cursor-pointer"
        :class="[
          player.id === 1
            ? 'rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl'
            : '',
          player.id === players.length
            ? 'rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl'
            : '',
          hoveredPlayer === player.id ? 'shadow-yellow-200' : '',
        ]"
        :style="{
          backgroundImage:
            hoveredPlayer === player.id
              ? `url('${baseURL}/players/arcane-${player.id}.jpg')`
              : `url('${baseURL}/players/${player.id}.png')`,
          backgroundSize: 'cover',
        }"
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRuntimeConfig } from "#app";
import { ref } from "vue";
const config = useRuntimeConfig();
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
      "La voix Française de Caitlyn dans la série Arcane, Elsa est actrice, comédienne de doublage et novice dans le JdR :) Elle est aussi la voix de Merrin dans Star Wars, Fragile dans Death Stranding, Sydney Sweeney dans Euphoria et The White Lotus!",
  },
  {
    id: 5,
    name: 'Bora "YellowStar" KIM',
    role: "Joueur",
    description:
      "Multiple Champion d'Europe de League of Legends, Légendaire support de la team Fnatic, Bora est plus connu sous le nom de YellowStar!",
  },
]);
const baseURL = config.app.baseURL || "";

const hoverPlayer = (playerId) => {
  hoveredPlayer.value = playerId;
};

onMounted(() => {
  const handleHovering = () => {
    hoverPlayer(
      parseInt(
        document
          .elementFromPoint(window.innerWidth / 2, window.innerHeight / 4)

          .closest(".kol_player")?.id || null
      )
    );
  };

  if (window.innerWidth < 650) {
    window.addEventListener("scroll", handleHovering);
  }
});
</script>

<style scoped>
#players-list {
  background-image: url("/wallpaper_bottom.png");
  background-size: contain;
  background-position: bottom left;
  background-repeat: no-repeat;
}
</style>
