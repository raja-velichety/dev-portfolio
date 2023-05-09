<template>
    <div class="container-fluid" id="experience-section">
      <div class="experience">
      <h1 class="heading">2. I have worked before:</h1>
      <hr class="horizontal-line"/>
      <div class="experience-tabs">
        <div class="row">
          <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Bank ozk innovation labs</a>
              <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">University Communications, EMU</a>
              <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Syscon International</a>
              <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">University Communications,EMU</a>
              <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">University Communications, Eastern Michigan University</a>
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
    methods: {
      activeClass: function (...names) {
        for (let name of names) {
          if (name == this.$route.name)
            return 'active';
        }
      }
    }    
  }
  </script>

<style>
.experience {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .experience .heading {
    font-size: 2rem;
    font-weight: 500;
    color: black;
    text-decoration: none;
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

  .nav-link {
    color: black;
    background-color: aquamarine;
  }

  .nav-link::before {
    color: green;
    content: "";
  }

  .navbar-nav > .active > a { 
    background-color: aquamarine ; 
}
</style>