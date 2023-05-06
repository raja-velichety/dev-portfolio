<template>
  <top-nav/>
  <router-view/>
</template>

<script>
import TopNav from '@/components/TopNav.vue'

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
  flex-direction: row;
  align-content: space-around;
  background-color: aliceblue;
}

.top-nav .logo {
  font-size: 30px;
  font-weight: bold;
  color: #42b983;
  margin-right: 10px;
  justify-content: flex-start;
}

.top-nav .menu {
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
