import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/interpolation',
    name: 'interpolation',
    component: () => import('../views/templates/Interpolation')
  },
  {
    path: '/directive',
    name: 'directive',
    component: () => import('../views/templates/Directive')
  },
  {
    path: '/options',
    name: 'options',
    component: () => import('../views/templates/Options')
  },
  {
    path: '/props',
    name: 'props',
    component: () => import('../views/templates/Props')
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: () => import('../views/templates/Lifecycle')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
