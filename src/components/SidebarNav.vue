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
    transition: all 150ms ease-in 0s
}

.sidebar-panel {
    overflow-y: auto;
    background-color: rgb(var(--primary-btn-rgb));
    position: fixed;
    left: 0;
    top: 50px;
    height: 90vh;
    z-index: 999;
    padding: 3rem 20px 2rem 20px;
    width: 100vw;
}
</style>