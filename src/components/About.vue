<template>
    <div>
        <div class="container">
            <div class="row" v-for="item in this.about" :key="item.aboutID">
                <div class="col">
                    <img :src="item.devImg" alt="">
                </div>
                <div class="col">
                    <p>{{ item.bio }}</p>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    
    export default {
        computed: {
           about() {
            return this.$store.state.details
           } 
        },
        created() {
            this.$store.dispatch('fetchDetails');
        }
    }
    </script>
    
    <style scoped>
      .container {
        min-height: 100vh;
      }    
    </style>
    