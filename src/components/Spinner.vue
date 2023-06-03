<template>
    <div class="spinner">
    <div class="spinner1"></div>
</div>
</template>

<style scoped>
.spinner {
  background-image: linear-gradient(rgb(194, 99, 248) 35%,rgb(194, 99, 248));
  width: 200px;
  height: 200px;
  animation: spinning82341 1.7s linear infinite;
  border-radius: 100px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(194, 99, 248), 0px 5px 20px 0px rgb(194, 99, 248);
}

.spinner1 {
  background-color: rgb(115, 80, 129);
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