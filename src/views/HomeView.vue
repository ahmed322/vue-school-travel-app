<script setup>
import { ref } from 'vue'
import sourceData from '../data.json'
const destinations = ref(sourceData.destinations)
</script>

<template>
  <main class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.alt" />
      </router-link>
    </div>
  </main>
</template>
