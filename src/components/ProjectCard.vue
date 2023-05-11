<template>
    <div class="card project-card container">
        <div class="header">
            <font-awesome-icon class="icon" :icon="['fab', 'github']" size="xl"/>
            <h3 class="heading">{{ project.title }}</h3>
        </div>
        <div class="body">
            <p class="description"> {{ project.description }}</p>
        </div>
        <div class="footer">
            <p class="tools">
                <small class="text-muted">
                    <span v-for="tool in project.tools" :key="tool" class="tool">{{ tool }} </span>
                </small>
            </p>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
    name: 'ProjectCard',
    components: {
    FontAwesomeIcon
},
    data() {
        return {
        }
    },
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

.project-card {
    background-color: #f7f7fa;
    border-radius: 10px;
    padding: 20px;
    color: rgb(0, 0, 0);
}

.tool {
    padding: 5px;
}

.heading {
    color: rgb(0, 0, 0);
    font-size: 24px;
}

.icon {
    margin-bottom: 1rem;
}
</style>