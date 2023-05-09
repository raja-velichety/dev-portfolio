<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"/>
  <div class="container-fluid" data-spy="scroll" data-target=".navbar" data-offset="50" > 
    <top-nav class="top-bar"/>
    <div class="row">
      <side-nav class="links col-md-2 col-xs-12"/>
      <div class="views col-md-10  col-xs-12" data-spy="scroll" data-target=".top-bar">
        <home-view class="content"/>
        <about-view class="content" id="about-section"/>
        <experience-view class="content" id="experience-section"/>
        <projects-view class="content" id="projects-section"/>
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

export default {
  name: 'App',
  components: {
    TopNav,
    SideNav,
    HomeView,
    AboutView,
    ExperienceView,
    ProjectsView
  },
  // mounted() {
  //   let jqueryScript = document.createElement('script');
  //   jqueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js');
  //   document.head.appendChild(jqueryScript);

  //   let bootstrapScript = document.createElement('script');
  //   bootstrapScript.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js');
  //   document.head.appendChild(bootstrapScript);
  // },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.top-nav{
  display: flex;
  align-content: space-around;
  justify-content: flex-end;
}

.top-nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  display: inline-block;
  text-decoration-line: none;
}

.content {
  height: 100vh;
  display: flex;
}

.views {
  overflow-y: scroll;
  height: 100vh;
}
</style>
