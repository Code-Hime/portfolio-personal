<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <div class="detail-row">
    <div class="label">{{ label }}: </div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<style scoped>
.detail-row {
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 8px;
  align-items: center;
  text-align: center;
}

.label {
  font-family: var(--font-bold);
}

.value {
  background-color: var(--accent-shade-light);
  padding: 2px 10px;
  border-radius: 20px;
  width: 60%;
  flex: 1;
  font-family: var(--font-light);
}
</style>
