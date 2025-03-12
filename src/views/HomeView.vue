<script setup>
import ArticleList from '@/components/ArticleList.vue'
import { ref, onMounted } from 'vue';

const savedFeeds = ref([]);

// Charger les flux RSS depuis localStorage
const getFeeds = () => {
  try {
    return JSON.parse(localStorage.getItem('rssFeeds')) || [];
  } catch {
    return [];
  }
};

onMounted(() => {
  savedFeeds.value = getFeeds();
});

// Ajouter un flux aux favoris
const addFeedToFavorites = (feed) => {
  const savedFavorites = JSON.parse(localStorage.getItem('savedFavorites')) || [];
  if (!savedFavorites.some(fav => fav.id === feed.id)) {
    savedFavorites.push(feed);
    localStorage.setItem('savedFavorites', JSON.stringify(savedFavorites));
  }
};

// Supprimer un flux de la liste
const removeFeed = (id) => {
  const updatedFeeds = savedFeeds.value.filter(feed => feed.id !== id);
  localStorage.setItem("rssFeeds", JSON.stringify(updatedFeeds));
  savedFeeds.value = updatedFeeds;
};
</script>

<template>
  <section class="home-container">
    <h1>Liste des flux RSS</h1>
    <div v-if="savedFeeds.length">
      <ArticleList :articles="savedFeeds" 
                   @update-favorites="addFeedToFavorites"
                   @remove-feed="removeFeed" />
    </div>
    <p v-else>Aucun flux RSS disponible.</p>
  </section>
</template>

<style scoped>
.home-container {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
