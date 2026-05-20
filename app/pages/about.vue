<script setup lang="ts">
import type { StickerShape } from '~/types'

definePageMeta({ layout: 'default' })
useSeoMeta({
  title: `About — ${PROFILE.name}`,
  description: `${PROFILE.description}, and creative problem solver based in ${PROFILE.location}.`,
})
const ResumePdf = '/DossLauren_Resume.pdf'

const STICKER_DISPLAY: Record<string, { shape: StickerShape, color: string, hideLabel?: boolean }> = {
  Vue: { shape: 'heart', color: '#41B883', hideLabel: true },
  TS: { shape: 'star', color: '#3178C6', hideLabel: true },
  'HTML+CSS': { shape: 'burst', color: '#E34F26' },
  'C#': { shape: 'hexagon', color: '#9B4F96' },
  Figma: { shape: 'squircle', color: '#F24E1E' },
}
</script>

<template>
  <section class="about">
    <div class="about-body">
      <PageHeader>
        <div>About</div>
      </PageHeader>
      <Panel class="bio-container">
        <div class="col bio-img">
          <NuxtImg src="/portrait.jpg" class="bio-portrait border-sm" :alt="PROFILE.name" />
        </div>

        <AppSection title="Basics">
          <DetailRow label="Title" :value="PROFILE.description" />
          <DetailRow label="Located" :value="PROFILE.location" />
          <DetailRow label="Pronouns" :value="PROFILE.pronouns" />
          <DetailRow label="Pup's Name" :value="PROFILE.pet" />
        </AppSection>

        <!-- <AppSection title="Skills" class="bio-skills">
          <div class="sticker-row">
            <AppSticker
              v-for="(s, i) in SKILLS"
              :key="s.name"
              :shape="STICKER_DISPLAY[s.name]!.shape"
              :color="STICKER_DISPLAY[s.name]!.color"
              :tilt="(i % 2 ? 1 : -1) * (3 + i)"
            >
              <TsMark v-if="s.icon === 'ts-mark'" :icon="s.icon" />
              <font-awesome-icon v-else :icon="s.icon" size="2x" />
              <span v-if="!STICKER_DISPLAY[s.name]?.hideLabel" class="sticker-label">{{ s.name }}</span>
            </AppSticker>
          </div>
        </AppSection> -->

        <div class="sticker-col">
          <AppSticker
            class="sticker__vue"
            shape="heart"
            :color="STICKER_DISPLAY['Vue']!.color"
          />
          <AppSticker
            class="sticker__ts"
            :shape="STICKER_DISPLAY['TS']!.shape"
            :color="STICKER_DISPLAY['TS']!.color"
          />
        </div>

        <AppSection :show-header="false" class="bio-typing">
          <div class="message-text">I'm Lauren </div>
          <ClientOnly>
            <VueWriter :array="[...ABOUT_DESCRIPTORS]" class="typing descriptors" />
            <VueWriter :array="[...ABOUT_ROLES]" class="typing roles" />
          </ClientOnly>
        </AppSection>

        <AppSection title="Interests">
          <div v-for="item in INTERESTS" :key="item.label" class="interest-item">
            <div class="interest-pill">
              <span><font-awesome-icon :icon="item.prependIcon" size="xl" /></span>
              {{ item.label }}
              <span v-if="item.appendIcon"><font-awesome-icon :icon="item.appendIcon" size="xl" /></span>
            </div>
          </div>
        </AppSection>

        <div class="col bio-cta">
          <a :href="ResumePdf" target="_blank">
            <AppButton variant="accent" class="resume-btn">
              View Resume
            </AppButton>
          </a>
        </div>
      </Panel>
    </div>
    <div class="about-footer footer">
      <Footer>
        <p>Questions? Comments? Magic the Gathering strategies? Interested in working together?</p>
        <NuxtLink to="/contact">Get in touch...</NuxtLink>
      </Footer>
    </div>
  </section>
</template>

<style scoped>
.about-body {
  width: 100%;
}

.bio-container {
  flex-flow: wrap;
  gap: 1.2em;
  padding: 1.2em 1.2em;
  background-color: var(--primary-shade);
  justify-content: center;
  align-content: center;
}

.bio-portrait {
  width: 100%;
  object-fit: cover;
  flex-grow: 1;
  box-shadow: 4px 4px var(--primary-shade-dark);
}

.resume-btn {
  width: 100%;
  background-color: var(--success-shade);
  text-align: center;
  margin-bottom: 8px;
  height: 98%;
  align-self: stretch;
}

.bio-cta {
  flex-basis: 100%;
  
   a {
    font-family: var(--font-bold);
    font-size: 1.4rem;
    text-transform: uppercase;
    color: var(--neutral-shade);
    text-shadow: none;
    text-decoration: none;
  }
}

.bio-skills {
  flex-grow: 4;
}

.sticker-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: center;
  padding: 1rem 0;
}

.sticker-label {
  font-family: var(--font-bold);
  font-size: 0.9rem;
}

.interest-item {
  display: flex;
  flex-direction: row;
  gap: 8px;
  text-align: center;
  margin-bottom: 8px;
}

.interest-pill {
  background-color: var(--accent-shade-light);
  padding: 4px 12px;
  border-radius: 16px;
  flex: 1;
}

.bio-typing {
  --app-section-bg: var(--accent-shade-light);
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
}

.typing {
  font-size: 1.4rem;
  padding-top: 8px;
}

.descriptors {
  color: var(--primary-shade);
}

.message-text {
  font-size: 1.6rem;
  font-family: var(--font-demi-bold);
  text-shadow: var(--primary-shade-60) 2px 2px;
}
</style>
