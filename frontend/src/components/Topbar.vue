<template>
  <nav class="navbar navbar-expand bg-white topbar px-3">
    <button class="btn btn-outline-secondary d-md-none" id="menuBtn">☰</button>

    <span class="navbar-brand ms-2 mb-0 h1"> Dashboard </span>

    <div class="ms-auto dropdown">
      <a href="#" class="text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
        {{ userName }}
      </a>

      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#" @click="$emit('logout')">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  userName: {
    type: String,
    default: 'Admin User'
  }
})

defineEmits(['logout'])
</script>

<style scoped>
.topbar {
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #dee2e6;
}
</style>
