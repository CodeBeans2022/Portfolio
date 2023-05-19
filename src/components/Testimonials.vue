<template>
    <div>
        <div class="container">
            <div class="row" v-for="item in this.testimonials" :key="item.testimonialID">
                <div class="col">
                     <div class="card">
                        <div class="card-body">
                            <img :src="item.reviewerImg" class="card-img-top" alt="">
                            <h2 class="card-title">{{ item.fullName }}</h2>
                            <p>{{ item.testimonial }}</p>                  
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
          .container {
        min-height: 100vh;
      }
    .card{
        border: 1px solid black;
        border-radius: 20px;
        margin: 10px 0;
    }
    </style>
    