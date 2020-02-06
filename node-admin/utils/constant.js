const { env } = require('./env')
const UPLOAD_PATH = env === 'dev' ?
    'D:\\WebStudy\\vue-system-demo\\node-admin\\upload' :
    '/root/upload/admin-upload-ebook'

/**
 * @作者 lh
 * @创建时间 2020/1/13 0:02
 */
module.exports = {
    CODE_ERROR: -1,
    CODE_TOKEN_EXPIRED: -2,
    CODE_SUCCESS: 0,
    PWD_SALT: 'admin_imooc_node',
    PRIVATE_KEY: 'admin_imooc_node_test_youbaobao_xyz',
    JWT_EXPIRED: 60 * 60, // token失效时间
    UPLOAD_PATH
}
