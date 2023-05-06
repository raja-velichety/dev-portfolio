<template>
  <link rel="stylesheet" href="fontawesome">
  <top-nav/>
  <div class="seperation">
    <side-nav class="links"/>
    <router-view class="content"/>
  </div>
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
  text-align: center;
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

.top-nav a.router-link-exact-active {
  color: #42b983;
}

.side-nav{
  display: flex;
  flex-direction: column;
  justify-self: center;
}

.seperation {
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  margin: 2rem 2rem;
  }

.content {
  align-items: center;
  justify-content: center;
}
</style>
