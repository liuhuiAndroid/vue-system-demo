#### 项目演示

 https://www.mi.com/

 http://mi.futurefe.com/   admin   admin

#### Node环境

npm n模块方便升降级

#### Git

```shell
git config --list
git config --global user.name
git config --global user.email
# 记住账号密码
git config --global credential.helper store
# 配合SSH方式才可以使用公钥
ssh-keygen -t rsa -C "youremail@example.com"
```

VS Code有个Git History Diff 插件

Git速查见file

#### Vue Cli4.0

```shell
# 脚手架安装
cnpm i -g @vue/cli
vue --version
which -a vue
# 使用
vue create vue-mall
-> default(babel,eslint)
cd vue-mall
cnpm run serve
# 脚手架内置可视化系统
vue ui
# 安装依赖
vue ui 安装 axios 和 vue-router vuex
cnpm i axios --save-dev
# Vue DevTools安装使用
- 翻墙谷歌应用商店安装 vue devtools
- 手动安装:https://github.com/vuejs/vue-devtools
- VUE 配置vue-devtools调试工具:https://www.imooc.com/article/294527
```

#### 项目基础架构

1. 前端跨域解决方案

   1. 什么是前端跨域

      1. 跨域是浏览器为了安全而做出的限制策略
      2. 浏览器请求必须遵循同源策略：同域名、同端口、同协议

   2. 怎么解决前端跨域

      1. CORS跨域

         1. 服务端设置，前端直接调用
         2. 说明：后台允许前端某个站点进行访问

      2. JSONP跨域

         1. 前端安装jsonp插件

            ```
            cnpm i jsonp --save-dev
            import jsonp from 'jsonp'
            let url2 = "https://www.imooc.com/common/adver-getadverlistbymarking?marking=global_newcomer"
            jsonp(url2,(err,res)=>{
            	let result = res;
            	this.data = result
            })
            ```

         2. 

      3. 代理跨域

         1. 接口代理，通过修改nginx服务器配置来实现
         2. 说明：前端修改，后台不动。
         3. 配置vue.config.js
   
2. 目录结构设置

3. 基本插件介绍

   ```shell
   cnpm i vue-lazyload element-ui node-sass sass-loader vue-awesome-swiper vue-axios vue-cookie --save
   ```

4. 路由封装

   1. 编写 router.js
   2. main.js 中使用 router.js

5. Storage封装

   1. Cookie、localStorage、sessionStorage三者区别？
      1. 存储大小：Cookie4K、Storage5M
      2. 有效期：Cookie拥有有效期，Storage永久存储
      3. Cookie会发送到服务端，存储在内存中，Storage只存储在浏览器端
      4. 路径：Cookie有路径限制，Storage只存储在域名下
      5. API：Cookie没有特定的API，Storage有对应的API
   2. 为什么要封装Storage，本身不是已经由API？
      1. Storage本身有API，但是只是简单的key/value形式
      2. Storage只存储字符串，需要人工转换成json对象
      3. Storage只能一次性清空，不能单个清空

6. 接口错误拦截

   1. 统一报错
   2. 未登录统一拦截
   3. 请求值、返回值统一处理

7. 接口环境设置

8. Mock设置





#### 遇到的问题

