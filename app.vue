<template>
  <div class="text-kw-gray-950 bg-kw-white flex flex-col min-h-lvh">
    <AppHeader />
    <main class="grow p-4">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
