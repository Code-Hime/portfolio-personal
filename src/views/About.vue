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
            <a href="src/assets/DossLauren_Resume.pdf" target="_blank">View Resume</a>
        </div>
        <div class="about-footer">
            <p>Questions? Comments? Magic the Gathering strategies? Interested in working together?</p><router-link to="/contact">Get in touch...</router-link>
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

a {
    text-transform: uppercase;
}

.about-footer {
    width: 50%;
    position: absolute;
    bottom: 20%;
    left: 45%;
    text-align: right;
}
</style>
