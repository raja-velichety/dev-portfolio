<template>
    <div class="top-nav">
        <div class="logo">R</div>

        <div class="menu">
            <router-link to="/">1. Home</router-link> |
            <router-link to="/about">2. About</router-link>
            <router-link to="/experience">3. Experience</router-link>
            <router-link to="/projects">4. Projects</router-link>
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
}
</style>