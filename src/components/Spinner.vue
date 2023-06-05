<template>
  <div>
    <h3 class="loading">Loading...</h3>
    <div class="spinner">
    <div class="spinner1"></div>
  </div>
</div>
</template>

<style scoped>

.loading {
  position: fixed;
  top: 47%;
  left: 46%;
  z-index: 100;
  color: rgb(212, 210, 210);
}
.spinner {
  background-image: linear-gradient(rgb(255, 84, 255) 100%,rgb(255, 84, 255));
  width: 200px;
  height: 200px;
  animation: spinning82341 1.7s linear infinite;
  border-radius: 100px;
  filter: blur(1px);
  box-shadow: 0px -10px 15px 0px rgb(216, 114, 207), 0px 10px 15px 0px rgb(179, 114, 216);
}

.spinner1 {
  background-color: rgb(111, 52, 136);
  width: 200px;
  height: 200px;
  border-radius: 100px;
  filter: blur(10px);
}

@keyframes spinning82341 {
  to {
    transform: rotate(360deg);
  }
}
</style>