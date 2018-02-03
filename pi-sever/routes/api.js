var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // 送信例    curl http://IP/api?cmd=hogehoge
  var filePath = '/tmp/led';
  var data = req.query.cmd + '\n';
  res.send('data was ' + data);
  fs.writeFile(filePath, data, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("api ok");
  });
});

module.exports = router;









