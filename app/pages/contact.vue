<script setup lang="ts">
definePageMeta({ layout: 'default' })
useSeoMeta({
  title: `Contact — ${PROFILE.name}`,
  description: `Get in touch with ${PROFILE.name} — ${PROFILE.description}.`,
})

const [emailLocal, emailDomain] = PROFILE.email.split('@')
</script>

<template>
  <section class="contact">
    <PageHeader>
      <div>Contact</div>
    </PageHeader>
    <div class="contact-container shadow-box">
      <div class="contact-header">
        <h1>Let's Build Something Awesome Together!</h1>
        <h2>Get in Touch</h2>
      </div>
      <div class="contact-body">
        <div class="contact-group">
          <a target="_blank" :href="`mailto:${PROFILE.email}?subject=Let's work together`" class="email">{{ emailLocal }}<font-awesome-icon icon="fa-solid fa-at" />{{ emailDomain }}</a>
          <div class="icon-group">
            <a target="_blank" :href="SOCIAL_LINKS.github"><font-awesome-icon icon="fa-brands fa-github" class="contact-icon" /></a>
            <a target="_blank" :href="SOCIAL_LINKS.linkedin"><font-awesome-icon icon="fa-brands fa-linkedin" class="contact-icon" /></a>
            <a target="_blank" :href="SOCIAL_LINKS.figma"><font-awesome-icon icon="fa-brands fa-figma" class="contact-icon" /></a>
            <a target="_blank" :href="SOCIAL_LINKS.twitter"><font-awesome-icon icon="fa-brands fa-twitter" class="contact-icon" /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-footer footer">
      <Footer>
        <p>Let's chat! You can find me here as well: </p>
        <div class="footer-icon-group">
          <a target="_blank" :href="SOCIAL_LINKS.discord"><font-awesome-icon icon="fa-brands fa-discord" size="xl" class="footer-icon"></font-awesome-icon></a>
          <a target="_blank" :href="SOCIAL_LINKS.steam"><font-awesome-icon icon="fa-brands fa-steam" size="xl" class="footer-icon"></font-awesome-icon></a>
          <a target="_blank" :href="SOCIAL_LINKS.spotify"><font-awesome-icon icon="fa-brands fa-spotify" size="xl" class="footer-icon"></font-awesome-icon></a>
        </div>
      </Footer>
    </div>
  </section>
</template>

<style scoped>
.contact {
  max-width: 700px;
}

.contact-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin: 0 auto;
  max-width: 500px;
  background-color: var(--primary-shade);
  color: var(--neutral-shade);
}

.contact-header {
  text-align: center;
  width: 100%;
}

.contact-header > h1 {
  font-size: 2rem;
  margin-bottom: 0.4em;
}

.contact-header > h2 {
  font-size: 1.4rem;
  color: var(--accent-shade);
}

.email {
  font-size: 1rem;
  margin-bottom: 1em;
  margin-top: -0.4em;
  color: var(--accent-shade-light)
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
  background-color: var(--accent-shade);
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
  color: var(--primary-shade-dark);
}

.contact-icon {
  font-size: 2rem;
  color: var(--primary-shade);
  filter: drop-shadow(1px 1px 0px var(--primary-shade-dark)) drop-shadow(2px 2px 0px var(--primary-shade-dark));
}

.contact-icon:hover {
  filter: none;
  transition: filter 0.1s ease-in;
}
</style>
