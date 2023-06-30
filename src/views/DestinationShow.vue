<script setup>
import { computed } from 'vue'
import sourceData from '../data.json'
import ExperiecneCard from '../components/ExperiecneCard.vue'
import GoBack from '../components/GoBack.vue'

const props = defineProps({ id: { type: String, required: true } })

const destination = computed(() => {
  return sourceData.destinations.find((destination) => destination.id === parseInt(props.id))
})
</script>

<template>
  <div>
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.alt" />
        <p>{{ destination.description }}</p>
      </div>
    </section>

    <!-- cards -->
    <section class="experiences">
      <h2>Top places in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }"
          v-for="experience in destination.experiences"
          :key="experience.slug"
        >
          <ExperiecneCard :experience="experience" />
        </router-link>
      </div>
      <!-- 1 -->
      <router-view />
    </section>
  </div>
</template>
