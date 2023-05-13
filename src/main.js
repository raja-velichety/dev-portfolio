/* eslint-disable no-unused-vars */
import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import VueAnimate from 'vue-animate-scroll'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzw2-_RXD9dPlnwSZKnUHDfvm0M9lPhkk",
  authDomain: "raja-velichety-portfolio.firebaseapp.com",
  projectId: "raja-velichety-portfolio",
  storageBucket: "raja-velichety-portfolio.appspot.com",
  messagingSenderId: "1047169465300",
  appId: "1:1047169465300:web:cf65dd5cca8c3f1b883441",
  measurementId: "G-18T019EG79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//side nav icons for social media and github
library.add(faLinkedin, faGithub, faInstagram, faBars, faLink)

createApp(App).use(VueAnimate).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
