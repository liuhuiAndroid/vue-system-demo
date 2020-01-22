/**
 * @作者 lh
 * @创建时间 2020/1/22 19:17
 */
import Mock from 'mockjs'
Mock.mock('/api/user/login',{
    "status": 0,
    "data": {
        "id|10001-11000": 0,
        "username": "@cname",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
});
