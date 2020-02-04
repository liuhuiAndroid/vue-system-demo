/**
 * @作者 lh
 * @创建时间 2020/1/13 0:01
 */
const express = require('express')
const Result = require('../models/Result')
const {querySql} = require('../db')
const {login} = require('../services/user')
const {md5} = require('../utils')
const {PWD_SALT} = require('../utils/constant')
const {body, validationResult} = require('express-validator')
const boom = require('boom')
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY, JWT_EXPIRED } = require('../utils/constant')

const router = express.Router()

// https://www.seckill24.top:18082/user/login
router.post('/login',
    [
        body('username').isString().withMessage('username类型不正确'),
        body('password').isString().withMessage('password类型不正确')
    ],
    function (req, res, next) {
        // 需要body-parser才能获取参数
        console.log('/user/login', req.body)
        // res.json({
        //     code: 0,
        //     msg: '登录成功'
        // })

        const err = validationResult(req)
        if (!err.isEmpty()) {
            const [{ msg }] = err.errors
            next(boom.badRequest(msg))
        } else {
            const username = req.body.username
            const password = md5(`${req.body.password}${PWD_SALT}`)

            login({ username, password }, true).then(user => {
                if (!user || user.length === 0) {
                    new Result('登录失败').fail(res)
                } else {
                    const token = jwt.sign(
                        { username },
                        PRIVATE_KEY,
                        { expiresIn: JWT_EXPIRED }
                    )
                    new Result({ token }, '登录成功').success(res)
                }
            })
        }
    })

// https://www.seckill24.top:18082/user/info
router.get('/info', function (req, res, next) {
    res.json('user info...')
})

module.exports = router
