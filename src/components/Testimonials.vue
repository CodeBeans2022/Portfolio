<template>
    <div>
        <div class="container">
            <div class="row" v-for="item in this.testimonials" :key="item.testimonialID">
                <div class="col">
                     <div class="card">
                        <div class="card-body">
                            <img :src="item.reviewerImg" class="card-img-top" alt="">                  
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
            testimonials() {
                return this.$store.state.testimonials
            }
        },
        created() {
            this.$store.dispatch('fetchTestimonials')
        }
    }
    </script>
    
    <style scoped>

    </style>
    