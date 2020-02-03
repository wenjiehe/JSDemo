<template>
    <div>
        <img class="headerImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580405082071&di=1ff39ac6fe946c6c4a8038a66951f853&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_ls%2F0%2F10960295315_240180%2F0.jpg" alt="">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            model:{
                username:'',
                password:''
            },
            schema:{
                fields:[
                    {
                        type:'input',
                        modelKey:'username',
                        label:'用户名',
                        props:{
                            placeholder:'请输入用户名',
                        },
                        rules:{ //校验规则
                            required:true,
                            type:'string',
                            min:3,
                            max:15,
                        },
                        trigger:'blur',
                        messages:{ //检测对应的信息
                            required: '用户名不能为空',
                            min:'用户名不能小于3个字符',
                            max:'用户名不能大于15个字符',
                        }
                    },
                    {
                        type:'input',
                        modelKey:'password',
                        label:'密码',
                        props:{
                            placeholder:'请输入密码',
                            type:'password',
                            eye:{
                                open:false,
                            }
                        },
                        rules:{
                            required:true,
                        },
                        trigger:'blur',
                    },
                    {
                        type:'submit',
                        label:'登录'
                    }
                ]
            }
        }
    },
    methods:{
        //异步调用
        async submitHandler(e){
            e.preventDefault() //阻止表单提交
            try {
                //定义一个常量接收登录接口的请求结果,async和await配套使用
                const result=await this.$http.get('/api/login',{
                    params:this.model
                })
                if(result.success){
                    console.log(result.success, result.username, result.password, result.code)
                    //清除所有存储到本地的数据
                    localStorage.clear()
                    //存储到本地
                    this.$store.commit('setupusername',result.username)
                    this.$store.commit('setuppassword',result.password)
                    localStorage.setItem('username',result.username)
                    localStorage.setItem('password',result.password)

                    this.$router.push({
                        path:'/bottomNav/Home/Home'
                    })
                }
            } catch (error) { //如果有错误，在这里抛出
                console.log(1111 + error)
            }
        }
    },
}
</script>


<style lang="stylus" scoped>
    .headerImg
        height  240px
        width  180px
</style>>