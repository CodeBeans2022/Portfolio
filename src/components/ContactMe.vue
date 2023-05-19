<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-6 mx-auto">
                    <form class="form" action="https://formspree.io/f/xrgvdwyr" method="post" target="_blank">
                        <input class="m-2 rounded" type="text" placeholder="Please Enter Your Name">
                        <input class="m-2 rounded" type="email" placeholder="Please Enter Your Email">
                        <textarea class="m-2 rounded" name="message" id="message" rows="5" placeholder="Enter Your Message Here"></textarea>
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
          .container {
        min-height: 100vh;
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
    