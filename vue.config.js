module.exports = {
    configureWebpack:{ //覆盖webpack默认配置
        devServer: { //配置服务器
            port:8089, //端口配置
            open:true, //游览器自动打开
            //Mock数据
            //每次更改这个配置文件，都必须重启项目才会生效
            before(app){ 
    
                //模拟用户信息池
                let userpoor=[
                    {username:'zhaoyun',password:'12345'},
                    {username:'zhangfei',password:'12345'}
                ]
        
                //模拟注册接口，对比用户信息池，req:请求参数 res:返回参数 
                //注册接口
                app.get('/api/register',(req,res)=>{
                    const {username,password}=req.query
                    const userLength=userpoor.filter(v=>v.username==username).length
                    if(userLength > 0){
                        res.json({
                            success:false,
                            message:'用户名已存在'
                        })
                    }else{
                        res.json({
                            success:true,
                            message:'注册成功'
                        })
                    }
                })
                //登录接口
                app.get('/api/login',(req,res)=>{
                    res.json({
                        success:true,
                        user:({
                            username:'zhaoyun',
                            password:'12345'
                        })
                    })
                })
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
