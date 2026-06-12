<template>
  <div class="sidebar" id="sidebar">
    <div class="p-3 text-white border-bottom">
      <h4>GMS</h4>
    </div>

    <ul class="nav flex-column mt-3">
      <li class="nav-item">
        <a href="#" class="nav-link active">{{ authUser }} - Dashboard</a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">Users</a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">Reports</a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">Settings</a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">Profile</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  authUser: {
    type: String,
    default: 'Admin User'
  }
})
</script>

<style scoped>
.sidebar {
  width: 200px;
  min-height: 100vh;
  background: #212529;
  transition: all 0.3s;
}

.sidebar .nav-link {
  color: #adb5bd;
  padding: 12px 20px;
}

.sidebar .nav-link:hover,
.sidebar .nav-link.active {
  background: #343a40;
  color: #fff;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -200px;
    top: 0;
    z-index: 1050;
  }

  .sidebar.show {
    left: 0;
  }
}
</style>
