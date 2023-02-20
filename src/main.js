import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
// import App from '@/components/Navbar.vue'

// createApp(App).mount('#App')
createApp(App).use(router).mount('#App')

