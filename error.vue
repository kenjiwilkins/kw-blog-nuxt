<template>
  <div class="text-kw-gray-950 bg-kw-white flex flex-col min-h-lvh">
    <AppHeader />
    <NuxtLayout name="404">
      <div class="flex flex-col p-6 grow items-center justify-center">
        <h1 class="text-4xl">404</h1>
        <p>Oops! This page vanished into thin air...</p>
      </div>
    </NuxtLayout>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
