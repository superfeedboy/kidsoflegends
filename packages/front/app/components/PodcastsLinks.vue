<template>
  <div
    id="podcasts"
    class="bg-darkblue-500 flex flex-col w-full items-center px-2 py-18"
  >
    <h1 class="text-2xl">Et en attendant...</h1>
    <div
      class="flex flex-col lg:flex-row w-[80vw] lg:w-[60vw] gap-4 justify-between mt-4"
    >
      <div class="flex flex-col gap-4 items-center">
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/show/3p9uMzQLtbyXPeyVjA4wCG?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen="false"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <div class="flex flex-row gap-4">
          <ULink
            to="https://instagram.com/superfeedboy"
            target="_blank"
            class="text-white/90 drop-shadow-[0_5px_5px_rgba(255,255,255,.7)]"
          >
            <UIcon name="i-lucide-instagram" class="size-10" />
          </ULink>
          <ULink
            to="https://open.spotify.com/show/3p9uMzQLtbyXPeyVjA4wCG?si=a2f4597c89084b80"
            target="_blank"
            class="text-white/90 drop-shadow-[0_5px_5px_rgba(255,255,255,.7)]"
          >
            <UIcon name="i-lucide-podcast" class="size-10" />
          </ULink>
        </div>
      </div>
      <div class="flex flex-col gap-4 items-center">
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/show/0aZzisJRlnrWLj2i53Ui8f?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen="false"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <div class="flex flex-row gap-4">
          <ULink
            to="https://www.instagram.com/amourgloireedragons/"
            target="_blank"
            class="text-white/90 drop-shadow-[0_5px_5px_rgba(255,255,255,.7)]"
          >
            <UIcon name="i-lucide-instagram" class="size-10" />
          </ULink>
          <ULink
            to="https://open.spotify.com/show/0aZzisJRlnrWLj2i53Ui8f?si=b645693afe5c40bb"
            target="_blank"
            class="text-white/90 drop-shadow-[0_5px_5px_rgba(255,255,255,.7)]"
          >
            <UIcon name="i-lucide-podcast" class="size-10" />
          </ULink>
          <ULink
            to="https://twitch.com/agdoff"
            target="_blank"
            class="text-white/90 drop-shadow-[0_5px_5px_rgba(255,255,255,.7)]"
          >
            <UIcon name="i-lucide-twitch" class="size-10" />
          </ULink>
          <ULink
            to="l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2FAMOURGLOIREDRAGONS%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYmnZeW437blMv7RoZ_YKnve0BiMiR5-NUyXiylql-sH7BdSB9IPQQ1pfo_aem__BEN0umSA7ES-bbu7o1G4g&e=AT1lqXZDAK0ZJyAClGGNXLfIJ27wmB3vRPMkaa9Rm7pc_llzqGOdNp2qw-_0KaLMTaKm99nobfwQTMCo1QscDUGVtYA_8UTW2L2ICg"
            target="_blank"
            class="text-white/90 drop-shadow-[0_5px_5px_rgba(255,255,255,.7)]"
          >
            <UIcon name="i-lucide-link" class="size-10" />
          </ULink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#podcasts {
  background-image: url("/podcasts_bg.png");
  background-size: cover;
  background-position: center;
}
</style>
