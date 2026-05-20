<script setup lang="ts">
import type { StickerShape } from '~/types'

const props = withDefaults(defineProps<{
  shape: StickerShape
  color: 'green' | 'blue' | 'orange' | 'yellow' | 'purple' | string
  tilt?: number
}>(), { tilt: 0 })

const colors: Record<string, string> = {
  'green': '#41B883',
  'blue': '#3178C6',
  'orange': '#E34F26',
  'yellow': '#F2C037',
  'purple': '#9B4F96',
}

const POLYGON_POINTS: Record<'heart' | 'star' | 'burst' | 'hexagon', string> = {
  hexagon: '25,4 75,4 100,50 75,96 25,96 0,50',
  heart: '50,95 15,70 0,40 5,15 25,5 50,25 75,5 95,15 100,40 85,70',
  star: '50,2 62,34 96,35 69,56 78,89 50,70 22,89 31,56 4,35 38,34',
  burst: '50,0 60,13 75,7 77,23 93,25 87,40 100,50 87,60 93,75 77,77 75,93 60,87 50,100 40,87 25,93 23,77 7,75 13,60 0,50 13,40 7,25 23,23 25,7 40,13',
}

const BORDER_WIDTH = 14
const INNER_WIDTH = 4

const computedColor = computed(() => colors[props.color] || props.color)
</script>

<template>
  <div class="sticker" :class="`wrap-${shape}`" :style="{ '--tilt': `${tilt}deg` }">
    <svg class="sticker-svg" viewBox="-12 -12 124 124">
      <template v-if="shape === 'circle'">
        <circle cx="50" cy="50" r="46" class="border-layer" :stroke-width="BORDER_WIDTH" />
        <circle cx="50" cy="50" r="46" :fill="computedColor" :stroke="computedColor" :stroke-width="INNER_WIDTH" />
      </template>
      <template v-else-if="shape === 'squircle'">
        <rect x="4" y="4" width="92" height="92" rx="22" class="border-layer" :stroke-width="BORDER_WIDTH" />
        <rect x="4" y="4" width="92" height="92" rx="22" :fill="computedColor" :stroke="computedColor" :stroke-width="INNER_WIDTH" />
      </template>
      <template v-else>
        <polygon :points="POLYGON_POINTS[shape]" class="border-layer" :stroke-width="BORDER_WIDTH" stroke-linejoin="round" />
        <polygon :points="POLYGON_POINTS[shape]" :fill="computedColor" :stroke="computedColor" :stroke-width="INNER_WIDTH" stroke-linejoin="round" />
      </template>
    </svg>
    <div class="sticker-content" :class="`content-${shape}`">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.sticker {
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

.sticker:hover {
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
.content-star { inset: 22% 18% 28%; }
.content-burst { inset: 14%; }
.content-heart { inset: 12% 8% 22%; }
</style>
