<template>
    <div class="container-fluid side-nav">
        <div class="links">
            <a href="https://github.com/raja-velichety"><font-awesome-icon class="icon" :icon="['fab', 'github']" size="2xl"/></a>
            <a href="https://www.linkedin.com/in/raja-ravichandra-velichety-939893175/"><font-awesome-icon class="icon" :icon="['fab', 'linkedin']" size="2xl"/></a>
            <a href="https://www.instagram.com/curioussoftwareengineer/"><font-awesome-icon class="icon" :icon="['fab', 'instagram']" size="2xl"/></a>
        </div>
    </div>
</template>

<style scoped>
.links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 10rem;
}

.icon {
    color:#000000;
    margin-top:1rem;
    margin-bottom: 1rem;
}
</style>