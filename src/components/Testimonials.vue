<template>
    <div class="spinner" v-if="!spinner">
        <Spinner/>
    </div>
    <div id="testimonials" v-else>
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1 class="heading mt-5 mb-5">Testimonials</h1>
                </div>
            </div>
        </div>
        <div class="container" v-for="item in this.testimonials" :key="item.testimonialID">
            <div class="row m-4" id="testi">
                <div class="col">
                    <img :src="item.reviewerImg" id="reviewerImg" alt="">
                </div>
                <div class="col">
                    <div class="row" id="details">
                        <div class="col-12">
                            <h1>{{ item.fullName }}</h1>
                        </div>
                        <div class="col-12">
                            <button type="button" class="btn border border-2 border-dark" data-bs-toggle="modal"
                            :data-bs-target="'#' + item.testimonialID">
                            Read More
                            </button>
                        </div>
                        <div class="col-12">
                            <a :href="item.linkedinLink" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            <a :href="item.githubLink" target="_blank"><i class="fa-brands fa-github-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" :id="item.testimonialID" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-body">
                            <p>{{ item.testimonial }}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn border border-2 border-dark"
                                data-bs-dismiss="modal">Close</button>
                        </div>
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
        testimonials() {
            return this.$store.state.testimonials
        },
        spinner() {
            return this.$store.state.spinner
        }
    },
    created() {
        this.$store.dispatch('fetchTestimonials')
    }
}
</script>
    
<style scoped>

.spinner{
    font-size: 40px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1;
    /* transform: translateY(-50%) translateX(-50%); */
}
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
    scroll-margin: 15px;
    min-height: 100vh;
}

.heading {
    font-size: 5rem;
    width: 100%;
}


.card {
    border: 1px solid black;
    border-radius: 20px;
    margin: 10px 0;
}

.card-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
}

#testi {
    background: rgba(143, 63, 189, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
    padding: 20px;
}

.modal-content {
    width: 100%;
    background-color: rgba(222, 169, 220, 0.767);
    color: white;
    font-size: 2rem;
}

.btn {
    height: 60px;
    width: 200px;
    font-size: 1.5rem;
}

.btn:hover {
    background-color: rgba(188, 143, 229, 0.829);
    color: white;
}

a i {
    font-size: 3rem;
    margin: 5px;
    color: rgb(0, 0, 0);
}

a i:hover {
    color: whitesmoke;
}

#details{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 600px) {
    .heading {
    font-size: 4rem;
}

#reviewerImg {
    height: 300px;
    width: 100%;
    min-width: 200px;
    object-fit: contain;
    /* grid-column: span 2; */
}

#testi {
    padding: 0;
}

.modal-content {
    width: 100%;
    font-size: 1.5rem;
}
}
</style>
    