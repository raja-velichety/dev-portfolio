<template>
  <div class="container-fluid">
    <div class="home">
      <h1 class="title">Raja ravichandra Velichety.</h1>
      <h2 class="tagline">I build things for the web.</h2>
      <p class="description">I'm a Software Engineer with a
          passion for building software solutions that make a difference. I love challenges and work with cross functional teams to build something big and beautiful </p>
      <button class="btn btn-outline-success btn-lg">Resume</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10rem;
  }

  .home .title {
    font-size: 3rem;
    font-weight: bold;
  }

  .home .tagline {
    font-size: 2rem;
    font-weight: 500;
    color: rgb(96, 92, 92);
  }

  .home .description {
    font-size: 1.2rem;
    font-weight: 300;
    color: black;
  }

  .home .btn {
    max-width: fit-content;
  }
</style>

