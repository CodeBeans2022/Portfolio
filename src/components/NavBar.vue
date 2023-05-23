<template>
    <div>
        <nav class="navbar">
            <div class="container-fluid">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#projects">Projects</a>
                <a href="#testimonials">Testionials</a>
                <a href="#contactMe">Contact Me</a>
            </div>
        </nav>
    </div>
    </template>
    
    <script>
    
    export default {
    }
    </script>
    
    <style scoped>
        .navbar {
            background-color: rgba(222, 169, 220, 0.767);
            height: 70px;
            position: fixed;
            z-index: 1;
            border-radius: 30px;
            margin: 10px 20%;
            width: 60%;
            padding: 5px;
        }

        .navbar a {
            text-decoration: none;
            color: white;
            margin: 10px auto;
            font-size: 1.5rem;
        }

        .navbar a:hover {
            background-color: white;
            color: rgba(135, 97, 170, 0.699);
            border-radius: 10px;
            padding: 5px;
            margin: 0;
        }
    </style>
    