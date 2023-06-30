<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  ...RouterLink.props
})

const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})

const linkProps = computed(() => {
  return { ...props, to: props.to }
})
</script>

<template>
  <a v-if="isExternal" target="_blank" rel="noopener" class="external-link" :href="to">
    <slot></slot>
  </a>
  <router-link v-else v-bind="linkProps" class="internal-link">
    <slot></slot>
  </router-link>
</template>
