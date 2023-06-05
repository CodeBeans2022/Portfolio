import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap'
import 'aos/dist/aos.css'

createApp(App).use(store).use(router).mount('#app')
