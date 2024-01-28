<template>
    <div  id="testimonials">
        <div class="container-fluid m-0">
            <div class="row mb-4">
                <div class="col text-center">
                    <h1 class="heading">Testimonials</h1>
                </div>
            </div>
        </div>
        <div class="container" v-for="item in this.testimonials" :key="item.fullName" data-aos="fade-down-right"
            data-aos-duration="1000">
            <div class="row mb-4" id="testi">
                <div class="col">
                    <img :src="item.reviewerImg" id="reviewerImg" alt="">
                </div>
                <div class="col">
                    <div class="row" id="details">
                        <div class="col-12">
                            <h1>{{ item.fullName }}</h1>
                            <p>{{ item.occupation }}</p>
                        </div>
                        <div class="col-12">
                            <p class="testi">{{ item.testimonial }}</p>
                        </div>
                        <div class="col-12">
                            <a :href="item.linkedinLink" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            <a :href="item.githubLink" target="_blank"><i class="fa-brands fa-github-alt"></i></a>
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
.container {
    width: 60%;
}

#reviewerImg {
    height: 400px;
    width: 400px;
    object-fit: cover;
    grid-column: span 2;
}

#testimonials {
    scroll-margin: 65px;
    min-height: fit-content;
}

.testi {
    font-size: 1.3rem;
}

.heading {
    font-size: 5rem;
}

#testi {
    background: rgba(143, 63, 189, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
    width: 100%;
    padding: 10px;
}

a i {
    font-size: 3rem;
    margin: 5px;
    color: rgb(0, 0, 0);
}

a i:hover {
    color: whitesmoke;
}

#details {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}


@media screen and (max-width: 600px) {
    .heading {
        font-size: 3rem;
    }

    #reviewerImg {
        height: 300px;
        width: 100%;
        object-fit: contain;
    }
}

@media screen and (max-width: 700px) {
    #reviewerImg {
        width: 100%;
    }
}</style>
    