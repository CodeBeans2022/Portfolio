<template>
    <div>
      <div class="container">
        <div class="row" v-for="item in this.homePage" :key="item.homeID">
          <div class="col">
            <img id="homeImg" :src="item.homeImg" alt="">
          </div>
          <div class="col" id="headings">
            <h2 id="greeting">{{ item.greeting }}</h2>
            <h3>{{ item.occupation }}</h3>
          </div>
        </div>
      </div>
    </div>
    </template>
    
    <script>
    
    export default {
      computed: {
        homePage() {
          return this.$store.state.homePage
        }
      },
      created() {
        this.$store.dispatch('fetchHomePage');
      }
    }
    </script>
    
    <style scoped>
    #headings {
      margin-top: 250px;
    }
  
      #greeting {
        color: black;
      }
  
      #homeImg {
        height: 500px;
      }
    </style>
    