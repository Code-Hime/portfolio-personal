<script setup lang="ts">
definePageMeta({ layout: 'default' })
useSeoMeta({
  title: 'Portfolio — Lauren Doss',
  description: 'Development and design work by Lauren Doss.',
})

const currentSelection = ref<string>('')

function updateCurrentSelection(type: string) {
  currentSelection.value = currentSelection.value === type ? '' : type
}
</script>

<template>
  <section class="portfolio">
    <Header>
      <div>Portfolio</div>
    </Header>
    <div class="portfolio-header">
      <div class="header-text">Explore my work as a </div>
      <div class="work-btn-grp">
        <button class="accent-btn work-btn" :class="{ active: currentSelection === 'dev' }" @click="updateCurrentSelection('dev')">Developer</button>
        <button class="work-btn" :class="{ active: currentSelection === 'design' }" @click="updateCurrentSelection('design')">Designer</button>
      </div>
    </div>
    <div v-if="currentSelection !== ''" class="portfolio-body">
      <DevWork v-if="currentSelection === 'dev'" />
      <DesignWork v-if="currentSelection === 'design'" />
    </div>
    <div class="portfolio-footer footer">
      <Footer>
        <p>Always more in the works! Like what you see?</p>
        <NuxtLink to="/contact">Let me know...</NuxtLink>
      </Footer>
    </div>
  </section>
</template>

<style scoped>
.portfolio-header {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.portfolio-body {
  width: 100%;
  flex-basis: 250px;
  margin-top: 1.2rem;
}

.header-text {
  font-size: 1.6rem;
} 

.work-btn {
  font-size: 1.4rem;
  flex-basis: 200px;
  flex-grow: 2;
}

.work-btn-grp {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-content: center;
}

.active {
  background-color: var(--caution-shade) !important;
}
</style>
