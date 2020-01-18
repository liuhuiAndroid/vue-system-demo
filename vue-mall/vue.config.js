// webpack配置表
module.exports = {
    devServer:{
        // host: 'localhost',
        // port: 8080,
        proxy: {
            '/api':{
                target: 'https://www.imooc.com',
                changeOrigin: true,
                secure:false,
                pathRewrite:{
                    '^/api': ''
                }
            }
        }
    }
}
