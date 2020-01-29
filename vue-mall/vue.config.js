// webpack配置表
module.exports = {
    devServer:{
        // host: 'localhost',
        // port: 8080,
        // 代理的方式做接口拦截
        proxy: {
            '/api':{
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                secure:false,
                pathRewrite:{
                    '^/api': ''
                }
            }
        }
    },
    // publicPath:'/app',
    // outputDir:'dist',
    // indexPath:'index2.html',
    // lintOnSave:false,
    productionSourceMap:true,
    // 删除预加载
    chainWebpack:(config)=>{
        config.plugins.delete('prefetch');
    }
}
