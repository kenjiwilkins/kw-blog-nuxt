<template>
  <div v-if="!properties"></div>
  <div v-else>
    <h1 class="text-3xl font-semibold">
      {{ properties.title.title[0].plain_text }}
    </h1>
    <div class="flex gap-2">
      <span>
        category:
        <NuxtLink :to="`/category/${properties.category.relation[0].id}`">{{
          properties.categoryName.rollup.array[0].title[0].plain_text
        }}</NuxtLink>
      </span>
      <span> date: {{ properties.datePublished.date.start }} </span>
    </div>
    <div class="py-4">
      <BlocksRenderer :blocks="body" class="py-4" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getBlogArticleProperties, getBlogArticleBody } from "utils/api";
import BlocksRenderer from "utils/renderer";
import type { BlogArticleProperties } from "types";
const id = useRoute().params.id;
const properties = ref<BlogArticleProperties | undefined>();
const body = ref();
const loaded = computed(() => {
  return properties.value && body.value;
});
onMounted(async () => {
  try {
    const propertiesRes = await getBlogArticleProperties(id.toString());
    const bodyRes = await getBlogArticleBody(id.toString());
    console.log(propertiesRes);
    console.log(bodyRes);
    properties.value = propertiesRes;
    body.value = bodyRes;
  } catch (error) {
    console.log(error);
  }
});
</script>
