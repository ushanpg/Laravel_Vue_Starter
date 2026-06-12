<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h5>{{ title }}</h5>
      <h2>{{ value }}</h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
})
</script>
