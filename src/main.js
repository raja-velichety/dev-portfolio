import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import { faFolder } from '@fortawesome/free-regular-svg-icons'
//side nav icons for social media and github
library.add(faLinkedin, faGithub, faInstagram, faFolder)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
