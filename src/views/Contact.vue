<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Footer from '../components/Footer.vue';
</script>

<template>
    <section class="contact">
        <div class="contact-container">
            <div class="contact-header">
                <h1>Let's Build Something Awesome Together!</h1>
                <h2>Get in Touch</h2>
            </div>
            <div class="contact-body">
                <div class="contact-group">
                    <a target="_blank" href="mailto:laurendoss@devforge.dev?subject=Let's work together" class="email">laurendoss<font-awesome-icon icon="fa-solid fa-at" />devforge.dev</a>
                    <div class="icon-group">
                        <a target="_blank" href="https://github.com/Code-Hime"><font-awesome-icon icon="fa-brands fa-github" class="contact-icon" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/lauren-grills-76484893/"><font-awesome-icon icon="fa-brands fa-linkedin" class="contact-icon" /></a>
                        <a target="_blank" href="https://www.figma.com/@himecchi"><font-awesome-icon icon="fa-brands fa-figma" class="contact-icon" /></a>
                        <a target="_blank" href="https://twitter.com/code_hime"><font-awesome-icon icon="fa-brands fa-twitter" class="contact-icon" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-footer footer">
            <Footer>
                <p>Let's chat! You can find me here as well: </p>
                <div class="footer-icon-group">
                    <a target="_blank" href="https://discordapp.com/users/himecchi"><font-awesome-icon icon="fa-brands fa-discord" size="xl" class="footer-icon"></font-awesome-icon></a>
                    <a target="_blank" href="https://steamcommunity.com/id/pinkrangerhime/"><font-awesome-icon icon="fa-brands fa-steam" size="xl" class="footer-icon"></font-awesome-icon></a>
                    <a target="_blank" href="https://www.dndbeyond.com/members/Himecchi"><font-awesome-icon icon="fa-brands fa-d-and-d-beyond" size="2xl" class="footer-icon"></font-awesome-icon></a>
                </div>
            </Footer>
        </div>
    </section>
</template>

<style scoped>
@import url('../style.css');

.contact-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin: 0 auto;

    border-radius: 12px;
    border: 2px solid var(--neutral-shade);
    box-shadow: 4px 4px var(--neutral-shade);

    background-color: var(--accent-shade);
    color: var(--neutral-shade);
}

.contact-header {
    text-align: center;
    width: 100%;
}

.contact-header > h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.contact-header > h2 {
    font-size: 1.4rem;
}

.email {
    font-size: 1.2rem;
}

.contact-group {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

    font-size: 1.4rem;
}

.icon-group {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 8px 0;

    border-top: 1px solid var(--neutral-shade);
    background-color: var(--accent-shade-light);
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}

.fa-layers {
    position: relative;
}

.footer-icon-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.footer-icon {
    color: var(--neutral-shade);
}

.contact-icon {
    font-size: 2rem;
    color: var(--primary-shade);
    filter: drop-shadow(1px 1px 0px var(--neutral-shade)) drop-shadow(2px 2px 0px var(--neutral-shade));
}

.contact-icon:hover {
    filter: none;
    transition: filter 0.1s ease-in;
}
</style>
