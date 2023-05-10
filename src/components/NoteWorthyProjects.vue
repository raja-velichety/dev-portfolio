<template>
    <div class="container-fluid">
        <div class="col-md-12 text-center">
            <h3 class="heading">Other NoteWorthy Projects</h3>
            <hr class="horizontal-line"/>
        </div>
        <div class="container-fluid" >
            <div class="row">
                <ProjectCard class="col-md-3 col-xs-12 project-card" v-for="project in projects" :key="project.id" :project="project"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
export default {
    name: 'NoteWorthyProjects',
    components: {
        ProjectCard,
    },
    data() {
        return {
        }
    },
    props: {
        projects: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.project-card {
    margin: 1rem;
}
</style>
