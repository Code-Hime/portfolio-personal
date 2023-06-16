<script setup>

</script>

<template>
    <section class="contact">
        <div class="contact-header">
            <h1>Let's Build Something Together!</h1>
            <h3>Get in Touch</h3>
        </div>
        <div class="contact-list">
            <a target="_blank" href="mailto:laurendoss@devforge.dev?subject=Let's work together">laurendoss@devforge.dev</a>
            <a target="_blank" href="tel:2819108934">281.910.8934</a>
        </div>
    </section>
</template>

<style scoped>
.contact-header {
    width: 60%;
}

h1 {
    font-size: 3rem;
}

.contact-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.contact-list a {
    font-family: 'Ellograph Thin';
    text-decoration: none;
    font-size: 1.2rem;
}
</style>
