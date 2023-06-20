<script setup>
import MobileNav from './components/MobileNav.vue';
import Sidebar from './components/SidebarNav.vue';
import { useMedia } from './useMedia.js';

const isMobile = useMedia("(max-width: 575px)");
</script>

<template>
    <div id="nav" class="navbar">
      <nav v-if="isMobile" class="mobile--nav nav-group">
        <div class="accent-text"><router-link class="logo" to="/">Lauren Doss</router-link></div>
        <MobileNav></MobileNav>
      </nav>
      <nav v-else class="nav-group" id="topnav">
        <div class="accent-text"><router-link class="logo" to="/">Lauren Doss</router-link></div>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
        <router-link to="/contact" class="nav-link">Say Hello</router-link>
      </nav>
    </div>

    <Sidebar>
      <div class="sidebar-panel-nav">
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
        <router-link to="/contact" class="nav-link">Say Hello</router-link>
      </div>
    </Sidebar>
    <div class="container-view">
      <router-view></router-view>
    </div>
</template>

<style scoped>
@import url('./style.css');
.nav-group {
  display: flex;
  flex-direction: row;
  gap: 2em;
  font-family: 'Ellograph Thin';
  font-size: 1.2rem;
  justify-content: space-between;
  text-transform: uppercase;
}

nav a {
  position: relative;
}

nav a.nav-link::before {
  content: '';
  display: block;
  height: 2px;
  background-color: var(--accent-btn-hex);

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

.container-view {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  gap: 8px;
}

nav a {
  text-decoration: none;
  color: var(--primary-text-hex);
}

nav a:hover {
  color: var(--accent-hex);
}

nav a:focus {
  color: var(--accent-btn-hex);
}

div.sidebar-panel-nav {
  list-style-type: none;
}

div.sidebar-panel-nav > a {
  color: var(--primary-text-hex);
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.6em;
}
</style>
