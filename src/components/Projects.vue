<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            
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
        created() {
            this.$store.dispatch('fetchProjects');
        }
    }
    </script>
    
    <style scoped>

    </style>
    