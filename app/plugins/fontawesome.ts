import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import {
  faBrain,
  faStar,
  faCake,
  faCookieBite,
  faBreadSlice,
  faGamepad,
  faBook,
  faHatWizard,
  faPenRuler,
  faHammer,
  faDiceD20,
  faAt,
  faThumbTack,
  faCode
} from '@fortawesome/free-solid-svg-icons'

import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import {
  faDAndD,
  faDAndDBeyond,
  faSpotify,
  faLinkedin,
  faGithub,
  faTwitter,
  faFigma,
  faDiscord,
  faSteam,
  faVuejs,
  faJs,
  faHtml5,
  faCss3Alt
} from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(
  faBrain, 
  faStar, 
  faStarRegular, 
  faCake, 
  faCookieBite,
  faBreadSlice,
  faGamepad,
  faBook,
  faHatWizard,
  faDAndD,
  faPenRuler, 
  faHammer, 
  faDiceD20, 
  faDAndDBeyond, 
  faSpotify, 
  faLinkedin, 
  faGithub, 
  faTwitter, 
  faAt, 
  faFigma, 
  faThumbTack, 
  faDiscord,
  faSteam,
  faCode,
  faVuejs,
  faJs,
  faHtml5,
  faCss3Alt
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
