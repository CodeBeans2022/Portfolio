<template>
    <div>
        <div class="container">
            <div class="row" v-for="item in this.projects" :key="item.projectsID">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <img :src="item.siteImg" class="card-img-top" alt="">
                            <h2 class="card-title">{{ item.projectName }}</h2>
                            <a :href="item.githubLink" class="card-link">Github</a>
                            <a :href="item.netlifyLink" class="card-link">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    
    export default {
        computed: {
            projects() {
                return this.$store.state.projects
            }
        },
        async created() {
            console.log('comp')
           await this.$store.dispatch('fetchProjects');
            console.log('comp')

        }
    }
    </script>
    
    <style scoped>

    </style>
    