<template>
  <top-nav/>
  <router-view/>
</template>

<script>
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'App',
  components: {
    TopNav
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
</style>
