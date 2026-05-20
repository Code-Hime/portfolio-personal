<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  showHeader?: boolean
}>(), { showHeader: true })
</script>

<template>
  <div class="app-section col border-sm">
    <div v-if="showHeader" class="app-section-header">
      <div v-if="title" class="app-section-head-text">{{ title }}:</div>
    </div>
    <div class="app-section-content" :class="{ 'app-section-content--no-header': !showHeader }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.app-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 2;
}

.app-section-header {
  width: 100%;
  min-height: 15%;
  background-color: var(--accent-shade-light);
  border-radius: 6px 6px 0px 0px;
  border-bottom: 2px solid var(--neutral-shade);
}

.app-section-head-text {
  padding: 8px;
}

.app-section-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 20px;
  height: 100%;
  overflow: hidden;
  background-color: var(--app-section-bg, var(--accent-shade));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  width: auto;
}

@media (min-width: 1080px) {
  .app-section-content {
    min-width: 275px;
  }
}
</style>
