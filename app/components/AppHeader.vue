<script setup lang="ts">
const isMobile = useMediaQuery('(max-width: 756px)')
const { closeNav } = useNavigation()

function closeSidebarPanel() {
  closeNav()
}
</script>

<template>
  <header>
    <nav class="nav-group">
      <div class="accent-text" :class="{ 'mobile--nav-logo': isMobile }">
        <NuxtLink class="logo" to="/about">{{ PROFILE.name }}</NuxtLink>
      </div>
      <MobileNav v-if="isMobile" class="nav-mobile-toggle" />
      <NavLinks v-else />
    </nav>

    <SidebarNav>
      <div class="sidebar-panel-nav">
        <NavLinks variant="sidebar" @link-click="closeSidebarPanel" />
      </div>
    </SidebarNav>
  </header>
</template>

<style scoped>
.nav-group {
  display: flex;
  flex-direction: row;
  gap: 2em;
  font-family: var(--font-thin);
  font-size: 1.4rem;
  justify-content: space-around;
  text-transform: uppercase;
  margin-right: 1rem;
  margin-left: 1rem;
}

.logo {
  position: relative;
  text-decoration: none;
  color: var(--primary-text-shade);
}

.logo:hover,
.logo:focus {
  color: var(--caution-shade);
}

.mobile--nav-logo {
  font-size: 1.8rem;
  align-self: center;
}

.nav-mobile-toggle {
  margin-left: auto;
}

div.sidebar-panel-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: center;
  list-style-type: none;
}
</style>
