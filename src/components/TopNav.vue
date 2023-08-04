<template>
<nav class="top-nav navbar navbar-expand-lg" v-bind:class=" { 'navbarOpen': show }">    
    <div class="logo navbar-brand">
        <router-link to="/" class="named-logo">RV</router-link>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click.stop="toggleNavbar()">
        <span class="navbar-toggler-icon">
            <font-awesome-icon :class="['icon']" :icon="['fa',  'bars']" size="lg"/>
        </span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
        <ul class="navbar-nav my-2 my-lg-0">
            <div  v-for="link in links" :key="link" class="nav-item">
                <a :href="link.href" key="{{ link.name }}" class="nav-link">{{link.name}}</a>
            </div>
        </ul>
        <button class="btn btn-outline-success btn-lg resume ms-auto" v-on:click="openpdf()">Resume</button>
    </div>
</nav>
</template>

<script>

export default {
    name: "TopNav",
    data() {
        return {
            links: [
                { name: "About", href: "#about-section" },
                { name: "Experience", href: "#experience-section" },
                { name: "Projects", href: "#projects-section" },
            ],
            show: false,
        }
    },
    methods: {
        toggleNavbar() {
            this.show = !this.show
        },
        openpdf() {
        window.open('https://drive.google.com/file/d/1ioNgRtoguCFMVP3I6QJJZTzZEZD5sTBL/view?usp=sharing');
        }
    }
  }
</script>

<style scoped>
@media screen and (min-width: 800px) {
    .top-nav {
        padding-left:5rem;
        padding-right:5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: flex;
        justify-content: space-between;
    }
}
.named-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #dcdcea;
    text-decoration: none;
}

.logo {
    display: flex;
    align-items: center;
    border: #dcdcea solid 1px;
    transition: all 0.5s ease-in-out;
}

.nav-link:hover {
  border-bottom: 2px solid #dcdcea;
  color: #dcdcea;
}

.icon {
    color: #dcdcea;
}

.resume {
    display: flex;
    align-content: space-around;
    justify-content: flex-end;
    align-self: flex-end;
    border: #dcdcea solid 1px;
    color: #dcdcea;
    transition: all 0.5s ease-in-out;
}
</style>