<template>
  <div class="home" id="home">
    <div class="container">
      <div class="row" v-for="item in this.home" :key="item.homeID">
        <!-- <div class="col">
          <img id="homeImg" :src="item.homeImg" alt="">
        </div> -->
        <div class="col textGlow" id="headings">
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
      home() {
        return this.$store.state.homePage
      }
    },
    created() {
      this.$store.dispatch('fetchHomePage');
    }
  }
  </script>
  
  <style scoped>

.textGlow {
  text-align: center;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e395e6, 0 0 40px #e395e6, 0 0 50px #e395e6, 0 0 60px #e395e6, 0 0 70px #e395e6;
  }
  
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #b966a5, 0 0 40px #b966a5, 0 0 50px #b966a5, 0 0 60px #b966a5, 0 0 70px #b966a5a6, 0 0 80px #b966a5;
  }
}

  .home {
    background-image: url('https://i.postimg.cc/5NvPPhgY/myimage.png') ;
    /* box-shadow: inset 170px 150px 300px #000000, inset -170px -150px 300px #000000; */
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
  }

    /* .container {

    } */

    #headings {
      color: rgb(109, 75, 109);
      margin-top: 170px;
    }

    #headings h2 {
      font-size: 6rem;
    }

    #headings h3 {
      font-size: 3rem;
    }
  </style>
  