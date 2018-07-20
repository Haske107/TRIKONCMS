var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/*', function(req, res) {
  res.sendFile(path.join('/Users/jeff/TRIKONCMS/dist/Trikon-App/index.html'));
});
module.exports = router;
