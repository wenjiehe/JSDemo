import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Login/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:{ //重定向至底部Tabbar界面
      path:'/bottomNav'
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
  },
  {
    path: '/bottomNav',
    name: 'bottomNav',
    component: () => import('../views/BottomNav.vue'),
    children: [
      { //首页
        path: 'Home/Home',
        name: 'home',
        component: () => import('../views/Home/Home.vue')
      },
      { //分类
        path: 'List/List',
        name: 'list',
        component: () => import('../views/List/List.vue')
      },
      { //搜索
        path: 'Search/Search',
        name: 'search',
        component: () => import('../views/Search/Search.vue')
      },
      { //购物车
        path: 'Cart/Cart',
        name: 'cart',
        meta:{
          requireAuth:true, //当有这个字段的时候，那么就是需要登录的
        },
        component: () => import('../views/Cart/Cart.vue')
      },
      { //我的
        path: 'Mine/Mine',
        name: 'mine',
        meta:{
          requireAuth:true, //当有这个字段的时候，那么就是需要登录的
        },
        component: () => import('../views/Mine/Mine.vue')
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
