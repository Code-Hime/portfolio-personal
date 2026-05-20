<script setup lang="ts">
defineProps<{ error: { statusCode: number; message: string } }>()

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="error-page">
    <div class="error-container shadow-box">
      <h1 class="error-code">{{ error.statusCode }}</h1>
      <p class="error-message">{{ error.message }}</p>
      <button class="accent-btn" @click="handleError">Go Home</button>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.error-container {
  text-align: center;
  background-color: var(--primary-shade);
  color: var(--neutral-shade);
  padding: 2rem 3rem;
}

.error-code {
  font-size: 4rem;
  margin-bottom: 0.5rem;
}

.error-message {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
</style>
