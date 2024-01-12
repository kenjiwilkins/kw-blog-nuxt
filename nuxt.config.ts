// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "test",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
});
