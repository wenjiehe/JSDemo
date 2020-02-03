# jingdong2

## 一个合格的前端工程师需要哪些技能

* 基础技能
    - HTML
    - CSS
    - JAVASCRIPT
    
* 进阶技能
    - HTML5
    - CSS3
    - ES6
    
* 前端工程化
    - JS模块化
    - CSS模块化
    - 打包工具:WEBPACK
    - TASK RUNNING:GULP
    
* 前端框架
    - JQUERY
    - VUE
    
- 后端开发
    - NODEJS
    - NPM包管理工具
    - NODEJS框架
    - EXPRESS
    
- 网络基础
    - HTTP协议
    - AJAX
    - 同源策略
    - CORS
    
* 设计模式
    - 设计原则
    - 单例模式
    - 代理模式
    - 建造者模式

## 编译环境

* IDE及版本:Visual Studio Code  ||  1.41.1
* 语言:HTML/CSS/JavaScript
* 搭建项目工具及版本:Vue CLI 3.x   || @vue/cli 4.1.2
* 电脑系统及版本:macOS Catalina   ||  10.15.2

基于Vue CLI创建的项目，项目所需环境:

* node
* webpack
* vue-cli 3.x

项目所使用的工具:

* vue-router
    - 单页应用的核心插件
* axjos
    - 相当于经过封装的ajax
* Mock
    - 模拟接口，模拟测试流程
* cube-ui
    - 滴滴内部组件库，基于Vue.js实现的精致移动端组件库 
    
终端中使用的命令:

```C
//项目运行
npm run serve

//修改文件后，如何编译,网页会自动刷新
command + S

//如果下载下来缺失node_modules文件夹，cd到根目录下，运行以下命令
npm install

//项目运行成功后，如何终止
control + C
```

## Vue.js的生命周期

Vue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染->更新->渲染、销毁等一系列过程。从创建到销毁的过程，就是生命周期。

1. 浏览器渲染过程

* 构建DOM树
* 构建css规则树，根据执行顺序解析js文件
* 构建渲染树Render Tree
* 渲染树布局layout
* 渲染树绘制

2. 生命周期有哪些方法，作用是什么，调用时机

```JavaScript

//实例组件刚创建，元素DOM和数据都还没有初始化。
//和OC比较，相当于OC中的init方法
beforeCreate(){

}

//数据已经初始化完成，元素DOM还未渲染。
//和OC比较，相当于OC中的viewDidLoad方法
created(){

}

//在挂载开始之前被调用:相关的render函数首次被调用
//和OC比较，相当于OC中的viewDidLoad方法
beforeMount(){

}

//数据和DOM都挂载完成，可以在这方法中操作DOM
//和OC比较，相当于OC中的viewDidAppear方法
mounted(){

}

//页面数据改变了就会触发，数据更新之前，页面数据还是原来的数据
beforeUpdate(){

}

//页面数据改变了都会触发，数据更新完毕，页面的数据是更新完成后的
update(){

}

//在组件销毁之前执行
//和OC比较，相当于OC中的viewDidDisappear方法
beforeDestroy(){

}

//组件已销毁
//和OC比较，相当于OC中的dealloc方法
destroyed(){

}

```

## 问题

* permission denied

> 这是由于权限不够所导致，在命令前面加上sudo

* .vue文件没有高亮

> 按command+shift+X,在应用商店中搜索Vetur,安装即可

## 使用

* 跳转

```JavaScript
//name是路由文件中的单个文件的变量，login相当于一个唯一标识符
this.$router.push({
    name:'login'
})
```

* 查看api
    - 按住control+点击api,就能查看定义和引用，或者在菜单栏->转到里面也可以找到


## 参考资料

 [Vue CLI](https://cli.vuejs.org/zh/)

 [Vue CLI 配置参考](https://cli.vuejs.org/zh/config/#全局-cli-配置
)

 [Vue](https://cn.vuejs.org/v2/guide/)

 [Vuex](https://vuex.vuejs.org/zh/installation.html)

 [Vue Loader](https://vue-loader-v14.vuejs.org/zh-cn/)
 
 [Vue Router](https://router.vuejs.org/zh/)
 
 [CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

[移动端UI库:cube-ui](https://didi.github.io/cube-ui/#/zh-CN/docs/introduction
)

 [axios](https://www.kancloud.cn/yunye/axios/234845)

[参考博客:vue.config.js](https://blog.csdn.net/qq_36407748/article/details/82050976)

[vue生命周期详解](https://www.jianshu.com/p/410b6099be69)
