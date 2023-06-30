<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const logout = function () {
  window.user = null
  router.push({ name: 'home', query: { logout: null } })
}
</script>
<template>
  <section>
    <h1>protected</h1>
    <button class="btn" @click="logout">logout</button>
    <router-link :to="{ name: 'invoices' }"> <button class="btn">invoices</button></router-link>
  </section>
</template>
