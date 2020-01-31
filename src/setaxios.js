import axios from 'axios'
import store from './store'
import router from './router/index'

//http全局拦截
//把方法暴露出去
export default function setAxios(){
    axios.interceptors.request.use(
        config=>{
            if(store.state.username.length > 0 && store.state.password.length > 0){
                config.headers.username = store.state.username
                config.headers.password = store.state.password
            }
            return config
        }
    )
}

//每次请求，如果成功就会拦截
axios.interceptors.response.use(
    response=>{
        if(response.status == 200){
            const data = response.data
            if (data.code == -1) { //跳转至登录界面
                store.commit('setupusername', '')
                store.commit('setuppassword', '')
                localStorage.removeItem('username')
                localStorage.removeItem('password')                
                // router.replace('/')
            }
            return data
        }
        return response
    }
)