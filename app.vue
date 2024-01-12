<template>
  <div>
    <AppHeader />
    <main>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>
<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
</script>
