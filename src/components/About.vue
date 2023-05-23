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
                        <div class="col-12">
                            <a href="https://www.linkedin.com/in/jamie-lee-kinnear-53980a23a/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/CodeBeans2022" target="_blank"><i class="fa-brands fa-github-alt"></i></a>
                        </div>
                        <div class="col-12">
                            <button type="button" class="btn border border-2 border-dark" data-bs-toggle="modal"
                                data-bs-target="#Bio">
                                Read Bio
                            </button>
                        </div>
                        <div class="col-12 mt-5">
                            <h1 id="skills">Skills</h1>
                        </div>
                        <div class="col" id="icons">
                            <i class="fa-solid fa-code"></i>
                            <i class="fa-brands fa-css3"></i>
                            <i class="fa-brands fa-bootstrap"></i>
                            <i class="fa-brands fa-node"></i>
                            <i class="fa-brands fa-vuejs"></i>
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

export default {
    computed: {
        about() {
            return this.$store.state.details
        }
    },
    created() {
        this.$store.dispatch('fetchDetails');
    }
}
</script>
    
<style scoped>
/* .container {
    
} */

#about {
    scroll-margin: 65px;
    min-height: 100vh;
}

.heading {
    font-size: 5rem;
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
    width: 150px;
    font-size: 1.5rem;
}

.btn:hover {
    background-color: rgba(188, 143, 229, 0.829);
    color: white;
}

#socials {
    display: flex;
    align-items: center;
    justify-content: center;
}

a i {
    font-size: 5rem;
    margin: 15px;
    color: rgb(144, 80, 146);
}

a i:hover {
    color: whitesmoke;
}

#icons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    font-size: 4rem;
    grid-gap: 10px;
}
</style>
    