<template>
  <div class="container-fluid" id="about-section">
    <div class="about col-md-10 col-xs-12">
      <h1 class="heading">1.About Me</h1>
      <hr class="horizontal-line"/>
      <div class="container-fluid about-info">
        <div class="row">
          <div class="col-md-9">
            <div class="description">
              <p v-for="item in profile.description" :key="item">{{ item }}</p>
            </div>
            <div class="skills">
              {{ profile.skills_header }}
              <small class="text-muted">
                <ul class="skill-list">
                  <li v-for="skill in profile.skills" :key="skill">{{ skill }}</li>
                </ul>
              </small>
            </div>
          </div>
          <div class="col-md-3">
            <img :src="require(`@/assets/images/${profile.image}`)" alt="profile" class="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'AboutView',
  data(){
    return {
      profile: {
        image: "profile.jpg",
        description: [
          "Hello!!! I'm Raja, It all started with a simple hello world program in C, I was fascinated on how it worked and by the fact  that I could build something that could be used by others. Since then, I have been learning and building things that I am passionate about.",
          "I pursued my Masters in Computer Science from Eastern Michigan University, Michigan, USA. I have worked on various projects ranging from building a simple student registration web application to building a full fledged online employment solution for people seeking jobs and the employers who need great people. Also worked on building a simple machine learning model to currently working on a crop disease detection and cure prediction machine learning model.",
          "I have a passion for learning and sharing my knowledge with others as possible.", 
        ],
        skills_header: "Here are a few technologies I’ve been working with recently:",
        skills: [
          "Python",
          "JavaScript",
          "React",
          "Vue",
          "Node",
          "Django",
          "Azure",
          "AWS Lambda and EC2",
        ]
      }

    }
  },
}
</script>

<style>
#about-section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .about-info{
    background-color: black;
    padding: 1rem;
    word-wrap: break-word;
  }

  .skill-list {
    column-count: 2;
    padding: 1rem;
    color: rgb(228, 241, 230);
  }

  ul {
    list-style-type: circle;
  }
</style>

