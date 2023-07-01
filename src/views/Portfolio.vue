<script setup>
import { ref } from 'vue';
import DevWork from '../components/DevWork.vue';
import DesignWork from '../components/DesignWork.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

let currentSelection = ref("");
let isActive = false;

function updateCurrentSelection(type)
{
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
        <Header>
            <div>Portfolio</div>
        </Header>
        <div class="portfolio-header">
            <div class="header-text">Explore my work as a </div>
            <div class="work-btn-grp">
                <button class="accent-btn work-btn" @click="[updateCurrentSelection('dev'), (e => e.target.classList.toggle('active'))]">Developer</button>
                <button class="work-btn" @click="updateCurrentSelection('design')" :class="{active: isActive}">Designer</button>
            </div>
        </div>
        <div v-if="currentSelection !== ''" class="portfolio-body">
            <DevWork v-if="currentSelection === 'dev'" />
            <DesignWork v-if="currentSelection === 'design'" />
        </div>
        <div class="portfolio-footer footer">
            <Footer>
                <p>Always more in the works! Like what you see?</p>
                <router-link to="/contact">Let me know...</router-link>
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
