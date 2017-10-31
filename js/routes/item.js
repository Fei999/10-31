var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  port:3307
});

/* GET home page. */
//post发送+请求get获取
router.post('/list', function(req, res, next) {
    //通过SELECT拿到的数据rows形参
    res.header('Access-Control-Allow-Origin','*');
    var val=req.body.val;
    var d=req.body.d;
    connection.query('INSERT INTO body.message (list,data) VALUES ("'+val+'","'+d+'")', function(err, rows, fields) { 
        res.send(rows)
    });
});
router.post('/list1', function(req, res, next) {
    //通过SELECT拿到的数据rows形参
    res.header('Access-Control-Allow-Origin','*');
    // var val=req.body.val;
    // var d=req.body.d;
    connection.query('SELECT * FROM body.message', function(err, rows, fields) { 
        res.send(rows)
    });
});
router.post('/remlist', function(req, res, next) {
    //通过SELECT拿到的数据rows形参
    res.header('Access-Control-Allow-Origin','*');
    var val=req.body.val;
    connection.query('DELETE FROM body.message WHERE id='+val, function(err, rows, fields) { 
        res.send(rows)
    });
});
module.exports = router;
