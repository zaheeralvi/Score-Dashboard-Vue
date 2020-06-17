import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/matches',
    name: 'matches',
    component: () => import('../views/MatchListing.vue')
  },
  {
    path: '/matches/:id',
    name: 'matchesDetail',
    component: () => import('../views/scoreBoard.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
