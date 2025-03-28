// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/test-utils",
  ],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",

  target: "static",

  app: {
    head: {
      title: "Kids of Legends",
      description: "L'actual play dans l'univers de la série Arcane!",
      htmlAttrs: {
        lang: "fr",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/kidsoflegends/favicon.ico",
        },
      ],
    },
    baseURL: "/kidsoflegends/", // Chemin de base pour GitHub Pages
  },
});
