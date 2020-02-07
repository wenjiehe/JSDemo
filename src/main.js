import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import setaxios from './setaxios'

setaxios()
Vue.config.productionTip = false
Vue.prototype.$http = axios //挂载在vue上

//路由守卫
router.beforeEach((to,from,next)=>{
  //无论是刷新还是跳转路由，第一个进入的就是这个路由前置钩子函数
  // store.commit('setupusername', localStorage.getItem('username'))
  if (to.meta.requireAuth) {
    if (store.state.username) {
      next()
    }else{
      next({
        path:'/Login/Login',
        query:{
          redirect:to.fullPath
        }
      })
    }
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
