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
        
                //模拟接口，req:请求参数 res:返回参数 
                //注册接口
                app.get('/api/register',(req,res)=>{
                    //对比用户信息池
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
                }),
                //登录接口
                app.get('/api/login',(req,res)=>{
                    res.json({
                        success:true,
                        code:-1,
                        username:'zhaoyun',
                        password:'12345'
                    })
                }),
                //首页banner数据
                app.get('/api/banner',(req,res)=>{
                    res.json({
                        data:[
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                            },
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                            },
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                            }
                        ]
                    })
                }),
                //滚动分类数据
                app.get('/api/rollingClassification',(req,res)=>{
                    res.json({
                        data:[
                            [
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                                    label: '分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label: '分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                                    label: '分类一'
                                }
                            ],
                            [
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                                    label: '分类二'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label: '分类二'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                                    label: '分类二'
                                }
                            ]

                        ]
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
