<template>
    <div id="testimonials">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1 class="heading m-5">Testimonials</h1>
                </div>
            </div>
            <div class="row" v-for="item in this.testimonials" :key="item.testimonialID">
                <div class="col">
                     <div class="card">
                        <div class="card-body">
                            <img :src="item.reviewerImg" class="card-img-top" id="reviewerImg" alt="">
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
          /* .container {
        
      } */

      #reviewerImg {
        height: 500px;
        width: 500px;
        object-fit: cover;
        grid-column: span 2;
      }

      #testimonials {
        scroll-margin: 15px;
        min-height: 100vh;
      }

      .heading {
        font-size: 5rem;
      }
    .card{
        border: 1px solid black;
        border-radius: 20px;
        margin: 10px 0;
    }

    .card-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
    </style>
    