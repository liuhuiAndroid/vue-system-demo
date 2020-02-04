/**
 * @作者 lh
 * @创建时间 2020/2/4 18:05
 */
const { queryOne } = require('./index')

function login({ username, password }, next) {
    const sql = `select * from admin_user where username='${username}' and password='${password}'`
    return queryOne(sql, next)
}

function findUser({ username }, next) {
    const sql = `select * from admin_user where username='${username}'`
    return queryOne(sql, next)
}

module.exports = {
    login,
    findUser
}
