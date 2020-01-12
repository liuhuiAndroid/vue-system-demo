/**
 * @作者 lh
 * @创建时间 2020/1/13 0:01
 */
const express = require('express')

const router = express.Router()

router.get('/info', function(req, res, next) {
    res.json('user info...')
})

module.exports = router
