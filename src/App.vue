<script setup>
</script>

<template>
    <div id="nav" class="navbar">
      <nav class="nav-group">
        <div class="accent-text"><router-link class="logo" to="/">Lauren Doss</router-link></div>
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/contact">Say Hello</router-link>
      </nav>
    </div>
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

nav a:not([class^="logo"])::before {
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
</style>
