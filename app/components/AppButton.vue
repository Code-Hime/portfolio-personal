<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'default' | 'accent'
  active?: boolean
}>(), { variant: 'default', active: false })
</script>

<template>
  <button :class="[{ 'accent-btn': variant === 'accent', active }]">
    <slot />
  </button>
</template>
