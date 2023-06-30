<script setup>
import { ref } from 'vue'
import sourceData from '../data.json'
const destinations = ref(sourceData.destinations)
</script>
<template>
  <AppLink to="/">Home</AppLink>
  <AppLink
    :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
    v-for="destination in destinations"
    :key="destination.id"
  >
    {{ destination.name }}
  </AppLink>
  <AppLink :to="{ name: 'protected' }">Dashboard</AppLink>
  <AppLink to="https://www.google.com">googel</AppLink>
</template>
