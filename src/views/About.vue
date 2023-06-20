<script setup>
const descriptors = ["Creative", "Thoughtful", "Adaptable", "Passionate"];
const roles = ["Developer", "Designer", "Problem Solver", "Puzzle Master", "Lvl 100 Mob Boss"];
</script>

<template>
    <section class="about">
        <div class="about-header">
            <VueWriter :array="descriptors" class="descriptors"></VueWriter>
            <VueWriter :array="roles" class="descriptors"></VueWriter>
        </div>
        <div class="about-body">
            <p>Hi, I'm Lauren [she/her] - a web designer & engineer based in Dallas.</p>
            <h3>The Team Player</h3>
            <p>I strive to foster a collaborative environment where I actively engage with my team by asking questions, even those that may be considered less conventional, in order to stimulate diverse perspectives and encourage innovative problem-solving. Rather than relying on hierarchical power or job titles, I prioritize the group's collective efforts and aim to facilitate the discovery of optimal solutions.</p>
            <h3>The Freelancer</h3>
            <p>With a focus on design and Web UI, I work to produce creative and innovative solutions that are highly usable and thoughtful.</p>
            <a href="src/assets/DossLauren_Resume.pdf" target="_blank">View Resume</a>
        </div>
        <div class="about-footer footer">
            <p>Questions? Comments? Magic the Gathering strategies? Interested in working together?</p><router-link to="/contact">Get in touch...</router-link>
        </div>
    </section>
</template>

<style scoped>
@import url(../style.css);
.descriptors {
    font-size: 3rem;
}

h2 {
    line-height: 50%;
}

h3 {
    color: var(--accent-btn-hex);
}

h4 {
    color: var(--accent-hex);
}

p {
    font-family: 'Ellograph Thin';
    font-size: 1.2rem;
}

a {
    text-transform: uppercase;
}
</style>
