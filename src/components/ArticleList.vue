<script setup>
import { defineProps, defineEmits } from 'vue';
import Article from './Article.vue';

const props = defineProps({
  articles: Array
});

const emit = defineEmits(['update-favorites']);

const toggleFavorite = (article) => {
  let updatedFavorites = JSON.parse(localStorage.getItem('savedFavorites')) || [];

  if (!updatedFavorites.some(fav => fav.id === article.id)) {
    updatedFavorites.push(article);
  } else {
    updatedFavorites = updatedFavorites.filter(fav => fav.id !== article.id);
  }

  localStorage.setItem('savedFavorites', JSON.stringify(updatedFavorites));
  emit('update-favorites', updatedFavorites);
};

const isFavorite = (article) => {
  const savedFavorites = JSON.parse(localStorage.getItem('savedFavorites')) || [];
  return savedFavorites.some(fav => fav.id === article.id);
};
</script>

<template>
  <div class="article-list">
    <div v-for="article in articles" :key="article.id" class="article-card">
      <Article :article="article" @toggle-favorite="toggleFavorite" :is-favorite="isFavorite(article)" />
    </div>
  </div>
</template>

<style scoped>
.article-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
}
</style>
