<script setup>
const props = defineProps({
  experience: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="card">
    <img :src="`/images/${experience.image}`" :alt="`${experience.alt}`" />
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>
