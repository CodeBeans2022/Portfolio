<template>
    <div id="contactMe">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1 class="heading m-5">Contact Me</h1>
                </div>
            </div>
            <div class="row">
                <div class="col mx-auto" data-aos="fade-right" data-aos-duration="2000">
                    <form class="form mx-auto" action="https://formspree.io/f/xrgvdwyr" method="post" target="_blank">
                        <input class="m-2 rounded text-center" type="text" placeholder="Please Enter Your Name">
                        <input class="m-2 rounded text-center" type="email" placeholder="Please Enter Your Email">
                        <textarea class="m-2 rounded text-center" name="message" id="message" rows="5"
                            placeholder="Enter Your Message Here"></textarea>
                        <button class="btn border border-2 border-dark" type="submit">Submit Message</button>
                    </form>
                </div>
                <div class="col" data-aos="fade-left" data-aos-duration="2000">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <h3>Email: </h3>
                            <h4>jamieleekinnear21@gmail.com</h4>
                        </div>
                        <div class="col-12 mt-3">
                            <h3>Phone Number: </h3>
                            <h4>078 117 9470</h4>
                        </div>
                        <div class="col-12 mt-5">
                            <a href="https://www.linkedin.com/in/jamie-lee-kinnear-53980a23a/" target="_blank"><i
                                    class="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/CodeBeans2022" target="_blank"><i
                                    class="fa-brands fa-github-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>

export default {
}
</script>
    
<style scoped>
/* .container {
        
      } */

#contactMe {
    scroll-margin: 15px;
    min-height: 100vh;
}

.heading {
    font-size: 5rem;
}

form {
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 80%;
}

input {
    background: rgba(164, 92, 206, 0.32);
    min-height: 40px;
}

textarea {
    background: rgba(164, 92, 206, 0.32);
    border: 1px solid black;
}

a i {
    font-size: 3rem;
    margin: 5px;
    color: rgb(0, 0, 0);
}

a i:hover {
    color: whitesmoke;
}

@media only screen and (max-width: 600px) {
    .heading {
        font-size: 4rem;
    }
}
</style>
    