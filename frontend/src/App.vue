<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()

onMounted(async () => {
    if (auth.token) {
        await auth.fetchUser()
    }
})
</script>

<template>
    <div
      v-if="auth.loading"
      class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style="background: rgba(255, 255, 255, 0.5); z-index: 10"
    >
      <div class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mb-0 mt-2">Loading, please wait...</p>
      </div>
    </div>
    <RouterView v-else />
</template>
