<template>
    <div>
        <nav class="navbar navDesktop">
            <div class="container-fluid">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#projects">Projects</a>
                <a href="#testimonials">Testionials</a>
                <a href="#contactMe">Contact Me</a>
            </div>
        </nav>
        <nav class="navbar navMobile">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas m-5" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="#home">Home</a></li>
                            <li class="nav-item"><a href="#about">About</a></li>
                            <li class="nav-item"><a href="#resume">Resume</a></li>
                            <li class="nav-item"><a href="#projects">Projects</a></li>
                            <li class="nav-item"><a href="#testimonials">Testionials</a></li>
                            <li class="nav-item"><a href="#contactMe">Contact Me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
    
<script>

export default {
}
</script>
    
<style scoped>
.navDesktop {
    background-color: rgb(175, 75, 172);
    height: 70px;
    position: fixed;
    z-index: 1;
    border-radius: 30px;
    margin: 10px 20%;
    width: 60%;
    padding: 5px;
}

.navDesktop a {
    text-decoration: none;
    color: #2c3e50;
    margin: 10px auto;
    font-size: 1.5rem;
}

.navDesktop a:hover {
    background-color: white;
    color: rgba(135, 97, 170, 0.699);
    border-radius: 10px;
    padding: 5px;
    margin: 0;
}


/* MOBILE NAV */

.navMobile {
    display: none;
    background-color: rgb(175, 75, 172);
}


.offcanvas {
    background-color: rgba(175, 75, 172, 0.705);
    border-radius: 20px;
}

@media only screen and (max-width: 600px) {
    .navDesktop {
        display: none;
    }

    .navMobile {
        display: block;
    }

    .navbar-nav a {
        text-decoration: none;
        color: #2c3e50;
        font-size: 1.5rem;
        margin: 5px;
    }

}
</style>
    