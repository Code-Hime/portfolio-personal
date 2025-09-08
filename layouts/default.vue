<script setup>
import MobileNav from '~/components/MobileNav.vue'
import Sidebar from '~/components/SidebarNav.vue'
import { useMediaQuery } from '@vueuse/core'
import { useNavigation } from '~/composables/useNavigation'

const isMobile = useMediaQuery('(max-width: 756px)')
const { closeNav } = useNavigation()

function closeSidebarPanel() {
  closeNav()
}
</script>

<template>
  <div id="nav" class="navbar">
    <nav v-if="isMobile" class="mobile--nav nav-group">
      <div class="accent-text mobile--nav-logo">
        <NuxtLink class="logo" to="/">Lauren Doss</NuxtLink>
      </div>
      <MobileNav />
    </nav>
    <nav v-else class="nav-group" id="topnav">
      <div class="accent-text">
        <NuxtLink class="logo" to="/">Lauren Doss</NuxtLink>
      </div>
      <NuxtLink to="/about" class="nav-link">About</NuxtLink>
      <NuxtLink to="/portfolio" class="nav-link">Portfolio</NuxtLink>
      <NuxtLink to="/contact" class="nav-link">Say Hello</NuxtLink>
    </nav>

    <Sidebar>
      <div class="sidebar-panel-nav">
        <NuxtLink to="/about" class="mobile--nav-link" @click="closeSidebarPanel">About</NuxtLink>
        <NuxtLink to="/portfolio" class="mobile--nav-link" @click="closeSidebarPanel">Portfolio</NuxtLink>
        <NuxtLink to="/contact" class="mobile--nav-link" @click="closeSidebarPanel">Say Hello</NuxtLink>
      </div>
    </Sidebar>
    
    <div class="container-view">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.nav-group {
  display: flex;
  flex-direction: row;
  gap: 2em;
  font-family: 'Ellograph Thin';
  font-size: 1.4rem;
  justify-content: space-around;
  text-transform: uppercase;
  margin-right: 1rem;
  margin-left: 1rem;
}

nav a {
  position: relative;
}

nav a.nav-link::before {
  content: '';
  display: block;
  height: 2px;
  background-color: var(--success-shade);
  position: absolute;
  top: 0;
  width: 0%;
  transition: all ease-in-out 200ms;
}

.logo:hover::before {
  width: 0%;
}

.logo:focus::before {
  width: 0%;
}

nav a:hover::before {
  width: 100%;
}

nav a:focus::before {
  width: 100%;
}

nav a {
  text-decoration: none;
  color: var(--primary-text-shade);
}

nav a:hover {
  color: var(--caution-shade);
}

nav a:focus {
  color: var(--caution-shade);
}

.mobile--nav-logo {
  font-size: 1.8rem;
  align-self: center;
}

.mobile--nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

div.sidebar-panel-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: center;
  list-style-type: none;
}

div.sidebar-panel-nav > a {
  color: var(--neutral-shade);
  text-decoration: none;
  font-size: 1.8rem;
  display: block;
  text-shadow: 1px 1px 0 var(--accent-shade);
}

div.sidebar-panel-nav > a:hover {
  background-color: var(--neutral-shade);
  color: var(--accent-shade-light);
  text-shadow: none;
  padding-left: 10px;
}
</style>
