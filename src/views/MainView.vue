<template>
    <div>
      <Home/>
      <About/>
      <Resume/>
      <Projects/>
      <Testimonials/>
      <ContactMe/>
      <NavBar/>
      <FooterComp/>
    </div>
    </template>
    
    <script>
    import NavBar from '@/components/NavBar.vue'
    import Home from '@/components/Home.vue'
    import About from '@/components/About.vue'
    import Resume from '@/components/Resume.vue'
    import Projects from '@/components/Projects.vue'
    import Testimonials from '@/components/Testimonials.vue'
    import ContactMe from '@/components/ContactMe.vue'
    import FooterComp from '@/components/Footer.vue'
    export default {
      components: {
        Home, 
        About,
        Resume,
        Projects,
        Testimonials,
        ContactMe,
        NavBar,
        FooterComp
      }
    }
    </script>
    
    <style scoped>
  
    </style>
    