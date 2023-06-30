<script setup>
import Footer from '../components/Footer.vue';
</script>

<template>
    <section class="home">
        <div class="home-header">
            <h1 class="hello">
                Hello World!
            </h1>
        </div>
        <div class="home-body">
            <div class="button-group">
                <button>Press Me!</button>
                <button class="accent-btn">No Me!</button>
            </div>
        </div>
        <div class="home-footer footer">
            <Footer>
                <p>hi, from down here!</p>
            </Footer>
        </div>
    </section>
</template>

<style scoped>
.home-header {
    text-align: center;
}

.button-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>
