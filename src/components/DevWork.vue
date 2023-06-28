<script setup>
import Card from './Card.vue';
</script>

<template>
    <div class="dev-work work-container">
        <Card 
            projectName="Quick Neon Signs"
            imageUrl="quickneondesigner.png"
            imageAltText="Screenshot of the custom neon sign designer from QuickNeonSigns.com. Left screen shows preview for neon sign selections with glowing pink sci-fi font that says 'HIRE ME!'"
            descText="Web page built with HTML, CSS, and JavaScript that allows customers of a neon sign shop design their own custom signs with ability to preview the text, font, color, and size live."
            roleText="Designer & Developer"
         />
         <Card 
         projectName="Bardic Works App"
         imageUrl="bard-old-inspire.png"
         imageAltText="Screenshot of a web app with purple background and yellow letters 'Bardic Works'. There is a container in the center of the page that has two tabs, 'Inspire' and 'Insult'. The 'Inspire' tab is active and displays text saying 'Inspire your comrades or yourself with Bardic Inspiration!'. Beneath the text there are two buttons stacked - a secondary 'Options' button and a primary 'Inspire Me!' button."
         descText="Personal tool app created using Vue, TypeScript, and SCSS to provide everything a successful Bard would need during their adventures in Dungeons and Dragons. I originally built this tool during the pandemic in Vue 2, the new (Vue 3) version of this app with extended features is currently in the design iteration phase, so check back later!"
         roleText="Designer & Developer"
      />
    </div>
</template>

<style scoped></style>