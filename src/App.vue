<template>
  <div class="container-fluid">
    <top-nav class="top-bar"/>
    <div class="row">
      <side-nav class="col-md-2 col-xs-12" id="side-nav"/>
      <div class="views col-md-10  col-xs-12">
        <home-view class="content"/>
        <about-view class="content" id="about-section"/>
        <experience-view class="content" id="experience-section"/>
        <projects-view class="content" id="projects-section"/>
        <contact-view class="content" id="contact-section"/>
        <side-nav class="col-xs-12" id="footer" v-if="isMobile"/>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import SideNav from './components/SideNav.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ExperienceView from './views/ExperienceView.vue';
import ProjectsView from './views/ProjectsView.vue';
import ContactView from './views/ContactView.vue';

export default {
  name: 'App',
  components: {
    TopNav,
    SideNav,
    HomeView,
    AboutView,
    ExperienceView,
    ProjectsView,
    ContactView,
  },
  created(){  
    this.isMobile();
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
@media screen and (max-width: 800px) {
  #side-nav, #right-bar {
      display: none;
  }

  .content {
    margin-bottom: 1rem;
  }

  #footer {
    margin-bottom: 4rem;
  }
}
 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #dcdcea;
  background-color: #1e1e1e;
}

.top-nav{
  display: flex;
  align-content: space-around;
  justify-content: flex-end;
}

.top-nav a {
  font-weight: bold;
  color: #dcdcea;
  margin: 0 10px;
  display: inline-block;
  text-decoration-line: none;
}

.content {
  min-height: 100vh;
  display: flex;
  padding: 1rem;
}

.views {
  overflow-y: scroll;
  height: 100vh;
}

.heading {
  font-size: 2rem;
  font-weight: 500;
  color: #dcdcea;
  text-decoration: none;
}

.horizontal-line {
  width: 100%;
  border: 1px solid rgb(77, 63, 63);
}

@media screen and (min-width: 800px) {
 #footer {
  display: none;
 }
}
</style>
