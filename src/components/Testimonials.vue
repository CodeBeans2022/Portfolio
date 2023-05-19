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
    