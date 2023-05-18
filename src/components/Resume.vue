<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Work</h1>
                </div>
            </div>
            <div class="row" v-for="item in this.work" :key="item.WorkID">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">{{ item.company }}</h2>
                            <h3 class="card-subtitle">{{ item.occupation }}</h3>
                            <h3 class="card-subtitle">{{ item.duration }}</h3>
                            <h3 class="card-subtitle">{{ item.location }}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h1>Education</h1>
                </div>
            </div>
            <div class="row" v-for="item in this.education" :key="item.EducationID">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">{{ item.institution }}</h2>
                            <h3 class="card-subtitle">{{ item.course }}</h3>
                            <h3 class="card-subtitle">{{ item.duration }}</h3>
                            <h3>{{ item.location }}</h3>
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
            work() {
                return this.$store.state.work
            },
            education() {
                return this.$store.state.education
            }
        },
        created() {
            this.$store.dispatch('fetchWork');
            this.$store.dispatch('fetchEducation');
        }
    }
    </script>
    
    <style scoped>
    .card{
        border: 1px solid black;
        border-radius: 20px;
        margin: 10px 0;
    }
    </style>
    