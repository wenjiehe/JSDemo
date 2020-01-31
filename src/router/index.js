import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Login/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:{ //重定向至登录界面
      name:'home'
    }
  },
  {
    path: '/Login/Register', //路径+文件名
    name: 'register', //组件名字，可不写
    component: Register
  },
  {
    path: '/Login/Login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //组件引用，使用的是懒加载方式，不用懒加载，项目越大，空白时间会很长
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/Login.vue')
  },
  {
    path: '/Home/Home',
    name: 'home',
    component: () => import('../views/Home/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
