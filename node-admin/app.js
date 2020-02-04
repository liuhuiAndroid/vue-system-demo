/**
 * @作者 lh
 * @创建时间 2020/1/12 23:36
 * 全局入口文件
 */
const express = require('express')
const router = require('./router')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
const cors = require('cors')

// 创建 express 应用
const app = express()

// 解决跨域
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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

// 导入生成的证书文件
const privateKey = fs.readFileSync('./https/3424413_www.seckill24.top.key', 'utf8')
const certificate = fs.readFileSync('./https/3424413_www.seckill24.top.pem', 'utf8')
const credentials = { key: privateKey, cert: certificate }
const httpsServer = https.createServer(credentials, app)
const SSLPORT = 18082
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT)
    console.log('接口：https://www.seckill24.top:18082/')
})
