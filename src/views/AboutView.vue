<template>
  <div class="container-fluid" id="about-section">
    <div class="about col-md-10 col-xs-12">
      <h1 class="heading">1.About Me</h1>
      <hr class="horizontal-line"/>
      <div class="container-fluid about-info">
        <div class="row">
          <div class="col-md-9">
            <p class="description" v-for="item in profile.description" :key="item">{{ item }}</p>
            <p class="skills">
              Here are a few technologies I’ve been working with recently:
              <small class="text-muted">
                <ul class="skill-list">
                  <li v-for="skill in profile.skills" :key="skill">{{ skill }}</li>
                </ul>
              </small>
              </p>
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
          "I am a software engineer based in New York, NY specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.",
          "Currently, I am pursuing a Master's degree in Computer Science at New York University. I am also working as a software engineer at Rootjobs.com, a job search platform built with python, Django, MySQL, and AWS.",
          "I have a passion for learning and sharing my knowledge with others a public as possible. If you found value in something I have created, please feel free to give me a shout out @yashwanthkumarshetty. I would love to hear from you!"
        ],
        skills: [
          "Python",
          "JavaScript",
          "React",
          "Django",
          "AWS",
          "Azure",
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
  }

  ul {
    list-style-type: circle;
  }
</style>

