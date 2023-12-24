<template>
    <div class="container-fluid" id="experience-section">
      <div class="col-md-10 col-xs-12">
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
              "Involved in all stages of Software Development Life Cycle like Application Design, Development, Debugging and testing the applications.",
              "Created webhooks for integrating content management system with the azure build pipelines",
              "Developed complex components for contentstack cms using react",
              "Worked alongside other developers to develop Graphql api for integration contentstack cms to bankOzk website using Gatsby",
              "Designed and developed save on a schedule application workflow based on Vuejs",
              "Developed backend api for online banking application based on architect  - secure banking system built using .net",
              "Supported release management using azure pipelines",
              "Designed and developed  customizable email marketing system",
              "Rewrote several parts of online banking application to support react migration",
              "Developed test cases and performed unit testing using Jest for mobile online banking application built using react",
              "Converted React class components to functional components using hooks: useCallback, useMemo, useState, useEffect",
              "Performed design and code reviews to ensure best practices and high-quality code.",
            ],
            date: 'July 2022 - April 2023',
          },
          { 
            id: "job2",
            title: 'Full Stack Web Developer',
            company: 'University Communications, EMU', 
            description: [
              "Collaborated with marketing and department heads to unify the websites by building custom reusable components in react",
              "Designed and developed custom dynamic forms which are used for managing social media handles",
              "Developed and refactored several react components for UC dashboard application which is used to manage all the requests and ticketing system of university communications",
              "Participated in design and code reviews ensuring best practices and guidelines are met",
              "Collaborated with Physical plant department in upgrading and bug fixing critical vue application for efficiency",
              "Developed backend api in laravel for dashboard application and data integration",
              "Developed Django backend api for internal management project",
            ],
            date: 'Feb 2022 - June 2022',
          },
          { 
            id: "job3",
            title: 'Software Engineer',
            company: 'Syscon International', 
            description: [
              "Developed machine production data import and export functionalities using CSV files to handle large amounts of data efficiently.",
              "Facilitated api design and development for enterprise product (Plant Star) with Django rest api framework.",
              "Involved with bug fixing on functionality, performance and designing issues",
              "Facilitated design and code reviews to ensure best practices and high-quality code.",
              "Developed views and templates with Python and Django view controllers and templating language to create a user-friendly application interface.",
              "Migrated crucial parts of the application from Python 2.x To 3.x version.",
              "Worked with AWS services like S3, EC2, Lambda for deploying and managing of plantstar application",
              "Design, develop and test HTML5, CSS3, Bootstrap, jQuery and javascript that meets accessibility and web browser standards for Plantstar website.",
              "Implemented alongside other developers - Npm and Web pack setup for building and automating processes such as linting, pre/post Git, commit hooks, prod/dev environment.",
            ],
            date: 'Dec 2020 - Feb 2022',
          },
          { 
            id: "job4",
            title: 'Full Stack Web Developer',
            company: 'University Communications, EMU', 
            description: [
              "Incorporated animations and user-friendly tables with pagination to optimize physical plant app performance and enhance user experience.",
              "Developed customizable search feature for searching and filtering dean's list application which can be used with other services as well",
              "Developed and fulfilled feature requests by several departments within the university.",
              "Migrated legacy system from plain js to vue 2 and developed several reusable components for unified design",
              "Implemented backend development through symphony 2 framework.",
              "Constructed highly interactive, responsive and reusable components with React and Styled Component.",
          ],
            date: 'Sep 2020 - December 2020',
            isActive: false
          },
          {
            id: "job5",
            title: 'Full Stack Web Developer Graduate Assistant',
            company: 'University Communications, EMU', 
            description: [
              "Created internal social media web application front end as per design comps, accessibility and information architecture using Laravel, HTML5, CSS3, Javascript, Bootstrap, and jQuery.",
              "Developing and designing new web applications for Eastern Michigan University.",
              "Developed and fulfilled feature requests by several departments within the university.",
              "Developed interactive and reusable vue.js components for Physical Plant application",
              "Migrated legacy application to React which increased the performance of the internal management application.",
              "Managed and maintained backend using php",
              "Developed responsive university websites using foundation",
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

    

    .nav-item:active {
      background-color: rgba(240, 248, 255, 0.856);
    }

  @media screen and (min-width: 800px) {
    .nav-item:hover {
      border-left: 3px solid #dcdcea;
    }
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

  .nav-item:hover {
    border-bottom: 3px solid #dcdcea;
  }
}
</style>