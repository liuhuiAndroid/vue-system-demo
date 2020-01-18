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
# Vue DevTools安装使用
- 翻墙谷歌应用商店安装 vue devtools
- 手动安装:https://github.com/vuejs/vue-devtools
- VUE 配置vue-devtools调试工具:https://www.imooc.com/article/294527
```

#### 遇到的问题

