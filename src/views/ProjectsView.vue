<template>
  <div class="container-fluid">
    <div class="projects" >
      <h1 class="heading">3. Projects</h1>
      <hr class="horizontal-line"/>
      <div class="container-fluid">
        <div class="row" v-for="project, index in featuredProjects" :key="project.id">
          <div class="col-md-6">
            <div class="project" v-if="arrangeProjects(index)" v-animate="'slide-up'">
              <div class="project-info">
                <span class="text-success">Featured Project</span>
                <h5 class="title">{{ project.title }}</h5>
                <p class="description" v-for="item in project.description" :key="item">{{ item }}</p>
                <p class="tools">
                  <small class="text-muted">Tools: 
                    <span v-for="tool in project.tools" :key="tool" class="pill">{{ tool }} </span>
                  </small>
                </p>
                <div class="project-links">
                  <a :href="project?.github" v-if="project.github"><font-awesome-icon class="icon" :icon="['fab', 'github']" size="xl"/></a>
                  <a :href="project?.demo" v-if="project.demo"><font-awesome-icon class="icon" :icon="['fa', 'link']" size="xl"/></a>
                </div>
              </div>
            </div>
            <img v-else class="img-fluid project-img" :src="require(`@/assets/images/${project.image}`)"/>
          </div>
            <div class="col-md-6">
              <img class="img-fluid project-img" :src="require(`@/assets/images/${project.image}`)" v-if="arrangeProjects(index)" />
              <div class="project" v-else>
              <div class="project-info">
                <span class="text-success">Featured Project</span>
                <h5 class="title">{{ project.title }}</h5>
                <p class="description" v-for="item in project.description" :key="item">{{ item }}</p>
                <p class="tools">
                  <small class="text-muted">Tools: 
                    <span v-for="tool in project.tools" :key="tool" class="pill">{{ tool }} </span>
                  </small>
                </p>
                <div class="project-links">
                  <a :href="project?.github" v-if="project.github"><font-awesome-icon class="icon" :icon="['fab', 'github']" size="xl"/></a>
                  <a :href="project?.demo" v-if="project.demo"><font-awesome-icon class="icon" :icon="['fa', 'link']" size="xl"/></a>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
      <NoteWorthyProjects :projects="noteWorthyProjects"/>
    </div>
  </div>
</template>
  
  <script>
  import NoteWorthyProjects from '@/components/NoteWorthyProjects.vue';
  export default {
    name: 'ProjectsView',
    components: {
      NoteWorthyProjects
    },
    data() {
      return {
        featuredProjects : [
          {
            id: "rootjobs",
            title: "Rootjobs.com",
            image: "rootjobs.png",
            description: [
              "A Online Employment Platform for people seeking jobs and the employers who need great people",
            "Support api for integrating with other vendors based on django rest framework",
            ],
            tools: [
              "Python",
              "Django",
              "PostgresSQL",
              "React",
              "Django Rest Framework"
            ]
          },
          {
            id: "portfolio",
            title: "Portfolio",
            image: "dev-portfolio.png",
            description: [
              "A portfolio website that offers a seamless user experience to browse my work and get in touch.",
              "1. Responsive Design: The website should have a responsive design to ensure that it is easily accessible and user-friendly across different devices and screen sizes.",
              "2. Project Showcase: The projects should be showcased prominently on the website.",
              "3. Contact Form: Provide users with an option to get in touch with you through a contact form.",
            ],
            tools: [
              "Vue",
              "Bootstrap",
              "jQuery",
              "Firebase"
            ],
            github: "https://github.com/raja-velichety/dev-portfolio.git",
            demo: "https://raja-velichety-portfolio.web.app/"
          },
          {
            id: "trackks-footwear",
            title: "Trackks Footwear",
            image: "trackks.png",
            description: [
              "1. Responsive Design: The website should have a responsive design to ensure that it is easily accessible and user-friendly across different devices and screen sizes.",
              "2. User Feedback: A survey can be included on the website to collect user feedback. Use a tool like Survey Monkey to create and distribute the survey. This will help you gather valuable insights and feedback from your customers, which you can use to improve your collection and website.",
              "3. Footwear Collection Showcase",
              "4. Donation Options",
              "5. Preview Video",
            ],
            tools: [
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "jQuery",
              "Firebase"
            ],
            github: "https://github.com/raja-velichety/trackks-footwear.git",
            demo: "https://trackksfootwear-24d7d.web.app/"
          },
          {
            id: "hotel-kamat",
            title: "Hotel Kamat",
            image: "hotel-kamat.png",
            description: [
              "a hotel kamat responsive single page application built with Angular, Bootstrap, jQuery can offer a seamless user experience while making it easy for customers access restaurant information, and get in touch with restaurant staff."
            ],
            tools: [
              "HTML",
              "CSS",
              "Angular",
              "Bootstrap",
              "jQuery",
              "Firebase"
            ],
            github: "https://github.com/raja-velichety/hotel-kamat.git",
            demo: "https://hotel-kamat.web.app/",
          }
        ],

        noteWorthyProjects : [
          {
            title: "Assistive Chatbot",
            description: [
              "Assistive chatbot application built for managing the office staff queries and issues.",
            ],
            tools: [
              "React",
              "Node",
              "Express",
              "MongoDB",
            ],
            github: "https://github.com/raja-velichety/assistive-chatbot.git",
          },
          {
            title: "Crop disease detection App",
            description: [
              "An android app which assists farmers in disease detection in crops and suggests several techniques and cultivation ideas for better crop production and welfare of farming community."
            ],
            tools: [
              "Android",
              "Java",
              "Python",
              "Tensorflow",
              "Keras",
              "Flask",
            ],
            github: "",
          },
          {
            title: "Comparelaptops.in",
            description: [
              "A laptop comparison platform along with affiliate product listings and support for price comparison.",
            ],
            tools: [
              "Angular",
              "Node",
              "Express",
              "MongoDB",
              "AWS"
            ],
            github: "https://github.com/raja-velichety/compare-laptops.git",
          },
          {
            title: "ShopperSite",
            description: [
              "A ecommerce shopping platform provides the user with a catalog of different product available for purchase in the store. In order to facilitate online purchase a shopping cart is provided to the user along with payment options and order confirmation."
            ],
            tools: [
              "Angular",
              "Node",
              "Express",
              "MongoDB",
              "AWS"
            ],
            github: "https://github.com/raja-velichety/ShopperSite.git",
          },
          {
            title: "Sentimental Analysis on Global warming",
            description: [
              "Sentimental analysis of tweets regarding the affects of global warming to classify them into positive or negative using Apache Pig and Hadoop."
            ],
            tools: [
              "Apache Pig",
              "Hadoop",
              "Python"
            ],
            github: "https://github.com/raja-velichety/sentimental-analysis.git",
          },
          {
            title: "Ecommerce Store",
            description: [
              "A complete ecommerce responsive website and SEO friendly optimized website and it also features a PayPal payment gateway integration"
            ],
            tools: [
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "jQuery",
              "PHP",
              "MySQL",
            ],
            github: "https://github.com/raja-velichety/ecommerce-store.git",
          },
          {
            title: "Machine learning Java algorithms",
            description: [
              "Machine learning algorithms implemented in Java"
            ],
            tools: [
              "Java",
              "Machine Learning"
            ],
            github: "https://github.com/raja-velichety/machine-learning-java.git",
          },
          {
            title: "Sentimental Analysis on Affects of Demonetization in india",
            description: [
              "Sentimental analysis of tweets regarding the affects of demonetization in india to classify them into positive or negative using Apache Pig and Hadoop."
            ],
            tools: [
              "Python",
              "Apache Pig",
            ],
            github: "https://github.com/raja-velichety/sentimental-analysis-demonetisation.git",
          },
          {
            title: "Machine learning Python algorithms",
            description: [
              "Machine learning algorithms implemented in Python"
            ],
            tools: [
              "Python",
              "Machine Learning"
            ],
            github: "https://github.com/raja-velichety/machine-learning-algorithms-python.git",
          },
          {
            title: "Trackks footwear",
            description: [
              "A responsive website for a footwear collection that showcases the collection and provides users with an option to donate to the cause that the collection supports."
            ],
            tools: [
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "jQuery",
            ],
            github: "https://github.com/raja-velichety/trackks-footwear.git",
          },
          
        ]
      }
    },
    methods: {
      arrangeProjects(index) {
        if(index % 2 == 0) {
          return true;
        } else {
          return false;
        }
      }
    }

  }
  </script>

<style scoped>
.projects {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

.title {
  font-size: 1.5rem;
  font-weight: 600;
  font-weight: bold;
}

.text-success {
  font-size: smaller;
}

.pill {
  background-color: #0e7eee;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 10%;
  margin: 0.5rem;
}

.row {
  margin-bottom:4rem;
}

.img-fluid {
  border: 1px solid #c6c0c0;
  border-radius: 5px;
}

.fade-in {
  transform: translateY(40%);
  transition:all 1s ease-out;
}

.icon {
  color: #fff;
  padding: 1rem;
}

.project-links {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 1rem;
}

@media screen and (max-width: 768px) {
  .project-info {
 word-wrap: break-word; 
  }
}
</style>