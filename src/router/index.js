import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Checkout from '@/components/Checkout.vue'
import Main from '@/components/MainPage.vue'
import Author from '@/components/Author.vue'
import List from '@/components/List.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/home',
    component: Home ,
    children: [
      {
        path: 'list',
        component: List,
        // props: true
      },
      {
        path: 'checkout',
        component: Checkout
      }
    ]
  },
  {
    path: '/author',
    name: 'Author',
    component: Author
  },
  
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
})

export default router
