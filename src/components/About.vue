<template>
    <div id="about">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1 class="heading">About</h1>
                </div>
            </div>
            <div class="row" v-for="item in this.about" :key="item.aboutID">
                <div class="col">
                    <img id="devImg" :src="item.devImg" alt="">
                </div>
                <div class="col" id="socials">
                    <div class="row">
                        <div class="col-12 mt-5">
                            <h1 id="skills">Skills</h1>
                        </div>
                        <div class="col-12">
                            <h6 class="message">click icons</h6>
                        </div>
                        <div class="col" id="icons">
                            <Popper id="Popper" content="HTML"><i class="fa-solid fa-code"  data-aos-duration="2000"></i></Popper>
                            <Popper id="Popper" content="CSS"><i class="fa-brands fa-css3"  data-aos-duration="2000"></i></Popper>
                            <Popper id="Popper" content="Boostrap"><i class="fa-brands fa-bootstrap"  data-aos-duration="2000"></i></Popper>
                            <Popper id="Popper" content="Javascript"><i class="bi bi-filetype-js" data-aos-duration="2000"></i></Popper>
                        </div>
                        <div class="col-12 btnCon">
                            <button type="button" class="btn border border-2 border-dark" data-bs-toggle="modal"
                                data-bs-target="#Bio">
                                Read Bio
                            </button>
                            <a class="btn border border-2 border-dark"
                            
                                href="https://drive.google.com/file/d/1Z_u8visaHn4ii9AVaQdjA9JTL0l2dWG7/view?usp=sharing"
                                download target="_blank">Download CV</a>
                        </div>
                    </div>
                    <div class="modal fade" id="Bio" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content" v-for="item in this.about" :key="item.aboutID">

                                <div class="modal-body">
                                    <p>{{ item.bio }}</p>
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
        </div>
    </div>
</template>
    
<script>
import {defineComponent} from "vue"
import Popper from "vue3-popper"
export default defineComponent(
    {
        components: {
            Popper
        },
        computed: {
            about() {
                return this.$store.state.details
            }
        },
        created() {
            this.$store.dispatch('fetchDetails');
        }
    }
)
</script>
    
<style scoped>
/* .container {
    
} */


#about {
    scroll-margin: 60px;
    min-height: 90vh;
}

.heading {
    font-size: 5rem;
}

.message {
    text-decoration: underline;
}

#skills {
    font-size: 4rem;
}

#devImg {
    height: 500px;
}

p {
    font-size: 1.5rem;
}

.modal-content {
    width: 700px;
    background-color: rgba(222, 169, 220, 0.767);
    color: white;
}

.btn {
    height: 60px;
    width: 200px;
    margin: 5px;
    font-size: 1.5rem;
}

.btn:hover {
    background-color: rgba(188, 143, 229, 0.829);
    color: white;
}

.btnCon {
    margin-top: 30px;
}

#socials {
    display: flex;
    align-items: center;
    justify-content: center;
}

#icons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    font-size: 4rem;
    grid-gap: 10px;
}

#Popper {
text-shadow: 5px 5px 5px black;
}

i{
    text-shadow: none !important;
}

@media only screen and (max-width: 600px) {
    .heading {
        font-size: 4rem;
    }

    #devImg {
        height: 300px;
    }

    #skills {
        font-size: 3rem;
    }

    #icons {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        font-size: 2rem;
        grid-gap: 5px;
    }

    .btnCon {
        display: flex;
    }

    .btn {
        height: 60px;
        width: 110px;
        margin: 5px;
        font-size: 1rem;
    }

    #about {
        scroll-margin: 5px;
    }

    .modal-content {
        width: 100%;
    }
}
</style>
    