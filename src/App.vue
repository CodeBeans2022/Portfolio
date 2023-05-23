<template>
  <router-view/>
</template>

<script>
export default {
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
#app {
  font-family: 'Permanent Marker', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(223,130,221);
  background: linear-gradient(90deg, rgba(223,130,221,1) 0%, rgba(222,174,220,1) 42%, rgba(223,130,221,1) 100%);
}
body::-webkit-scrollbar{
  background-color: #F5F5F5;
  color: #333;
  line-height: 1.5;
 display: none;
}
body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
