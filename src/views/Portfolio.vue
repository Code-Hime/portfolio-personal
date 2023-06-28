<script setup>
import { ref } from 'vue';
import DevWork from '../components/DevWork.vue';
import DesignWork from '../components/DesignWork.vue';
import Footer from '../components/Footer.vue';

let currentSelection = ref("");

function updateCurrentSelection(type)
{
    console.log("type:" + type)
    if (type === currentSelection.value)
    {
        currentSelection.value = "";
    }
    else {
        currentSelection.value = type;
    }
}
</script>

<template>
    <section class="portfolio">
        <div class="portfolio-header center">
            <div class="header-text">Explore my work as a </div>
            <button class="accent-btn" @click="updateCurrentSelection('dev')">Developer</button>
            <button @click="updateCurrentSelection('design')">Designer</button>
        </div>
        <div v-if="currentSelection !== ''" class="portfolio-body">
            <DevWork v-if="currentSelection === 'dev'" />
            <DesignWork v-if="currentSelection === 'design'" />
        </div>
        <div class="portfolio-footer footer">
            <Footer>Shoes are for feet</Footer>
        </div>
    </section>
</template>

<style scoped>
.portfolio-header {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    justify-content: center;
}

.header-text {
    font-size: 2rem;
}
</style>
