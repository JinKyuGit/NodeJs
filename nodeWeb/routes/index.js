var express = require('express');
var router = express.Router();
var fs=require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//라우터 등록 방법.
//router.get('', function(req, res){
//	fs.readFile('', function(error, data) {
//	res.end(data);
//	});
//});

module.exports = router;
