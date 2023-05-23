<template>
  <div class="home" id="home">
    <div class="container">
      <div class="row" v-for="item in this.home" :key="item.homeID">
        <!-- <div class="col">
          <img id="homeImg" :src="item.homeImg" alt="">
        </div> -->
        <div class="col" id="headings">
          <h2 id="greeting">{{ item.greeting }}</h2>
          <h3>{{ item.occupation }}</h3>
        </div>
      </div>
    </div>
    <div class="ani">
      <ul class="animation">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul class="animations">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
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
  .home {
    position: relative;
    background-image: url('https://i.postimg.cc/5NvPPhgY/myimage.png') ;
    /* box-shadow: inset 170px 150px 300px #000000, inset -170px -150px 300px #000000; */
    background-repeat: no-repeat;
    background-size: cover;
  }

  .ani {
    position: absolute;
  }
    .container {
      min-height: 100vh;
    }

    #headings {
      color: rgb(245, 244, 245);
      margin-top: 70px;
    }

    #headings h2 {
      font-size: 6rem;
    }

    #headings h3 {
      font-size: 3rem;
    }

    #greeting h2:nth-child(11) {
      color: blueviolet;
    }

    .animation {
    top: 0%;
    right: 0%;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .animation li {
    position: fixed;
    display: block;
    background: rgba(0, 217, 255, 0.544);
    list-style: none;
    animation: animate 15s linear infinite;
    width: 30px;
    height: 30px;
    border-radius: 150px !important;
    bottom: -60px;
  }

  .animation li:nth-child(1) {
    right: 16.7%;
    height: 100px;
    width: 100px;
    animation-delay: 3s;
  }

  .animation li:nth-child(2) {
    right: 25%;
    height: 35px;
    width: 35px;
    animation-delay: 2s;
  }

  .animation li:nth-child(3) {
    right: 50%;
    height: 15px;
    width: 15px;
    animation-delay: 1s;
  }

  .animation li:nth-child(4) {
    right: 80%;
    height: 55px;
    width: 55px;
    animation-delay: 5s;
  }

  .animation li:nth-child(5) {
    right: 5%;
    height: 20px;
    width: 20px;
    animation-delay: 4;
  }

  .animation li:nth-child(6) {
    right: 99%;
    height: 38px;
    width: 38px;
    animation-delay: 3s;
  }

  .animation li:nth-child(7) {
    right: 60%;
    height: 63px;
    width: 63px;
    animation-delay: 0s;
  }

  .animation li:nth-child(8) {
    right: 36%;
    height: 5px;
    width: 5px;
    animation-delay: 5s;
  }

  .animation li:nth-child(9) {
    right: 40%;
    height: 33px;
    width: 33px;
    animation-delay: 3s;
  }

  .animation li:nth-child(10) {
    right: 58%;
    height: 14px;
    width: 14px;
    animation-delay: 3s;
  }

  .animation li:nth-child(11) {
    right: 69.5%;
    height: 40px;
    width: 40px;
    animation-delay: 4s;
  }

  .animation li:nth-child(12) {
    right: 12%;
    height: 40px;
    width: 40px;
    animation-delay: 4s;
  }

  .animation li:nth-child(13) {
    right: 59%;
    height: 28px;
    width: 28px;
    animation-delay: 2s;
  }

  .animation li:nth-child(14) {
    right: 30%;
    height: 28px;
    width: 28px;
    animation-delay: 4s;
  }

  .animation li:nth-child(15) {
    right: 87%;
    height: 20px;
    width: 20px;
    animation-delay: 5s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(360deg);
      opacity: 0;

    }
  }

  .animations {
    top: 0%;
    right: 0%;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .animations li {
    position: fixed;
    display: block;
    background: rgba(91, 32, 108, 0.544);

    list-style: none;
    animation: animate 15s linear infinite;
    width: 30px;
    height: 30px;
    border-radius: 150px !important;
    bottom: -60px;
  }

  .animations li:nth-child(1) {
    right: 16.7%;
    height: 100px;
    width: 100px;
    animation-delay: 9s;
  }

  .animations li:nth-child(2) {
    right: 25%;
    height: 35px;
    width: 35px;
    animation-delay: 7s;
  }

  .animations li:nth-child(3) {
    right: 50%;
    height: 15px;
    width: 15px;
    animation-delay: 5s;
  }

  .animations li:nth-child(4) {
    right: 80%;
    height: 55px;
    width: 55px;
    animation-delay: 13s;
  }

  .animations li:nth-child(5) {
    right: 5%;
    height: 20px;
    width: 20px;
    animation-delay: 11s;
  }

  .animations li:nth-child(6) {
    right: 99%;
    height: 38px;
    width: 38px;
    animation-delay: 9s;
  }

  .animations li:nth-child(7) {
    right: 60%;
    height: 63px;
    width: 63px;
    animation-delay: 5s;
  }

  .animations li:nth-child(8) {
    right: 36%;
    height: 5px;
    width: 5px;
    animation-delay: 13s;
  }

  .animations li:nth-child(9) {
    right: 40%;
    height: 33px;
    width: 33px;
    animation-delay: 9s;
  }

  .animations li:nth-child(10) {
    right: 58%;
    height: 14px;
    width: 14px;
    animation-delay: 9s;
  }

  .animations li:nth-child(11) {
    right: 69.5%;
    height: 40px;
    width: 40px;
    animation-delay: 11s;
  }

  .animations li:nth-child(12) {
    right: 12%;
    height: 40px;
    width: 40px;
    animation-delay: 11s;
  }

  .animations li:nth-child(13) {
    right: 59%;
    height: 28px;
    width: 28px;
    animation-delay: 7s;
  }

  .animations li:nth-child(14) {
    right: 30%;
    height: 28px;
    width: 28px;
    animation-delay: 11s;
  }

  .animations li:nth-child(15) {
    right: 87%;
    height: 20px;
    width: 20px;
    animation-delay: 13s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(360deg);
      opacity: 0;

    }
  }
  </style>
  