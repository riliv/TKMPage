import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Intro from '../views/Intro.vue'
import Subscribe from '../views/Subscribe.vue'
import Result from '../views/Result.vue'
import Registration from '../views/Registration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/registration/:idToken',
    name: 'registration',
    props: true,
    component: Registration
  },
  {
    path: '/test/:userId',
    name: 'test',
    props: true,
    component: Test
  },
  {
    path: '/intro',
    name: 'intro',
    component: Intro
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: Subscribe
  },
  {
    path: '/result/:userId',
    name: 'result',
    props: true,
    component: Result
  }
]

const router = new VueRouter({
  routes
})

export default router
