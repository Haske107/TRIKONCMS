var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const Project = require('../models/Project');

router.post('/BTS/:ProjectName/:FileName', function (req, res, next) {
  console.log(req.params);
  Project.findOne({Name : req.params.ProjectName}, function (err, project) {
    project.BTS.forEach(file => {
      if (file.Name === req.params.ProjectName)  {
        if (fs.existsSync('/Users/Jeff/Desktop/Archives/' + project.Fullname + '/BTS/' + req.params.FileName))  {
          console.log("TEST");
        } else {
          console.log("No Find");
        }
        let readstream = fs.createReadStream('/Users/Jeff/Desktop/Archives/' + project.Fullname + '/BTS/' + req.params.FileName);
        res.set('Content-Type', 'JPG');
        return readstream.pipe(res)
      }
    });
  });
});


module.exports = router;
