import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//存储区域
export default new Vuex.Store({
  state: {
    username:'',
    password:''
  },
  mutations: { 
    setupuser(state, use, pas){
      state.username = use,
      state.password = pas
    }
  }
  // actions: {
  // },
  // modules: {
  // },
  // getters: {
  // }
})
