<template>
    <div class="container-fluid" id="experience-section">
      <div class="experience">
      <h1 class="heading">2. I have worked before:</h1>
      <hr class="horizontal-line"/>
      <div class="experience-tabs">
        <div class="row">
          <div class="col-md-3 col-xs-12 experience-tablist">
            <ul class="nav" style="flex: 0 0 auto;" v-for="job,index in jobs" :key="job">
              <li class="nav-item">
                <a class="nav-link" v-on:click="selectJob(index)">{{ job.company }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-9 col-xs-12 experience-info">
              <div :id="selectedJob.id">
                <h4>{{ selectedJob.title }}</h4>
                <p>{{ selectedJob.date }}</p>
                <div class="col-xs-12">
                  <ul>
                    <li class="list-box" v-for="item in selectedJob.description" :key="item">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ExperienceView',
    components: {
    },
    mounted() {
      this.selectedJob = this.jobs[0];
    },
    data() {
      return {
        selectedJob: {},
        isActive: false,
        jobs: [
          { 
            id: "job1",
            title: 'Software Engineer II',
            company: 'Bank ozk innovation labs', 
            description: [
              "Involved with bug fixing on functionality, performance and designing issues.",
              "Participated in design and code reviews to ensure best practices and high-quality code.",
              "Developed custom components and functionality based on react and vue.",
              "Supported release management and task creation for sprints.",
              "Provided support for contentstack and helped solve common bottlenecks faced by clients."
            ],
            date: 'July 2022 - April 2023',
          },
          { 
            id: "job2",
            title: 'Full Stack Web Developer',
            company: 'University Communications, EMU', 
            description: [
              "Designed and developed custom dynamic forms which are used for managing social media handles as required.",
              "Developed and fulfilled feature requests by several departments within the university.",
              "Collaborated with marketing and department heads to unify the websites by building custom reusable components",
              "Participated in design and code reviews ensuring best practices and guidelines are met",
              "Collaborated with Physical plant department in upgrading and bug fixing critical vue application for efficiency"
            ],
            date: 'Feb 2022 - June 2022',
          },
          { 
            id: "job3",
            title: 'Software Engineer',
            company: 'Syscon International', 
            description: [
              "Facilitated API design and development for enterprise product (Plant Star) with Django rest api framework",
              "Involved with bug fixing on functionality, performance and designing issues",
              "Facilitated design and code reviews to ensure best practices and high-quality code"
            ],
            date: 'Dec 2020 - Feb 2022',
          },
          { 
            id: "job4",
            title: 'Full Stack Web Developer',
            company: 'University Communications, EMU', 
            description: [
              "Developed and fulfilled feature requests by several departments within the university",
              "Maintained and migrated legacy system from symphony to django in backend",
              "Migrated legacy system from plain js to vue 2 and developed several reusable components for unified design",
              "Implemented backend development through symphony 2 framework."
            ],
            date: 'Sep 2020 - December 2020',
            isActive: false
          },
          {
            id: "job5",
            title: 'Full Stack Web Developer intern',
            company: 'University Communications, EMU', 
            description: [
              "Developing and designing new web applications for Eastern Michigan University.",
              "Developed and fulfilled feature requests by several departments within the university."
            ],
            date: 'Sep 2019 - April 2020',
            isActive: false
          },
          {
            id: "job6",
            title: "Research Graduate Assistant",
            company: "Eastern Michigan University", 
            description: [
              "Built an autonomous self-driving RC car and hacked into the working of the car for demonstrating security loopholes.",
              "A demonstrative research project, a python based can hat hacking and Driver data analysis using the machine learning algorithms MLP, KNN etc. for recognizing the driving patterns and distinguishing between the authorized driver and some other. thereby notifying the owner about theft of the car or anomalies occurred."
            ],
            date: 'Sep 2018 - June 2019',
            isActive: false
          }
        ]
      }
    },
    methods: {
      selectJob(index) {
          this.selectedJob = this.jobs[index];
          this.selectJob.isActive = true;
      }
    }    
  }
  </script>

<style scoped>
.experience {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .experience .horizontal-line {
    width: 100%;
    border: 1px solid rgb(77, 63, 63);
  }
  
  .experience .experience-tabs {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

    .nav-item:hover {
      border-left: 3px solid #dcdcea;
    }

    .nav-item:active {
      background-color: rgba(240, 248, 255, 0.856);
    }

  @media screen and (max-width: 800px){
  .experience-tablist {
    display: flex;
    overflow: scroll;
    flex-wrap: nowrap;
    width: 400px;
    padding:1rem;
  }

  a.nav-link:active {
    background-color: aliceblue;
  }
}
</style>