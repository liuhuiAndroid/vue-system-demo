<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import storage from './storage'
// import jsonp from 'jsonp'

export default {
  name: 'app',
  components: {
  },
  data(){
    return {
      test: 30,
      data: Object
    }
  },
  mounted() {
    // CORS
    let url = "/api/common/adver-getadverlistbymarking?marking=global_newcomer"
    axios.get(url).then((res)=>{
      let result = res.data;
      this.data = result
    })
    // JSONP
    // https://www.imooc.com/common/adver-getadverlistbymarking?marking=global_newcomer
    // let url2 = "/api/common/adver-getadverlistbymarking?marking=global_newcomer"
    // jsonp(url2,(err,res)=>{
    //   let result = res;
    //   this.data = result
    // })

    storage.setItem('a',1);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
