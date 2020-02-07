const { env } = require('./env')
const UPLOAD_PATH = env === 'dev' ?
    'D:\\WebStudy\\vue-system-demo\\node-admin\\upload' :
    '/root/upload/admin-upload-ebook'
const UPLOAD_URL = env === 'dev' ?
    'D:\\WebStudy\\vue-system-demo\\node-admin\\upload' :
    'https://book.youbaobao.xyz/admin-upload-ebook'

const OLD_UPLOAD_URL = env === 'dev' ?
    'http://test.youbaobao.xyz:8089/book/res/img' :
    'https://book.youbaobao.xyz/book/res/img'

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
    UPLOAD_PATH,
    UPLOAD_URL, // 上传文件URL前缀
    MIME_TYPE_EPUB: 'application/epub+zip',
    UPDATE_TYPE_FROM_WEB: 1,
    OLD_UPLOAD_URL
}
