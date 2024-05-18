import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/Products'
import Categories from '../views/Categories'
import EditarProduct from '../components/Product/EditarProduct'
import EditarCategory from '../components/Category/EditarCategory'
import NewProduct from '../components/Product/NewProduct'
import NewCategory from '../components/Category/NewCategory'
import PayModes from '../views/PayModes'
import NewPaymode from '../components/Paymode/NewPaymode'
import EditarPaymode from '../components/Paymode/EditarPaymode'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/editar-product/:id',
    name: 'EditarProduct',
    component: EditarProduct
  },
  {
    path: '/add-product/',
    name: 'NewProduct',
    component: NewProduct
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/add-category/',
    name: 'NewCategory',
    component: NewCategory
  },
  {
    path: '/editar-category/:id',
    name: 'EditarCategory',
    component: EditarCategory
  },
  {
    path: '/paymodes',
    name: 'Paymodes',
    component: PayModes
  },
  {
    path: '/add-paymode/',
    name: 'NewPaymode',
    component: NewPaymode
  },
  {
    path: '/editar-paymode/:id',
    name: 'EditarPaymode',
    component: EditarPaymode
  }
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
