<script setup>
import MobileNav from './components/MobileNav.vue';
import Sidebar from './components/SidebarNav.vue';
import { useMedia } from './useMedia.js';
import { mutations } from './store.js';

const isMobile = useMedia("(max-width: 756px)");

function closeSidebarPanel() {
    mutations.toggleNav();
}
</script>

<template>
    <div id="nav" class="navbar">
      <nav v-if="isMobile" class="mobile--nav nav-group">
        <div class="accent-text mobile--nav-logo"><router-link class="logo" to="/">Lauren Doss</router-link></div>
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
        <router-link to="/about" class="mobile--nav-link" @click="closeSidebarPanel">About</router-link>
        <router-link to="/portfolio" class="mobile--nav-link" @click="closeSidebarPanel">Portfolio</router-link>
        <router-link to="/contact" class="mobile--nav-link" @click="closeSidebarPanel">Say Hello</router-link>
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
  font-size: 1.4rem;
  justify-content: space-between;
  text-transform: uppercase;
  margin-right: 4px;
  margin-left: 4px;
}

nav a {
  position: relative;
}

nav a.nav-link::before {
  content: '';
  display: block;
  height: 2px;
  background-color: var(--accent-shade-light);

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

/*
.container-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  gap: 8px;
}
*/

nav a {
  text-decoration: none;
  color: var(--primary-text-shade);
}

nav a:hover {
  color: var(--accent-shade);
}

nav a:focus {
  color: var(--accent-shade-light);
}

.mobile--nav-logo {
  font-size: 1.6rem;
  align-self: center;
}

.mobile--nav {
  display: flex;
  flex-direction: row;
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
