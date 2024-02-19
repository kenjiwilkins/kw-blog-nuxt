<template>
  <div>
    <ArticleList
      v-for="(blog, index) in blogs"
      :article="blog"
      :index="index"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getBlogArticles } from "#imports";
import ArticleList from "~/components/ArticleList.vue";
import type { BlogArticle } from "types";
const blogs = ref<BlogArticle[]>([]);
onMounted(async () => {
  try {
    const response = await getBlogArticles();
    blogs.value = response;
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
});
</script>
