import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import VueWriter from "vue-writer";
import { library } from '@fortawesome/fontawesome-svg-core';


/* import specific icons */
import 
    { 
        faBrain, 
        faStar, 
        faCake, 
        faCookieBite, 
        faGamepad, 
        faBook, 
        faPenRuler, 
        faHammer,
        faDiceD20,
        faAt,
        faThumbTack 
    } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faDAndD, faDAndDBeyond, faSpotify, faLinkedin, faGithub, faTwitter, faFigma, faDiscord, faSteam } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faBrain, faStar, faStarRegular, faCake, faCookieBite, faGamepad, faBook, faDAndD, faPenRuler, faHammer, faDiceD20, faDAndDBeyond, faSpotify, faLinkedin, faGithub, faTwitter, faAt, faFigma, faThumbTack, faDiscord, faSteam);

createApp(App)
.use(router)
.use(VueWriter)
.mount('#app')
