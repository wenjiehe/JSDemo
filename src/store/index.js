import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//存储区域
export default new Vuex.Store({
  state: { //设置model
    username:"",
    password:""
  },
  mutations: { //赋值model
    setupuser(state, use, pas){
      alert('你提交了么')
      state.username = use,
      state.password = pas
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
  }
})
