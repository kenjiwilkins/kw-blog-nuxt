<template>
  <NuxtLink :to="`/article/${article.id}`">
    <div
      class="flex flex-col p-4 border border-kw-gray-200 rounded-2xl"
      :class="index !== 0 ? 'mt-2' : ''"
      :key="article.id"
    >
      <h2 class="text-2xl font-bold">
        {{ article.properties.title.title[0].plain_text }}
      </h2>
      <div class="flex gap-2">
        <NuxtLink
          :to="`/category/${article.properties.category.relation[0].id}`"
        >
          <span>
            category:
            {{
              article.properties.categoryName.rollup.array[0].title[0]
                .plain_text
            }}
          </span>
        </NuxtLink>
        <span>
          date: {{ article.properties.datePublished.date.start || "" }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { BlogArticle } from "types";
defineProps<{
  article: BlogArticle;
  index: number;
}>();
</script>
