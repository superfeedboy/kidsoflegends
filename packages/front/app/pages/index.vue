<template>
  <div id="container" class="h-[100vh]">
    <Header />
    <PlayersList />
    <ExplanationTile />
    <StreamProgram />
    <StreamPanel />
    <PodcastsLinks />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import ExplanationTile from "~/components/ExplanationTile.vue";
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";
import PlayersList from "~/components/PlayersList.vue";
import PodcastsLinks from "~/components/PodcastsLinks.vue";
import StreamPanel from "~/components/StreamPanel.vue";
import StreamProgram from "~/components/StreamProgram.vue";
</script>
