import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import VueWriter from "vue-writer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

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
import { faDAndD, faDAndDBeyond, faSpotify, faLinkedin, faGithub, faTwitter, faFigma } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faBrain, faStar, faStarRegular, faCake, faCookieBite, faGamepad, faBook, faDAndD, faPenRuler, faHammer, faDiceD20, faDAndDBeyond, faSpotify, faLinkedin, faGithub, faTwitter, faAt, faFigma, faThumbTack);

createApp(App)
.use(router)
.use(VueWriter)
.use('font-awesome-icon', FontAwesomeIcon)
.use('font-awesome-layers', FontAwesomeLayers)
.use('font-awesome-layers-text', FontAwesomeLayersText)
.mount('#app')
