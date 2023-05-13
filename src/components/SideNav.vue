<template class="side-nav">
    <div class="container-fluid links">
        <div v-for="link in links" :key="link">
            <div class="nav-item">
                <a class="nav-link" :href=link.href><font-awesome-icon :class="['icon', link.name]" :icon="['fab',  link.name]" size="2xl"/></a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SideNav",
    data() {
        return {
            links: [
                { name: "github", href: "https://github.com/raja-velichety"},
                { name: "linkedin", href: "https://www.linkedin.com/in/raja-ravichandra-velichety-939893175"},
                { name: "instagram", href: "https://www.instagram.com/curioussoftwareengineer/"},
            ],
            show: false,
        }
    },
  }
</script>

<style scoped>   
@media screen and (min-width: 800px) {
    .links {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        margin-top: 10rem;
        margin-bottom: 10rem;
    }
}

@media screen and (max-width: 800px) {
    .links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
}

.icon {
    margin-top:1rem;
    margin-bottom: 1rem;
}

.github:hover {
    color: #000000;
}

.linkedin:hover {
    color: #0d4883;
}

.instagram:hover {
    color: #920a8b;
}

.nav-item:hover {
    color: #000000;
}
</style>