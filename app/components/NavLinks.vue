<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'topnav' | 'sidebar' }>(), { variant: 'topnav' })
defineEmits<{ linkClick: [] }>()
</script>

<template>
  <NuxtLink
    v-for="link in NAV_LINKS"
    :key="link.to"
    :to="link.to"
    :class="['nav-link', `nav-link--${variant}`]"
    @click="$emit('linkClick')"
  >
    {{ link.label }}
  </NuxtLink>
</template>

<style scoped>
.nav-link {
  position: relative;
  text-decoration: none;
}

.nav-link--topnav {
  color: var(--primary-text-shade);
}

.nav-link--topnav::before {
  content: '';
  display: block;
  height: 2px;
  background-color: var(--success-shade);
  position: absolute;
  top: 0;
  width: 0%;
  transition: all ease-in-out 200ms;
}

.nav-link--topnav:hover::before,
.nav-link--topnav:focus::before {
  width: 100%;
}

.nav-link--topnav:hover,
.nav-link--topnav:focus {
  color: var(--caution-shade);
}

.router-link-active.nav-link--topnav::before {
  background-color: var(--caution-shade);
}

.router-link-active.nav-link--topnav {
  color: var(--success-shade);
}

.nav-link--sidebar {
  color: var(--neutral-shade);
  font-size: 1.8rem;
  display: block;
  text-shadow: 1px 1px 0 var(--accent-shade);
}

.nav-link--sidebar:hover {
  background-color: var(--neutral-shade);
  color: var(--accent-shade-light);
  text-shadow: none;
  padding-left: 10px;
}
</style>
