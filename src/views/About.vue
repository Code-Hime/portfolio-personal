<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Footer from '../components/Footer.vue';

const descriptors = ["a Creative", "a Thoughtful", "an Adaptable", "a Passionate"];
const roles = ["Developer", "Designer", "Problem Solver", "Puzzle Master", "Lvl 100 Mob Boss"];
</script>

<template>
    <section class="about">
        <div class="about-body">
            <div class="bio-container">
                <div class="row row-1">
                    <div class="col bio-img">
                        <img src="../assets/portrait.jpg" class="bio-portrait" />
                    </div>
                    <div class="col bio-sect bio-basic">
                        <div class="bio-sect-header">
                            <div class="bio-sect-head-text">Basics:</div>
                        </div>
                        <div class="bio-sect-content">
                            <div class="qa-item single-line">
                                <div class="question">Nickname: </div>
                                <div class="answer">Hime</div>
                            </div>
                            <div class="qa-item single-line">
                                <div class="question">Pronouns: </div>
                                <div class="answer">She/Her</div>
                            </div>
                            <div class="qa-item single-line">
                                <div class="question">Age: </div>
                                <div class="answer">32</div>
                            </div>
                            <div class="qa-item single-line">
                                <div class="question">Location: </div>
                                <div class="answer">Dallas, Texas</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-2">
                    <div class="col bio-sect bio-skills">
                        <div class="bio-sect-header">
                            <div class="bio-sect-head-text">Skills:</div>
                        </div>
                        <div class="bio-sect-content">
                            <div class="skill-item single-line">
                                <div class="name">VueJS</div>
                                <div class="level-container">
                                    <div class="level" style="width:50%;">
                                        <font-awesome-layers class="fa-layers fa-fw fa-lg level-marker">
                                            <font-awesome-icon icon="fa-solid fa-star" :style="{color:'yellow'}" />
                                            <font-awesome-icon icon="fa-regular fa-star" :style="{color:'black'}" />
                                        </font-awesome-layers>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-item single-line">
                                <div class="name">HTML + CSS</div>
                                <div class="level-container">
                                    <div class="level" style="width:80%;">
                                        <font-awesome-layers class="fa-layers fa-fw fa-lg level-marker">
                                            <font-awesome-icon icon="fa-solid fa-star" :style="{color:'yellow'}" />
                                            <font-awesome-icon icon="fa-regular fa-star" :style="{color:'black'}" />
                                        </font-awesome-layers>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-item single-line">
                                <div class="name">JavaScript</div>
                                <div class="level-container">
                                    <div class="level" style="width:70%;">
                                        <font-awesome-layers class="fa-layers fa-fw fa-lg level-marker">
                                            <font-awesome-icon icon="fa-solid fa-star" :style="{color:'yellow'}" />
                                            <font-awesome-icon icon="fa-regular fa-star" :style="{color:'black'}" />
                                        </font-awesome-layers>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-item single-line">
                                <div class="name">C#</div>
                                <div class="level-container">
                                    <div class="level" style="width:90%;">
                                        <font-awesome-layers class="fa-layers fa-fw fa-lg level-marker">
                                            <font-awesome-icon icon="fa-solid fa-star" :style="{color:'yellow'}" />
                                            <font-awesome-icon icon="fa-regular fa-star" :style="{color:'black'}" />
                                        </font-awesome-layers>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-item single-line">
                                <div class="name">Figma</div>
                                <div class="level-container">
                                    <div class="level" style="width:50%;">
                                        <font-awesome-layers class="fa-layers fa-fw fa-lg level-marker">
                                            <font-awesome-icon icon="fa-solid fa-star" :style="{color:'yellow'}" />
                                            <font-awesome-icon icon="fa-regular fa-star" :style="{color:'black'}" />
                                        </font-awesome-layers>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bio-sect-no-header bio-typing col">
                        <div class="bio-sect-head-text">
                            <div class="message-text">Hi, I'm Lauren - </div>
                            <VueWriter :array="descriptors" class="typing descriptors"></VueWriter>
                            <VueWriter :array="roles" class="typing roles"></VueWriter>
                        </div>
                    </div>
                </div>
                <div class="row row-3">
                    <div class="col bio-sect bio-likes">
                        <div class="bio-sect-header">
                            <div class="bio-sect-head-text">Interests:</div>
                        </div>
                        <div class="bio-sect-content">
                            <div class="qa-item full-width-line single-line">
                                <font-awesome-icon icon="fa-solid fa-cookie-bite" size="xl"></font-awesome-icon>
                                <div class="answer">Cooking & Baking</div>
                            </div>
                            <div class="qa-item full-width-line single-line">
                                <div class="answer">Virtual & Tabletop Gaming</div>
                                <font-awesome-icon icon="fa-brands fa-d-and-d" size="xl"></font-awesome-icon>
                                <font-awesome-icon icon="fa-solid fa-gamepad" size="xl"></font-awesome-icon>
                            </div>
                            <div class="qa-item full-width-line single-line">
                                <font-awesome-icon icon="fa-solid fa-book" size="xl"></font-awesome-icon>
                                <div class="answer">Reading Sci-Fi & Fantasy</div>
                            </div>
                            <div class="qa-item full-width-line single-line">
                                <div class="answer">Drawing & Making</div>
                                <font-awesome-icon icon="fa-solid fa-pen-ruler" size="xl"></font-awesome-icon>
                                <font-awesome-icon icon="fa-solid fa-hammer" size="xl"></font-awesome-icon>
                            </div>
                        </div>
                    </div>
                    <div class="col bio-sect bio-persona">
                        <div class="bio-sect-header">
                            <div class="bio-sect-head-text">Extras:</div>
                        </div>
                        <div class="bio-sect-content">
                            <div><a href="src/assets/DossLauren_Resume.pdf" target="_blank">View Resume</a></div>
                        </div>
                    </div>
                </div>
            </div>

<!--        <h3>The Team Player</h3>
            <p>I strive to foster a collaborative environment where I actively engage with my team by asking questions, even those that may be considered less conventional, in order to stimulate diverse perspectives and encourage innovative problem-solving. Rather than relying on hierarchical power or job titles, I prioritize the group's collective efforts and aim to facilitate the discovery of optimal solutions.</p>
            <h3>The Freelancer</h3>
            <p>With a focus on design and Web UI, I work to produce creative and innovative solutions that are highly usable and thoughtful.</p>           
            <a href="src/assets/DossLauren_Resume.pdf" target="_blank">View Resume</a> --> 
        </div>
        <div class="about-footer footer">
            <Footer>
                <p>Questions? Comments? Magic the Gathering strategies? Interested in working together?</p><router-link to="/contact">Get in touch...</router-link>
            </Footer>
        </div>
    </section>
</template>

<style scoped>
@import url(../style.css);


.bio-container {
    display: flex;
    flex-direction: column;
    width: 70vw;
    gap: 20px;

    border-radius: 12px;
    border: 2px solid var(--neutral-shade);
    box-shadow: 4px 4px var(--neutral-shade);
    padding: 0.6em 1.2em;
    background-color: var(--accent-shade);
    color: var(--neutral-shade);
}

.row {
    display: flex;
    flex-direction: row;
    gap: 20px;
    height: 25vh;

    align-items: stretch;
}

.bio-img {
    width: 30%;
    grid-column: 1 / 2;

    display: flex;
    flex-direction: row;
    border: 2px solid var(--neutral-shade);
    border-radius: 8px;
}

.bio-portrait {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    transform: scaleX(-1);
}

.bio-sect {
    display: flex;
    flex-direction: column;
    width: 70%;

    border: 2px solid var(--neutral-shade);
    border-radius: 8px;
}

.bio-sect-header {
    width: 100%;
    min-height: 15%;
    background-color: var(--accent-shade-light);
    border-radius: 8px 8px 0px 0px;
    border-bottom: 2px solid var(--neutral-shade);
}

.bio-sect-head-text {
    padding: 8px;
}

.bio-sect-no-header {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--accent-shade-light);

    display: flex;
    flex-direction: column;
    width: 70%;

    border: 2px solid var(--neutral-shade);
}

.bio-sect-content {
    padding: 10px 20px;
}

.single-line {
    display: flex;
    flex-direction: row;

    gap: 8px;
    margin-bottom: 8px;
    align-items: center;
}

.question {
    font-family: Ellograph Bold;
    font-size: 1.2rem;
}

.answer {
    background-color: var(--accent-shade-light);
    padding: 2px 20px;
    border-radius: 20px;
    width: 60%;
    flex: 1;
}

.full-width-line .answer {
    background-color: var(--accent-shade-light);
    padding: 2px 20px;
    border-radius: 20px;
    width: 80%;
}

.bio-skills {
    width: 65%;
}

.name {
    font-family: Ellograph Bold;
}

.level-container {
    background-color: var(--neutral-shade);
    padding: 2px;
    border-radius: 20px;
    width: 60%;
    position: relative;
    vertical-align: center;
    flex: 1;
}

.level {
    background-color: var(--primary-shade);
    padding: 2px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    position: relative;
}

.level-marker {
    position: absolute;
    left: 95%;
    top: -200%;
}

.bio-typing {
    max-width: 35%;
    text-align: center;
    text-wrap: pretty;
    overflow: hidden;
}

.typing {
    font-size: 1.6rem;
    padding-top: 8px;
}

.descriptors {
    color: var(--primary-shade);
}

.message-text {
    font-size: 1.6rem;
    font-family: Ellograph Demi Bold;
    text-shadow: var(--primary-shade-60) 2px 2px;
}

@media (min-width: 1900px) {
    .bio-container {
        width: 50vw;
        height: 80vh;
    }

    .message-text {
        font-size: 2rem;
    }

    .typing {
        font-size: 2rem;
    }
}

@media (max-width: 1080px) {
    .bio-container {
        width: 90vw;
    }
}

@media (max-width: 769px) {
    .bio-container {
        width: 85vw;
    }

    .row {
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
    
    .col {
        width: 100%;
    }

    .bio-sect-head-text {
        width: 100%;
    }
    .bio-typing {
        max-width: 90%;
    }
}
</style>
