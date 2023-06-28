<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Footer from '../components/Footer.vue';
import { useMedia } from '../useMedia.js';

const isMobile = useMedia("(max-width: 768px)");
const isDesktop = useMedia("(min-width: 1200px)")

const descriptors = ["a Creative", "a Thoughtful", "an Adaptable", "a Passionate"];
const roles = ["Developer", "Designer", "Problem Solver", "Puzzle Master", "Lvl 100 Mob Boss"];
</script>

<template>
    <section class="about">
        <div class="about-body">
            <div class="mobile--about-header">
                <div class="header-text">About</div>
            </div>
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
                                <div class="question">Title: </div>
                                <div class="answer">Full Stack Dev</div>
                            </div>
                            <div class="qa-item single-line">
                                <div class="question">Located: </div>
                                <div class="answer">Dallas, TX</div>
                            </div>
                            <div class="qa-item single-line">
                                <div class="question">Pronouns: </div>
                                <div class="answer">She/Her</div>
                            </div>
                            <div class="qa-item single-line">
                                <div class="question">Nickname: </div>
                                <div class="answer">Hime</div>
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
                                    </div>
                                </div>
                            </div>
                            <div class="skill-item single-line">
                                <div class="name">HTML + CSS</div>
                                <div class="level-container">
                                    <div class="level" style="width:80%;">
                                    </div>
                                </div>
                            </div>
                            <div class="skill-item single-line">
                                <div class="name">JavaScript</div>
                                <div class="level-container">
                                    <div class="level" style="width:70%;">
                                    </div>
                                </div>
                            </div>
                            <div class="skill-item single-line">
                                <div class="name">C#</div>
                                <div class="level-container">
                                    <div class="level" style="width:90%;">
                                    </div>
                                </div>
                            </div>
                            <div class="skill-item single-line">
                                <div class="name">Figma</div>
                                <div class="level-container">
                                    <div class="level" style="width:50%;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bio-sect-no-header bio-typing col">
                        <div class="bio-sect-head-text">
                            <div class="message-text">I'm Lauren </div>
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
                                <div class="answer">
                                    <span>
                                        <font-awesome-icon icon="fa-solid fa-cookie-bite" size="xl"></font-awesome-icon>
                                    </span> Cooking & Baking</div>
                            </div>
                            <div class="qa-item full-width-line single-line">
                                <div class="answer">
                                    <span><font-awesome-icon icon="fa-solid fa-gamepad" size="xl"></font-awesome-icon></span> Virtual & Tabletop Games <span><font-awesome-icon icon="fa-brands fa-d-and-d" size="xl"></font-awesome-icon></span>
                                </div>
                            </div>
                            <div class="qa-item full-width-line single-line">
                                <div class="answer"><span><font-awesome-icon icon="fa-solid fa-book" size="xl"></font-awesome-icon></span> Sci-Fi & Fantasy</div>
                            </div>
                            <div class="qa-item full-width-line single-line">
                                <div class="answer"><span><font-awesome-icon icon="fa-solid fa-pen-ruler" size="xl"></font-awesome-icon></span> Drawing & Crafting <span><font-awesome-icon icon="fa-solid fa-hammer" size="xl"></font-awesome-icon></span></div>
                            </div>
                        </div>
                    </div>
                    <button v-if="isMobile || isDesktop" class="resume-btn accent-btn">
                        <a href="src/assets/DossLauren_Resume.pdf" target="_blank">View Resume</a>
                    </button>
                </div>
                <div v-if="!isMobile && !isDesktop" class="row row-4">
                    <button class="resume-btn accent-btn">
                        <a href="src/assets/DossLauren_Resume.pdf" target="_blank">View Resume</a>
                    </button>
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

.resume-btn {
    width: 100%;
    background-color: var(--success-shade);
    text-align: center;
    margin-bottom: 8px;
}

.resume-btn a {
    font-family: 'Ellograph Bold';
    font-size: 1.4rem;
    text-transform: uppercase;
    color: var(--neutral-shade);
    text-shadow: none;
    text-decoration: none;
}

.row-1 {
    padding-top: 12px;
}

.mobile--about-header {
    border-radius: 12px;
    background-color: var(--success-shade);
    border: 2px solid var(--neutral-shade);
    box-shadow: 4px 4px var(--neutral-shade);

    text-align: center;

    margin-bottom: 1rem;
}

.header-text {
    color: var(--neutral-shade);
    font-size: 2rem;
}

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
    flex-direction: column;
    gap: 20px;

    align-items: stretch;
}


.bio-img {
    width: 100%;

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
    width: 100%;

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



.bio-sect-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 20px;
    height: 100%;
    overflow: hidden;
}

.single-line {
    display: flex;
    flex-direction: row;

    gap: 8px;
    margin-bottom: 8px;
    align-items: center;

    text-align: center;
}

.question {
    font-family: Ellograph Bold;
    font-size: 1.2rem;
}

.answer {
    background-color: var(--accent-shade-light);
    padding: 2px 10px;
    border-radius: 20px;
    width: 60%;
    flex: 1;
}

.full-width-line .answer {
    background-color: var(--accent-shade-light);
    padding: 4px 12px;
    border-radius: 16px;
    width: 100%;
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

.bio-sect-no-header {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--accent-shade-light);

    display: flex;
    flex-direction: column;

    border: 2px solid var(--neutral-shade);
}

.bio-typing {
    text-align: center;
    text-wrap: pretty;
    overflow: hidden;
}

.typing {
    font-size: 1.4rem;
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

/* Tablets/iPads */

@media (min-width: 481px) and (max-width:768px) {
    .bio-container {
        width: 80vw;
    }
    
    .col {
        width: 100%;
    }

    .bio-sect-head-text {
        width: 100%;
    }

    .bio-typing {
        width: 50%;
        align-self: center;
    }
}

/* Small Screen/Laptop */
@media (min-width: 769px) and (max-width: 1200px) {
    .bio-container {
        width: 80vw;
        height: 100vh;
    }

    .row {
        flex-direction: row;
        height: 25vh;
    }

    .bio-typing {
        width: 60%;
        padding: 0;
    }

    .bio-sect {
        height: 100%;
    }

    .row-2,
    .row-3 {
        height: 100%;
    }
    .row-4 {
        height: 10%;
    }

    .bio-img {
        width: 50%;
    }

    .footer {
        width: 60%
    }

}

/* XL/TV */
@media (min-width: 1201px) {
    .bio-container {
        width: 50vw;
    }

    .row {
        flex-direction: row;
        height: 25vh;
    }

    .bio-typing {
        width: 50%;
        align-self: center;
        height: 86%;
    }

    .message-text {
        font-size: 2.4rem;
    }

    .typing {
        font-size: 2rem;
    }

    .resume-btn {
        width: 40%;
    }

    .footer {
        width: 60%;
    }

    .bio-sect {
        gap: 8px;
    }

    .bio-img {
        width: 40%;
    }
}
</style>
