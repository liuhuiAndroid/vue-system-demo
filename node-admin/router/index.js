/**
 * @作者 lh
 * @创建时间 2020/1/13 0:00
 */
const express = require('express')
const boom = require('boom')
const userRouter = require('./user')
const bookRouter = require('./book')
const jwtAuth = require('../router/jwt')
const Result = require('../models/Result')
const {
    CODE_ERROR,
    CODE_TOKEN_EXPIRED
} = require('../utils/constant')

// 注册路由
const router = express.Router()
router.use(jwtAuth)

router.get('/', function(req, res) {
    res.send('欢迎学习小慕读书管理后台')
})

// 通过 userRouter 来处理 /user 路由，对路由处理进行解耦
router.use('/user', userRouter)
router.use('/book', bookRouter)

/**
 * 集中处理404请求的中间件
 * 注意：该中间件必须放在正常处理流程之后
 * 否则，会拦截正常请求
 */
router.use((req, res, next) => {
    next(boom.notFound('接口不存在'))
})

/**
 * 自定义路由异常处理中间件
 * 注意两点：
 * 第一，方法的参数不能减少
 * 第二，方法的必须放在路由最后
 */
router.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        console.log(err)
        new Result(null,'token失效',{
            error: err.status,
            errorMsg: err.name
        }).jwtError(res.status(err.status))
        // res.json({
        //     code: CODE_TOKEN_EXPIRED,
        //     msg: 'token失效',
        //     error: err.status,
        //     errorMsg: err.name
        // })
    } else {
        const msg = (err && err.message) || '系统错误'
        const statusCode = (err.output && err.output.statusCode) || 500;
        const errorMsg = (err.output && err.output.payload && err.output.payload.error) || err.message
        new Result(null,msg,{
            error: statusCode,
            errorMsg: errorMsg
        }).fail(res.status(statusCode))
        // res.status(statusCode).json({
        //     code: CODE_ERROR,
        //     msg,
        //     error: statusCode,
        //     errorMsg
        // })
    }
})

module.exports = router
