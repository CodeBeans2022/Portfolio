<template>
    <div id="contactMe">
        <div class="container-fluid">
            <div class="row">
                <div class="col text-center">
                    <h1 class="heading m-5">Contact Me</h1>
                </div>
            </div>
            <div class="row">
                <div class="col mx-auto" data-aos="fade-right" data-aos-duration="1000">
                    <form class="form mx-auto" method="post" id="sendDetails">
                        <input class="m-2 rounded text-center" name="name" type="text" placeholder="Please Enter Your Name" id="name" v-model="name">
                        <input class="m-2 rounded text-center" name="email" type="email" placeholder="Please Enter Your Email" id="email" v-model="email">
                        <input class="m-2 rounded text-center" name="number" type="number" placeholder="Please Enter Your Phone Number" id="number" v-model="number">
                        <textarea class="m-2 rounded text-center" name="message" id="message" rows="5"
                            placeholder="Enter Your Message Here" v-model="message"></textarea>
                        <button class="btn btn-outline-dark" type="submit" v-on:click.prevent="sendEmail(e)">Send Email</button>
                    </form>
                </div>
                <div class="col" data-aos="fade-left" data-aos-duration="1000">
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
import emailjs from 'emailjs-com';
export default {
    data() {
        return {
            name: '',
            email: '',
            number: '',
            message: ''
        }
    },
    methods: {
      sendEmail(e) {
        try {
            emailjs.sendForm('service_av8t98s', 'template_twp4xyu', document.querySelector('#sendDetails'), 'asUqbpa2esv8NeI-q', {
                name: this.name,
                email: this.email,
                number: this.number,
                message: this.message
            }).then((res)=>{
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
            // console.log(userDetails);
        } catch (error) {
            console.warn(error)
        }
        alert('Your email has been recieved! Thank you.')
        this.name = ''
        this.email = ''
        this.number = ''
        this.message = ''
      }      
    }
}
</script>
    
<style scoped>
/* .container {
        
      } */

#contactMe {
    scroll-margin: 15px;
    min-height: 80vh;
    padding-bottom: 100px;
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
    