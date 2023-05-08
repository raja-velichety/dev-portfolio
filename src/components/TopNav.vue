<template>
    <div class="top-nav">
        <div class="logo">
            <router-link to="/" class="named-logo">RV</router-link>
        </div>
        <div class="menu">
            <router-link to="/about">1. About</router-link> |
            <router-link to="/experience">2. Experience</router-link> |
            <router-link to="/projects">3. Projects</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: "TopNav",
}
</script>

<style scoped>
.top-nav {
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

.named-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    text-decoration: none;
}
</style>