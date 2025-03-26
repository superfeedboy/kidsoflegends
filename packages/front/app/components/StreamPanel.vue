<template>
  <div id="stream-panel" class="bg-darkblue-500">
    <div class="flex justify-center">
      <iframe
        src="https://player.twitch.tv/?channel=yellowstar&parent={{currentHostname}}&autoplay=false"
        height="100%"
        width="100%"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true"
        autoplay="false"
        class="w-full h-[50vh] lg:h-[70vh]"
      />
    </div>
  </div>
</template>

<script setup>
const currentHostname = ref(window.location.hostname);
</script>
