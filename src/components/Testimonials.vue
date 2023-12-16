<template>
    <div id="testimonials">
        <div class="container-fluid m-0">
            <div class="row mb-4">
                <div class="col text-center">
                    <h1 class="heading">Testimonials</h1>
                </div>
            </div>
        </div>
        <div class="container" v-for="item in this.testimonials" :key="item.fullName" data-aos="fade-down-right"
            data-aos-duration="1000">
            <div class=" mb-4" id="testi">
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
                                :data-bs-target="'#' + item.fullName">
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
            <!-- Modal -->
            <div class="modal fade" :id="item.fullName" data-bs-backdrop="static" data-bs-keyboard="false"
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
    scroll-margin: 15px;
    min-height: 100vh;
}

.heading {
    font-size: 5rem;
    /* width: 100%; */
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

#details {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}


@media screen and (max-width: 600px) {
    .heading {
        font-size: 4rem;
    }

    #reviewerImg {
        height: 300px;
        width: 100%;
        /* min-width: 200px; */
        object-fit: contain;
        /* grid-column: span 2; */
    }

    .modal-content {
        width: 100%;
        font-size: 1.5rem;
    }

    .btn {
        height: 100%;
        width: 100%;
        font-size: 1.5rem;
    }
}

/* @media screen and (max-width: 670px) {
        .heading {
        font-size: 3rem;
    }
    #reviewerImg {
            width: 100%;
        }
    } */

@media screen and (max-width: 700px) {
    #reviewerImg {
        width: 100%;
    }
}</style>
    