<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const username = ref('')
const password = ref('')

const login = () => {
  window.user = username.value
  const redirectPath = router.currentRoute.value.query.redirect || '/protected'
  router.push(redirectPath)
}
</script>

<template>
  <section class="login">
    <form action="form" @submit.prevent="login">
      <h1>login</h1>
      <label for="username">username</label>
      <input v-model="username" name="username" type="text" class="input" />
      <label for="password">username</label>
      <input v-model="password" name="password" type="text" class="input" />
      <button class="btn">login</button>
    </form>
  </section>
</template>
