<script setup>
import ArticleList from '@/components/ArticleList.vue'
import { ref, computed } from 'vue';

const savedFavorites = ref(JSON.parse(localStorage.getItem('savedFavorites')) || []);

const refreshFavorites = (updatedFavorites) => {
  savedFavorites.value = updatedFavorites;
};

</script>

<template>
  <section class="favorites-container">
    <h1>Mes Favoris</h1>
    <div class="articles-wrapper">
      <p v-if="savedFavorites.length === 0">Aucun article favori trouvé.</p>
      <ArticleList :articles="savedFavorites" @update-favorites="refreshFavorites"/>
    </div>
  </section>
</template>

<style scoped>
.favorites-container {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.articles-wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
