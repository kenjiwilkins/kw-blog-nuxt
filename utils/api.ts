import axios from "axios";
import type { BlogArticle, BlogArticleProperties } from "types";

const baseURL =
  "https://ya0rt81r6a.execute-api.ap-northeast-1.amazonaws.com/api";

const api = axios.create({
  baseURL,
});

export const getBlogArticles = async () => {
  const response = await api.get("/blogs");
  return response.data as BlogArticle[];
};

export const getBlogArticleBody = async (id: string) => {
  const response = await api.get(`/blogs/article/body/${id}`);
  return response.data.results;
};

export const getBlogArticleProperties = async (id: string) => {
  const response = await api.get(`/blogs/article/properties/${id}`);
  return response.data.properties as BlogArticleProperties;
};
