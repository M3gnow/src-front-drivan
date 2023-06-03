import { createApp } from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


createApp(App)
    .component('v-select', vSelect)
    .use(router, bootstrap)
    .mount('#app')
