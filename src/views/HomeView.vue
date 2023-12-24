<template >
  <div class="container-fluid">
    <div class="home col-md-10 col-xs-12">
      <terminal-card>
        <p class="tag">{{ intro.tag }}</p>
        <h1 class="title">{{ intro.title }}</h1>
        <h2 class="tagline text-success">{{ intro.tagline }}</h2>
        <p class="description col-md-8 col-xs-12" v-for="item in intro.description" :key="item">{{ item }}</p>
      </terminal-card>
    </div>
    <right-bar class="col-md-2 col-xs-12" id="right-bar"/>
</div>
</template>

<script>
import TerminalCard from '@/components/TerminalCard.vue';
import RightBar from '@/components/RightBar.vue';

export default {
  name: 'HomeView',
  components: {
    TerminalCard,
    RightBar
  },
  data() {
    return {
      intro: {
        tag: 'Hello, I\'m',
        title: 'Raja ravichandra Velichety',
        tagline: 'I Bring ideas to life on the web',
        description: [
          "Software engineer with 5.5 years of full stack development experience. Committed to delivering high-quality solutions and exceptional user experiences. Seeking a challenging role to drive innovation and contribute to dynamic development projects. Proficient in JavaScript (React, Vue), TypeScript, GraphQL, Python Django, C#, cloud services (AWS, Azure), PHP, HTML, CSS, Bootstrap, and Foundation.",
      ],
      },
    };
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
    color: #fff;
  }

  .home .btn {
    max-width: fit-content;
  }
</style>

