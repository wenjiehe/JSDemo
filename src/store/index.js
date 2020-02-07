import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//存储区域
export default new Vuex.Store({
  state: { //设置model
    username:"",
    password:"",
    cartarry:[]
  },
  mutations: { //赋值model
    setupusername(state, use){
      state.username=use
    },
    setuppassword(state, pas){
      state.password=pas
    },
    tocart(state, arr){
      
    }
  },
  actions: {
  },
  getters:{

  }
})
