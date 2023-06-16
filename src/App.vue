<script setup>
</script>

<template>
    <div id="nav" class="navbar">
      <div class="nav-group">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/contact">Say Hello</router-link>
      </div>
    </div>
    <div class="container-view">
      <router-view></router-view>
    </div>
</template>

<style scoped>
.nav-group {
  display: flex;
  flex-direction: row;
  gap: 2em;
  font-family: 'Ellograph Thin';
  font-size: 1.2rem;
  justify-content: space-between;
  text-transform: uppercase;
}

.container-view {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  gap: 8px;
}

.navbar a {
  text-decoration: none;
}

img {
  max-width: 150px;
  max-height: 100px;
}
</style>
