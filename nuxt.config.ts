// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss'],

    app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
        },

        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/craftwork-grotesk",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap",
        },
      ],
    },
  },
})