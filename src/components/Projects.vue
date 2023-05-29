<template>
    <div id="projects">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1 class="heading">Projects</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div id="carousel" class="carousel slide carousel-fade">
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

export default {
    computed: {
        projects() {
            return this.$store.state.projects
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
</style>
    