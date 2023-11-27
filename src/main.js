import './assets/main.css'
import router from './router.js'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

createApp(App).use(router).mount('#app')
