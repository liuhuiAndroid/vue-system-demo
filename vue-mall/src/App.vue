<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
// import jsonp from 'jsonp'

export default {
  name: 'app',
  components: {
  },
  data(){
    return {
      test: 30,
      data: Object,
      res: {}
    }
  },
  mounted() {
    // CORS
    let url = "/common/adver-getadverlistbymarking?marking=global_newcomer"
    this.axios.get(url).then((res)=>{
      let result = res.data;
      this.data = result
    })
    // JSONP
    // https://www.imooc.com/common/adver-getadverlistbymarking?marking=global_newcomer
    // let url2 = "/common/adver-getadverlistbymarking?marking=global_newcomer"
    // jsonp(url2,(err,res)=>{
    //   let result = res;
    //   this.data = result
    // })

    // storage.setItem('a',1);

    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // })
    // 本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    })

    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        // 保存用户名
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
