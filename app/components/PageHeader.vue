<script setup lang="ts"></script>

<template>
  <div class="page-header shadow-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.page-header {
  width: 100%;
  background-color: var(--success-shade);
  text-align: center;
  margin-bottom: 1rem;
}

:deep(div) {
  color: var(--neutral-shade);
  font-size: 2rem;
}
</style>
