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
    <PageHeader>
      <div>Portfolio</div>
    </PageHeader>
    <div class="portfolio-header">
      <div class="header-text">Explore my work as a </div>
      <div class="work-btn-grp">
        <AppButton variant="accent" :active="currentSelection === 'dev'" class="work-btn" @click="updateCurrentSelection('dev')">Developer</AppButton>
        <AppButton :active="currentSelection === 'design'" class="work-btn" @click="updateCurrentSelection('design')">Designer</AppButton>
      </div>
    </div>
    <div v-if="currentSelection !== ''" class="portfolio-body">
      <div v-if="currentSelection === 'dev'" class="dev-work work-container">
        <Card
          v-for="project in PROJECTS"
          :key="project.projectName"
          :project-name="project.projectName"
          :image-url="project.imageUrl"
          :image-alt-text="project.imageAltText"
          :desc-text="project.descText"
          :role-text="project.roleText"
        />
      </div>
      <div v-if="currentSelection === 'design'" class="design-work work-container">
        <div v-for="src in DESIGN_EMBEDS" :key="src" class="design-item">
          <iframe :src="src" allowfullscreen></iframe>
        </div>
      </div>
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

.dev-work {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.design-work {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  flex-basis: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.design-item {
  justify-self: center;
  align-self: center;
  flex-grow: 1;
  aspect-ratio: 16 / 9;
  width: 100%;
  height: 100%;
}

.design-item iframe {
  border: 2px solid var(--primary-shade-dark);
  border-radius: 8px;
  width: 100%;
  height: 100%;
}
</style>
