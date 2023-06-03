<template>
    <div class="spinner" v-if="!spinner">
        <Spinner/>
    </div>
    <div id="projects">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1 class="heading">Projects</h1>
                </div>
            </div>
            <div class="row" id="carRow">
                <div class="col">
                    <div class="carousel slide carousel-fade w-100"  id="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item"  :class="item.className" v-for="item in this.projects" :key="item.projectsID">
                                        
                                <img id="projImg" :src="item.siteImg" alt="">
                                        <h2 >{{ item.projectName }}</h2>
                                        <a :href="item.githubLink"><i class="bi bi-github" id="socialIcons"></i></a>
                                        <a :href="item.netlifyLink"><i class="bi bi-eye" id="socialIcons"></i></a>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel"
                            data-bs-slide="prev">
                            <i class="bi bi-arrow-bar-left" id="indicators" aria-hidden="true"></i>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel"
                            data-bs-slide="next">
                            <i class="bi bi-arrow-bar-right" id="indicators" aria-hidden="true"></i>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import Spinner from '@/components/Spinner.vue'
export default {
    components: {
        Spinner
    },
    computed: {
        projects() {
            return this.$store.state.projects
        },
        spinner() {
            return this.$store.state.spinner
        }
    },
    
    methods: {
        activeClass() {
            console.log('beans');
        let pushActive = [...document.querySelectorAll('carousel-item')];
        for (let i = 0; i < pushActive.length; i++) {
            pushActive[i].className = pushActive[i].className.replace("active", "");
            // event.target.classList.add("active");
        }
        }
    },
    created() {
        this.$store.dispatch('fetchProjects');
    }
}
</script>
    
<style scoped>
/* .container {
    
} */

.spinner{
    font-size: 40px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1;
    /* transform: translateY(-50%) translateX(-50%); */
}

#projects {
    scroll-margin: 65px;
    min-height: 100vh;
}

/* .carousel {
    height: 200px;
} */

.heading {
    font-size: 5rem;
}

.carousel {
    width: 60%;
}

.card {
    border: 1px solid black;
    border-radius: 20px;
    margin: 10px 0;
    width: 18rem;
}


#indicators {
    color: black;
    font-size: 4rem;
}

#socialIcons {
    color: rgb(144, 80, 146);
    font-size: 3rem;
    margin: 5px;
}


#projImg {
    height: 300px;
    width: 500px;
    margin: 10px;
    object-fit: cover;
    perspective: 1000px;
    transition: all 2s ease 0s;
    transform-style: preserve-3d;
    animation: rotate 4s ease 0s infinite forwards;
    transform: rotateY(360deg);
    border-radius: 20px;
}



.carousel-item {
    background: rgba(143, 63, 189, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
}

@keyframes rotate {
    0% {
        transform: rotateY(0deg);
    }

    50% {
        transform: rotateY(180deg);
    }

    100% {
        transform: rotateY(360deg);
    }
}

@media only screen and (max-width: 600px) {
    #projImg {
    height: 200px;
    width: 300px;
    margin: 5px;
    border-radius: 20px;
}

.heading {
    font-size: 4rem;
}
}

@media only screen and (max-width: 700px) {
    #projImg {
    height: 200px;
    width: 300px;
    margin: 10px;
    border-radius: 20px;
}
}
</style>
    