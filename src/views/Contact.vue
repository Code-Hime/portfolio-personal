<script setup>

</script>

<template>
    <section class="contact">
        <div class="contact-header">
            <h1>Let's Build Something Together!</h1>
            <h2>Get in Touch</h2>
        </div>
        <div class="contact-body">
            <a target="_blank" href="mailto:laurendoss@devforge.dev?subject=Let's work together">laurendoss@devforge.dev</a>
            <a target="_blank" href="tel:2819108934">281.910.8934</a>
        </div>
        <div class="contact-footer footer">
            <p>Let's chat!</p>
        </div>
    </section>
</template>

<style scoped>
@import url('../style.css');
.contact-header {
    width: 60%;
}

h1 {
    font-size: 3rem;
}

h2 {
    margin-top: -2rem;
    margin-bottom: 2rem;
}

.contact-body {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.contact-body a {
    font-family: 'Ellograph Thin';
    text-decoration: none;
    font-size: 1.2rem;
    color: var(--accent-hex);
}
</style>
