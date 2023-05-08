<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"/>
  <!-- <div class="container">  -->
  <top-nav/>
    <div class="seperation">
      <side-nav class="links"/>
      <router-view class="content"/>
    </div>
  <!-- </div> -->
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import SideNav from './components/SideNav.vue';

export default {
  name: 'App',
  components: {
    TopNav,
    SideNav,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.container-fluid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
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

.top-nav a.router-link-exact-active {
  color: #42b983;
}

.seperation {
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  margin: 2rem 2rem;
  }

.content {
  justify-content: center;
}
</style>
