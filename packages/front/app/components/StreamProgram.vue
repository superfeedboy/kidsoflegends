<template>
  <div
    id="stream-program"
    class="flex flex-col w-full items-center px-8 lg:px-4 py-18"
  >
    <h1 class="text-2xl mb-18">
      Quelles sont les étapes avant la production du podcast ?
    </h1>
    <UStepper
      v-model="active"
      :items="items"
      class="w-full"
      :orientation="getOrientation"
    />
    <h1 class="text-2xl mt-18">
      Eh oui, l'évènement sera streamé en live sur la chaîne Twitch de
      YellowStar !
    </h1>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const orientation = ref("horizontal");
const active = ref(1);
const items = ref([
  {
    title: "Trouver les joueurs",
    description: "C'est pas le plus compliqué, mais c'est le plus important",
    icon: "i-lucide-user-round-search",
  },
  {
    title: "Session 0",
    description: "Préparer la session pour qu'on soit tous à l'aise",
    icon: "i-lucide-phone",
  },
  {
    title: "Enregistrement",
    description: "Le moment fatidique",
    icon: "i-lucide-video",
  },
  {
    title: "Montage",
    description:
      "Le moment où on se rend compte qu'on a oublié de couper le micro",
    icon: "i-lucide-edit",
  },
  {
    title: "Publication",
    description:
      "Le moment où on se rend compte qu'on a oublié de couper le micro",
    icon: "i-lucide-upload",
  },
]);

onMounted(() => {
  // Met à jour l'orientation en fonction de la largeur de la fenêtre
  const updateOrientation = () => {
    orientation.value = window.innerWidth < 650 ? "vertical" : "horizontal";
  };

  // Initialisation
  updateOrientation();

  // Ajoute un écouteur pour gérer les changements de taille de la fenêtre
  window.addEventListener("resize", updateOrientation);

  const streamProgram = document.getElementById("stream-program");
  if (streamProgram) {
    streamProgram.style.backgroundPositionY = "0px";

    const handleScroll = () => {
      const offset = window.pageYOffset || 0;
      let offsetChanger = 1500;
      let scaler = 0.5;
      if (window.innerWidth < 1025) {
        offsetChanger = 2200;
        scaler = 0.4;
      }
      streamProgram.style.backgroundPositionY = `${
        (offset - offsetChanger) * scaler
      }px`;
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoie l'écouteur lorsque le composant est détruit
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  }

  // Nettoie l'écouteur lorsque le composant est détruit
  onUnmounted(() => {
    window.removeEventListener("resize", updateOrientation);
  });
});

const getOrientation = computed(() => orientation.value);
</script>

<style scoped>
#stream-program {
  background-image: url("/streamtile.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: auto;
  position: relative;
  background-color: black;
}
</style>
