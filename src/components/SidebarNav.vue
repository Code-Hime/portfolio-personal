<script setup>
import { computed } from 'vue';
import { store, mutations } from '../store.js';

const isPanelOpen = computed(() => {
    return store.isNavOpen;
});

function closeSidebarPanel() {
    mutations.toggleNav();
}
</script>

<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen" class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<style scoped>
@import url('../style.css');

.slide-enter-active,
.slide-leave-active
{
    transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
    transition: all 200ms ease-in 0s
}

.sidebar-panel {
    overflow-y: auto;
    background-color: var(--caution-shade);
    border: 2px solid var(--neutral-shade);
    box-shadow: 4px 4px var(--neutral-shade);
    border-radius: 12px;
    position: fixed;
    right: 18%;
    top: 12%;
    height: 25%;
    z-index: 999;
    padding: 1.2rem;
    width: 70%;
    max-width: 500px;
}

.sidebar-backdrop {
    width: 100lvw;
    height: 100lvh;
}
</style>