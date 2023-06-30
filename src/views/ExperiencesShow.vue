<script setup>
import sourceData from '../data.json'
import { getCurrentInstance, computed } from 'vue'
const { proxy } = getCurrentInstance()

const destinationId = computed(() => parseInt(proxy.$route.params.id))

const experienceSlug = computed(() => proxy.$route.params.experienceSlug)
const destination = computed(() => {
  return sourceData.destinations.find((destination) => destination.id === destinationId.value)
})

const experience = computed(() => {
  let result = destination.value.experiences.find((experience) => {
    return experience.slug === experienceSlug.value
  })
  return result
})
</script>
<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="`${experience.alt}`" />
    <p>{{ experience.description }}</p>
  </section>
</template>
