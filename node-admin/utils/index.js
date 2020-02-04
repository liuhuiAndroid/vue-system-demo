/**
 * @作者 lh
 * @创建时间 2020/2/4 17:58
 */
// 提供MD5加密
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('./constant')

function isObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]'
}

/**
 * 解析token
 * @param req
 * @returns {*}
 */
function decode(req) {
    const authorization = req.get('Authorization')
    let token = ''
    if (authorization.indexOf('Bearer') >= 0) {
        token = authorization.replace('Bearer ', '')
    } else {
        token = authorization
    }
    return jwt.verify(token, PRIVATE_KEY)
}

function md5(s) {
    // 注意参数需要为 String 类型，否则会出错
    return crypto.createHash('md5')
        .update(String(s)).digest('hex');
}

module.exports = {
    decode,
    md5,
    isObject
}
