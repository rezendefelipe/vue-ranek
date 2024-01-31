import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import LoginView from '../views/LoginView.vue'
import UserView from '../views/user/UserView.vue'
import UserProducts from '../views/user/UserProducts.vue'
import UserEdit from '../views/user/UserEdit.vue'
import UserSells from '../views/user/UserSells.vue'
import UserBuys from '../views/user/UserBuys.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/user',
    component: UserView,
    children: [
      {
        path: '',
        name: 'user',
        component: UserProducts
      },
      {
        path: 'user-edit',
        name: 'user-edit',
        component: UserEdit
      },
      {
        path: 'user-buys',
        name: 'user-buys',
        component: UserBuys
      },
      {
        path: 'user-sells',
        name: 'user-sells',
        component: UserSells
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
