//api路由
//userApi.js —— 测试用 API 示例

var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1', msg: '操作失败'
        });
    }
    else {
        res.json(
            ret
        );
    }
};
// 增加用户接口


//登录表的
router.get('/quelogin',(req,res)=>{
    conn.query('select * from logintest',function(err,row){
        if(err){
             console.log(err)      
             console.error(err.response);      
        }
        console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.post('/addlogin', (req, res) => {
    var sql = $sql.testlog.addlogin;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username, params.password], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

module.exports = router;
