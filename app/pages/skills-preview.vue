<script setup lang="ts">
definePageMeta({ layout: 'default' })
useSeoMeta({ title: 'Skills Preview' })

type Shape = 'heart' | 'star' | 'burst' | 'hexagon' | 'squircle' | 'circle'
type StickerSkill = { name: string, icon: string, color: string, shape: Shape }

const SKILL_STICKERS: StickerSkill[] = [
  { name: 'Vue', icon: 'fa-brands fa-vuejs', color: '#41B883', shape: 'heart' },
  { name: 'TS', icon: 'ts-mark', color: '#3178C6', shape: 'star' },
  { name: 'HTML+CSS', icon: 'fa-brands fa-html5', color: '#E34F26', shape: 'burst' },
  { name: 'C#', icon: 'fa-solid fa-code', color: '#9B4F96', shape: 'hexagon' },
  { name: 'Figma', icon: 'fa-brands fa-figma', color: '#F24E1E', shape: 'squircle' },
]

const SHAPE_SAMPLER: Shape[] = ['circle', 'squircle', 'hexagon', 'heart', 'star', 'burst']

const POLYGON_POINTS: Record<'heart' | 'star' | 'burst' | 'hexagon', string> = {
  hexagon: '25,4 75,4 100,50 75,96 25,96 0,50',
  heart: '50,95 15,70 0,40 5,15 25,5 50,25 75,5 95,15 100,40 85,70',
  star: '50,2 62,34 96,35 69,56 78,89 50,70 22,89 31,56 4,35 38,34',
  burst: '50,0 60,13 75,7 77,23 93,25 87,40 100,50 87,60 93,75 77,77 75,93 60,87 50,100 40,87 25,93 23,77 7,75 13,60 0,50 13,40 7,25 23,23 25,7 40,13',
}

const BORDER_WIDTH = 14
const INNER_WIDTH = 4
</script>

<template>
  <section class="preview">
    <PageHeader><div>Skills Preview</div></PageHeader>

    <Panel class="style-panel">
      <h2>Chunky stickers — rounded points via SVG stroke-linejoin</h2>
      <div class="chunky-row">
        <div
          v-for="(s, i) in SKILL_STICKERS"
          :key="s.name"
          class="chunky-wrap"
          :class="`wrap-${s.shape}`"
          :style="{ '--tilt': `${(i % 2 ? 1 : -1) * (3 + i)}deg` }"
        >
          <svg class="sticker-svg" viewBox="-12 -12 124 124">
            <template v-if="s.shape === 'circle'">
              <circle cx="50" cy="50" r="46" class="border-layer" :stroke-width="BORDER_WIDTH" />
              <circle cx="50" cy="50" r="46" :fill="s.color" :stroke="s.color" :stroke-width="INNER_WIDTH" />
            </template>
            <template v-else-if="s.shape === 'squircle'">
              <rect x="4" y="4" width="92" height="92" rx="22" class="border-layer" :stroke-width="BORDER_WIDTH" />
              <rect x="4" y="4" width="92" height="92" rx="22" :fill="s.color" :stroke="s.color" :stroke-width="INNER_WIDTH" />
            </template>
            <template v-else>
              <polygon :points="POLYGON_POINTS[s.shape]" class="border-layer" :stroke-width="BORDER_WIDTH" stroke-linejoin="round" />
              <polygon :points="POLYGON_POINTS[s.shape]" :fill="s.color" :stroke="s.color" :stroke-width="INNER_WIDTH" stroke-linejoin="round" />
            </template>
          </svg>
          <div class="sticker-content" :class="`content-${s.shape}`">
            <svg v-if="s.icon === 'ts-mark'" class="ts-mark" viewBox="0 0 256 256" aria-hidden="true">
              <path fill="currentColor" fill-rule="evenodd" d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Zm130.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.961-1.266 11.187-3.352 15.679-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135.978-1.524 2.359-2.834 4.144-3.927 1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.583-4.981-.777-10.697-1.166-17.147-1.166-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.598-15.506 6.566-4.463 2.968-7.99 6.748-10.582 11.337-2.591 4.59-3.887 10.099-3.887 16.526 0 8.228 2.375 15.247 7.127 21.056 4.751 5.81 11.964 10.731 21.638 14.764a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"/>
            </svg>
            <font-awesome-icon v-else :icon="s.icon" size="2x" />
            <span class="chunky-label">{{ s.name }}</span>
          </div>
        </div>
      </div>
    </Panel>

    <Panel class="style-panel">
      <h2>Shape sampler (same color, easier to compare silhouettes)</h2>
      <div class="chunky-row">
        <div
          v-for="(shape, i) in SHAPE_SAMPLER"
          :key="shape"
          class="chunky-wrap"
          :class="`wrap-${shape}`"
          :style="{ '--tilt': `${(i % 2 ? 1 : -1) * 4}deg` }"
        >
          <svg class="sticker-svg" viewBox="-12 -12 124 124">
            <template v-if="shape === 'circle'">
              <circle cx="50" cy="50" r="46" class="border-layer" :stroke-width="BORDER_WIDTH" />
              <circle cx="50" cy="50" r="46" class="sample-layer" :stroke-width="INNER_WIDTH" />
            </template>
            <template v-else-if="shape === 'squircle'">
              <rect x="4" y="4" width="92" height="92" rx="22" class="border-layer" :stroke-width="BORDER_WIDTH" />
              <rect x="4" y="4" width="92" height="92" rx="22" class="sample-layer" :stroke-width="INNER_WIDTH" />
            </template>
            <template v-else>
              <polygon :points="POLYGON_POINTS[shape]" class="border-layer" :stroke-width="BORDER_WIDTH" stroke-linejoin="round" />
              <polygon :points="POLYGON_POINTS[shape]" class="sample-layer" :stroke-width="INNER_WIDTH" stroke-linejoin="round" />
            </template>
          </svg>
          <div class="sticker-content">
            <span class="chunky-label sample">{{ shape }}</span>
          </div>
        </div>
      </div>
    </Panel>
  </section>
</template>

<style scoped>
.preview { width: 100%; gap: 2rem; }

.style-panel {
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: var(--primary-shade);
  margin-bottom: 1.5rem;
  width: 100%;
}

h2 {
  font-family: var(--font-demi-bold);
  color: var(--accent-shade-light);
  font-size: 1.2rem;
  margin: 0;
}

.chunky-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 1.5rem 0;
}

.chunky-wrap {
  position: relative;
  width: 120px;
  height: 120px;
  filter: drop-shadow(5px 5px 0 var(--neutral-shade));
  transform: rotate(var(--tilt));
  transition: transform 0.2s ease, filter 0.2s ease;
}
.wrap-star {
  width: 138px;
  height: 138px;
}

.chunky-wrap:hover {
  transform: rotate(0) translate(-2px, -2px);
  filter: drop-shadow(7px 7px 0 var(--neutral-shade));
}

.sticker-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.border-layer {
  fill: var(--neutral-shade);
  stroke: var(--neutral-shade);
}
.sample-layer {
  fill: var(--primary-shade-light);
  stroke: var(--primary-shade-light);
}

.sticker-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.45);
  pointer-events: none;
}
.content-star {
  inset: 22% 18% 28%;
}
.ts-mark {
  width: 2em;
  height: 2em;
  color: #fff;
  filter: drop-shadow(1px 1px 0 rgba(0,0,0,0.45));
}
.content-burst { inset: 14%; }
.content-heart { inset: 12% 8% 22%; }

.chunky-label {
  font-family: var(--font-bold);
  font-size: 0.9rem;
}
.chunky-label.sample {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
