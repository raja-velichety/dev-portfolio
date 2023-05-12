<template >
  <div class="container-fluid">
    <div class="home col-md-10 col-xs-12">
      <terminal-card>
        <p class="tag">Hello, I'm</p>
        <h1 class="title">Raja ravichandra Velichety.</h1>
        <h2 class="tagline">I build things for the web.</h2>
        <p class="description">I'm a Software Engineer with a
            passion for building software solutions that make a difference. I love challenges and work with cross functional teams to build something big and beautiful </p>
        <button class="btn btn-outline-success btn-lg" v-on:click="openpdf()">Resume</button>
      </terminal-card>
    </div>
  </div>
</template>

<script>
import TerminalCard from '@/components/TerminalCard.vue';
export default {
  name: 'HomeView',
  components: {
    TerminalCard,
  },
  methods: {
    openpdf() {
      window.open('https://drive.google.com/file/d/19RjuXBrrDhHC27Mn2hOPd-r0rKap7ngs/view?usp=share_link');
    }
},
};
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  }

  .home .btn {
    max-width: fit-content;
  }
</style>

