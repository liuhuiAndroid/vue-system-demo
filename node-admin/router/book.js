/**
 * @作者 lh
 * @创建时间 2020/2/6 10:33
 */
const express = require('express')
const multer = require('multer')
const Result = require('../models/Result')
const Book = require('../models/Book')
const { UPLOAD_PATH } = require('../utils/constant')

const router = express.Router()

router.post(
    '/upload',
    multer({ dest: `${UPLOAD_PATH}/book` }).single('file'),
    function(req, res, next) {
        if (!req.file || req.file.length === 0) {
            new Result(null, '上传电子书失败').fail(res)
        } else {
            new Result(null, '上传电子书成功').success(res)
            // const book = new Book(req.file)
            // book.parse()
            //     .then(book => {
            //         new Result(book.toJson()).success(res)
            //     })
            //     .catch((err) => {
            //         console.log('/book/upload', err)
            //         next(boom.badImplementation(err))
            //         book.reset()
            //     })
        }
    })

module.exports = router
