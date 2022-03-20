import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
//import SobreView from '../views/SobreView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: InicioView
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    /*
      route level code-splitting
      this generates a separate chunk (about.[hash].js) for this route
      which is lazy-loaded when the route is visited.
    */
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/PedidosView.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import(/* webpackChunkName: "sobre" */ '../views/SobreView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
