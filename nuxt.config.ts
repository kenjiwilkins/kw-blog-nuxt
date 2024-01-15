// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  alias: {
    types: path.resolve(__dirname, "types"),
    utils: path.resolve(__dirname, "utils"),
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "test",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
  nitro: {
    preset: "aws-lambda",
    devProxy: {
      "/api": "https://ya0rt81r6a.execute-api.ap-northeast-1.amazonaws.com/api",
    },
  },
});
