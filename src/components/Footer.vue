<template>
    <div>
        <footer class="footer">
  <button class="btn" id="button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidth" aria-expanded="false" aria-controls="collapseWidth">
    <i class="bi bi-hand-index-thumb icon"></i>
  </button>

<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidth">
    <div class="card card-body" style="width: 100%;">
      <h1 class="copy">&copy;</h1> 
      <h5 class="name">Jamie-Lee Kinnear</h5>
      <a href="https://www.linkedin.com/in/jamie-lee-kinnear-53980a23a/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://github.com/CodeBeans2022" target="_blank"><i class="fa-brands fa-github-alt"></i></a>
    </div>
  </div>
</div>
        </footer>
    </div>
    </template>
    
    <script>
    
    export default {
    }
    </script>
    
    <style scoped>
    .footer{
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .collapse {
        transition: .5s ease-in-out;
    }

    .card-body {
        background-color: rgba(175, 75, 172, 0.685);
        display: flex;
        flex-direction: row;
    }

    .copy {
        font-size: 3rem;
        margin: 5px;
        color: #2c3e50;
    }

    .name {
        margin: 5px;
        color: #2c3e50;
        font-size: 2rem;
    }

    .icon {
     font-size: 2rem;   
    }

    #button {
        height: 60px;
        width:70px;
        margin: 5px;
        background-color: rgba(175, 75, 172, 0.685);
    }

    .card-body a i {
    font-size: 3rem;
    margin: 5px;
    color: rgb(0, 0, 0);
}

.card-body a i:hover {
    color: whitesmoke;
}
    </style>
    