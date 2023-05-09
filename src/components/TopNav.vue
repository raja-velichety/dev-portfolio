<template>
    <div class="container-fluid">
    <div class="top-nav">
        <div class="logo">
            <router-link to="/" class="named-logo">RV</router-link>
        </div>
        <div  class="menu">
            <div  v-for="link in links" :key="link" class="link">
            <a :href="link.href" key="{{ link.name }}">{{link.name}}</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: "TopNav",
    data() {
        return {
            menuOpen: false,
            links: [
                { name: "About", href: "#about-section" },
                { name: "Experience", href: "#experience-section" },
                { name: "Projects", href: "#projects-section" },
            ],
        }
    },
  }
</script>

<style scoped>
.top-nav {
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

.menu {
  display: flex;
  align-content: space-around;
  justify-content: flex-end;
}

.named-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    text-decoration: none;
}
</style>