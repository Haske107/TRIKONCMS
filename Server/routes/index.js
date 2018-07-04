var express = require('express');
var router = express.Router();
const fs = require('fs');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/script', function(req, res, next) {

  // ARCHIVE PATH
  var Archive = '../../Desktop/2017-April19th';

  // OPEN READ STREAM TO VIEW DIRECTORIES
  fs.readdir(Archive, function(err, files) {

    // CREATE EMPTY LIST FOR USE AS CLIPBOARD
    var list = [];

    // ITERATE THROUGH LIST OF PROJECTS
    for (var i = 0; i < files.length; i++)  {

      // if (files[i].substring(0, 4) ===
      // var Year = '';
      //
      // var Name = '';
      //
      // var Size = 0;
      //
      // list.push({ year: String, name: String, size: Number});

    }


    res.render('index', { title: list });
  });
});



module.exports = router;
