<script setup>
import { computed } from 'vue';
import { store, mutations } from '../store.js';

const isActive = computed(() => {
    return store.isNavOpen;
})

function toggle() {
    mutations.toggleNav();
}
</script>

<template>
    <div id="mobile--nav"
        :class="{'active': isActive }"
        @click.prevent="toggle">
        <slot>
            <div class="mobile--nav-container">
                <button type="button" class="mobile--nav-button" title="Menu">
                    <span class="mobile--nav-bar mobile--nav-bar--1"></span>
                    <span class="mobile--nav-bar mobile--nav-bar--2"></span>
                    <span class="mobile--nav-bar mobile--nav-bar--3"></span>
                </button>
            </div>
        </slot>
    </div>
</template>

<style scoped>
@import url('../style.css');

button:focus {
    outline: 0;
}

#mobile--nav.active > .mobile--nav-container {
    background-color: var(--caution-shade);
}

.mobile--nav-container {
    background-color: var(--accent-shade);
    border-radius: 12px;
    padding: 2px;

    border: 2px solid var(--neutral-shade);
    box-shadow: 4px 4px var(--neutral-shade);
}

.mobile--nav-button {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 999;
    border: 0;
    box-shadow: none;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform .6 cubic-bezier(0.165, 0.84, 0.44, 1);
}

.mobile--nav-bar {
    background-color: var(--neutral-shade);
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
}

.mobile--nav-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
}

.mobile--nav-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
}

.mobile--nav-button:hover .mobile--nav-bar--2 {
    transform: scaleX(1);
}

.no-touchevents .mobile--nav-bar--2:hover {
    transform: scaleX(1);
}

.mobile--nav-bar--3 {
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
}

#mobile--nav.active .mobile--nav-button {
    transform: rotate(-180deg);
}

#mobile--nav.active .mobile--nav-bar {
    background-color: var(--neutral-shade);
}

#mobile--nav.active .mobile--nav-bar--1 {
    transform: rotate(45deg);
}

#mobile--nav.active .mobile--nav-bar--2 {
    opacity: 0;
}

#mobile--nav.active .mobile--nav-bar--3 {
    transform: rotate(-45deg);
}
</style>