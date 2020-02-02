/**
 * @作者 lh
 * @创建时间 2020/1/12 23:36
 * 全局入口文件
 */
const express = require('express')
const router = require('./router')

// 创建 express 应用
const app = express()

// // 中间件
// const myLogger = function(req, res, next) {
//     console.log('myLogger')
//     next()
// }
// app.use(myLogger)
// // 路由：监听 / 路径的 get 请求
// app.get('/', function(req, res) {
//     res.send('hello node get method')
// })
// app.post('/', function(req, res) {
//     res.send('hello node post method')
// })
// app.get('/error', function(req, res) {
//     throw new Error('something has error...')
// })
// // 异常处理
// const errorHandler = function (err, req, res, next) {
//     console.log('errorHandler...')
//     res.status(500)
//     res.send('down...')
// }
// app.use(errorHandler)

app.use('/', router)

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function () {
    const {address, port} = server.address()
    console.log('Http Server is running on http://%s:%s', address, port)
})
