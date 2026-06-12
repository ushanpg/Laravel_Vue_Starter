<template>
  <div class="row h-100" position-relative>
    <div
      v-if="isLoading"
      class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style="background: rgba(255, 255, 255, 0.5); z-index: 10"
    >
      <div class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mb-0 mt-2">Logging out, please wait...</p>
      </div>
    </div>

      <div class="overlay" id="overlay"></div>

    <div class="d-flex">
      <!-- Sidebar -->
      <Sidebar :auth-user="auth.user.name" />

      <!-- Main Content -->
      <div class="content">
        <!-- Top Bar -->
        <Topbar :user-name="auth.user.name" @logout="logout" />

        <!-- Page Content -->
        <div class="container-fluid p-4">
          <div class="row g-4">
            <div class="col-md-4">
              <DashboardCard title="Total Users" value="1,250" />
            </div>

            <div class="col-md-4">
              <DashboardCard title="Revenue" value="$12,500" />
            </div>

            <div class="col-md-4">
              <DashboardCard title="Orders" value="325" />
            </div>
          </div>

          <div class="card mt-4 shadow-sm">
            <div class="card-header">Recent Activity</div>

            <div class="card-body">Your dashboard content goes here.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  overflow-x: hidden;
  background: #f8f9fa;
}

.content {
  flex-grow: 1;
}

@media (max-width: 768px) {
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1040;
    display: none;
  }

  .overlay.show {
    display: block;
  }
}
</style>

<script setup>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import Sidebar from '../components/SideBar.vue'
import Topbar from '../components/Topbar.vue'
import DashboardCard from '../components/DashboardCard.vue'

const auth = useAuthStore()
const router = useRouter()
const isLoading = ref(false)

const logout = async () => {
  isLoading.value = true // 1. Start loading
  try {
    await auth.logout()
    router.push('/login')
  } finally {
    isLoading.value = false // 2. Stop loading (runs on success AND failure)
  }
}

onMounted(() => {
  const sidebar = document.getElementById('sidebar')
  const overlay = document.getElementById('overlay')
  const menuBtn = document.getElementById('menuBtn')

  menuBtn?.addEventListener('click', () => {
    sidebar?.classList.toggle('show')
    overlay?.classList.toggle('show')
  })

  overlay?.addEventListener('click', () => {
    sidebar?.classList.remove('show')
    overlay?.classList.remove('show')
  })
})
</script>