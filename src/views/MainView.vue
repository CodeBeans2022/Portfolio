<template>
  <div id="spinnerView" v-if="!spinner">
    <Spinner />
  </div>
  <div v-else>
    <NavBar />
    <div class="home" id="home">
      <div class="container">
        <div class="row" v-for="item in this.home" :key="item.homeID">
          <div class="col textGlow" id="headings">
            <h2 id="greeting" data-aos="zoom-in" data-aos-duration="2000">{{ item.greeting }}</h2>
            <h3 data-aos="zoom-in-up" data-aos-duration="2000">{{ item.occupation }}</h3>
          </div>
        </div>
      </div>
    </div>
    <About />
    <Resume />
    <Projects />
    <Testimonials/>
    <ContactMe />
    <FooterComp />
  </div>
</template>
    
<script>
import NavBar from '@/components/NavBar.vue'
import About from '@/components/About.vue'
import Resume from '@/components/Resume.vue'
import Projects from '@/components/Projects.vue'
import Testimonials from '@/components/Testimonials.vue'
import ContactMe from '@/components/ContactMe.vue'
import FooterComp from '@/components/Footer.vue'
import Spinner from '@/components/Spinner.vue'
import AOS from 'aos'
AOS.init();
export default {
  components: {
    About,
    Resume,
    Projects,
    Testimonials,
    ContactMe,
    NavBar,
    FooterComp,
    Spinner
  },
  computed: {
    home() {
      return this.$store.state.homePage
    },
    spinner() {
      return this.$store.state.spinner
    }
  },
  created() {
      this.$store.dispatch('fetchHomePage');
  }
}
</script>
    
<style scoped>
#spinnerView {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
  background-image: url('../assets/myimage.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

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


@media only screen and (max-width: 600px) {
  #headings {
    color: rgb(109, 75, 109);
    margin-top: 120px;
  }

  #headings h2 {
    font-size: 2rem;
  }

  #headings h3 {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 700px) {
  #headings h2 {
    font-size: 3rem;
  }

  #headings h3 {
    font-size: 1.5rem;
  }
}
</style>
    