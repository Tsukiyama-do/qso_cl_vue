import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Qslupload from '../views/Qslupload.vue'
import Qsldownload from '../views/Qsldownload.vue'
import Pictures from '../views/Pictures.vue'
import History from '../views/History.vue'
import English from '../views/English.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/qslupload',
    name: 'qslupload',
    component: Qslupload
  },
  {
    path: '/qsldownload',
    name: 'qsldownload',
    component: Qsldownload
  },
  {
    path: '/pictures',
    name: 'pictures',
    component: Pictures
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/english',
    name: 'english',
    component: English
  }
]

const router = new VueRouter({
  routes
})

export default router
