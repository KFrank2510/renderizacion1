import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ejemplo from '../views/Ejemplo.vue'
import Ejemplo2 from '../views/Ejemplo2.vue'
import vif from '../views/vif.vue'
import vifor from '../views/vifor.vue'
import vinodel from '../views/vinodel.vue'
import von from '../views/von.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/Ejemplo',
    name:'Ejemplo',
    component:Ejemplo

  },
  {
    path:'/vinodel',
    name:'vinodel',
    component:vinodel

  },
  {
    path:'/von',
    name:'von',
    component:von

  },
  {
    path:'/Ejemplo2',
    name:'Ejemplo2',
    component:Ejemplo2

  },
  {
    path:'/vif',
    name:'vif',
    component:vif

  },
  {
    path:'/vifor',
    name:'vifor',
    component:vifor

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
