<script setup>

</script>

<template>
    <section class="about">
        <div class="about-header">
            <h2>Creative</h2>
            <h2>Adaptable</h2>
            <h2>Thoughtful</h2>
        </div>
        <div class="about-body">
            <p>Hi, I'm Lauren [she/her] - a web designer & engineer based in Dallas.</p>
            <router-link to="/resume">Resume</router-link>
        </div>
        <div class="about-footer">
            <p>Questions? Comments? Magic the Gathering strategies? Interested in working together? <router-link to="/contact">Get in touch</router-link>.</p>
        </div>
    </section>
</template>

<style scoped>
h2 {
    line-height: 50%;
}

p {
    font-family: 'Ellograph Thin';
    font-size: 1.2rem;
}

.about-footer {
    width: 50%;
    position: absolute;
    bottom: 20%;
    left: 45%;
    text-align: right;
}
</style>
