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
                        label:'注册'
                    }
                ]
            }
        }
    },
    methods:{
        submitHandler(e){
            e.preventDefault() //阻止表单提交
            //注册接口请求
            this.$http.get('/api/register',{
                params:this.model
            })
            .then(res=>{
                if(res.success){
                    console.log(res.success, res.message);
                    //注册成功后跳转登录界面
                    this.$router.push({
                        name:'login'
                    })
                }else{
                    console.log(res.success, res.message);
                }
            })
            .catch(error=>{
                console.log(error);
            })
        }
    },
}
</script>


<style lang="stylus" scoped>
    .headerImg
        height  240px
        width  180px
</style>>