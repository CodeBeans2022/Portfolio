<template>
    <div id="contactMe">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1 class="heading m-5">Contact Me</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-6 mx-auto">
                    <form class="form" action="https://formspree.io/f/xrgvdwyr" method="post" target="_blank">
                        <input class="m-2 rounded text-center" type="text" placeholder="Please Enter Your Name">
                        <input class="m-2 rounded text-center" type="email" placeholder="Please Enter Your Email">
                        <textarea class="m-2 rounded text-center" name="message" id="message" rows="5" placeholder="Enter Your Message Here"></textarea>
                        <button class="btn border border-2 border-dark" type="submit">Submit Message</button>
                    </form>
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
            margin: 10px;
            display: flex;
            flex-direction: column;
            padding: 10px;
        }

        input {
            min-height: 40px;
        }
    </style>
    