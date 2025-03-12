<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  article: Object,
  isFavorite: Boolean
});

const emit = defineEmits(['toggle-favorite', 'remove-favorite']);

const toggleFavorite = () => {
  emit('toggle-favorite', props.article);
};

const removeFavorite = () => {
  emit('remove-favorite', props.article.id);
};
</script>

<template>
  <div class="article-card-content">
    <a :href="article.link" target="_blank" rel="noopener noreferrer">{{ article.title }}</a>
    <p>{{ article.description }}</p>
    <button @click="toggleFavorite">
      {{ isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
    </button>
    <button @click="removeFavorite" v-if="!isFavorite">
      Supprimer
    </button>
  </div>
</template>

<style scoped>
.article-card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 6px 12px;
  background-color: #ff6b6b;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #e04f5f;
}
</style>
