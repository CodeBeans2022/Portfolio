<template>
    <div id="testimonials">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1 class="heading m-5">Testimonials</h1>
                </div>
            </div>
            <div class="row m-4" id="testi" v-for="item in this.testimonials" :key="item.testimonialID">
                <div class="col">
                            <img :src="item.reviewerImg" id="reviewerImg" alt="">
                </div>
                <div class="col">
                    <h2>{{ item.fullName }}</h2>
                </div>
                <div class="col">
                    <p>{{ item.testimonial }}</p>                  
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

    #testi {
        background: rgba(143, 63, 189, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
    padding: 20px;
    }
    </style>
    