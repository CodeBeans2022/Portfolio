<template>
    <div id="projects">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1 class="heading m-5">Projects</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div :class="'carousel-item' + item.className" v-for="item in this.projects" :key="item.projectsID">
                                <div class="card">
                                    <div class="card-body">
                                        <img id="projImg" :src="item.siteImg" class="card-img-top" alt="">
                                        <h2 class="card-title">{{ item.projectName }}</h2>
                                        <a :href="item.githubLink" class="card-link">Github</a>
                                        <a :href="item.netlifyLink" class="card-link">View Project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
    created() {
        this.$store.dispatch('fetchProjects');
    }
}
</script>
    
<style scoped>
/* .container {
    
} */

#projects {
    scroll-margin: 15px;
    min-height: 100vh;
}

.heading {
    font-size: 5rem;
}

.card {
    border: 1px solid black;
    border-radius: 20px;
    margin: 10px 0;
    width: 18rem;
}


#projImg {
    height: 200px;
    width: 200px;
    object-fit: cover;
    perspective: 1000px;
    transition: all 2s ease 0s;
    transform-style: preserve-3d;
    animation: rotate 4s ease 0s infinite forwards;
    transform: rotateY(360deg);
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
</style>
    