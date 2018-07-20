var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const Project = require('../models/Project');

router.get('/BTS/:ProjectName/:FileName', function (req, res, next) {
  Project.findOne({Fullname : req.params.ProjectName}, function (err, project) {
    project.BTS.forEach(file => {
      if (file.Filename === req.params.FileName)  {
        if (fs.existsSync('/Users/Jeff/Desktop/Archive/' + project.Fullname + '/BTS/' + req.params.FileName))  {
          let readstream = fs.createReadStream('/Users/Jeff/Desktop/Archive/' + project.Fullname + '/BTS/' + req.params.FileName);
          res.set('Content-Type', 'image/jpg');
          return readstream.pipe(res);
        } else {
          console.log("No Find");
        }
      }
    });
  });
});


router.get('/Stills/:ProjectName/:FileName', function (req, res, next) {
  Project.findOne({Fullname : req.params.ProjectName}, function (err, project) {
    project.Stills.forEach(file => {
      if (file.Filename === req.params.FileName)  {
        if (fs.existsSync('/Users/Jeff/Desktop/Archive/' + project.Fullname + '/Exports/Stills/' + req.params.FileName))  {
          let readstream = fs.createReadStream('/Users/Jeff/Desktop/Archive/' + project.Fullname + '/Exports/Stills/' + req.params.FileName);
          res.set('Content-Type', 'image/jpg');
          return readstream.pipe(res);
        } else {
          console.log("No Find");
        }
      }
    });
  });
});

router.get('/Dailies/:ProjectName/:FileName', function (req, res, next) {
  Project.findOne({Fullname : req.params.ProjectName}, function (err, project) {
    project.Dailies.forEach(file => {
      if (file.Filename === req.params.FileName)  {
        if (fs.existsSync('/Users/Jeff/Desktop/Archive/' + project.Fullname + '/Exports/' + req.params.FileName))  {
          let readstream = fs.createReadStream('/Users/Jeff/Desktop/Archive/' + project.Fullname + '/Dailies/' + req.params.FileName);
          res.set('Content-Type', 'image/jpg');
          return readstream.pipe(res);
        } else {
          console.log("No Find");
        }
      }
    });
  });
});

router.get('/FinalCuts/:ProjectName/:FileName', function (req, res, next) {
  Project.findOne({Fullname : req.params.ProjectName}, function (err, project) {
    project.FinalCuts.forEach(file => {
      if (file.Filename === req.params.FileName)  {
        if (fs.existsSync('/Users/Jeff/Desktop/Archive/' + project.Fullname + '/Exports/Final Cut/' + req.params.FileName))  {
          let readstream = fs.createReadStream('/Users/Jeff/Desktop/Archive/' + project.Fullname + '/Exports/Final Cut/' + req.params.FileName);
          res.set('Content-Type', 'image/jpg');
          return readstream.pipe(res);
        } else {
          console.log("No Find");
        }
      }
    });
  });
});

router.get('/RoughCuts/:ProjectName/:FileName', function (req, res, next) {
  Project.findOne({Fullname : req.params.ProjectName}, function (err, project) {
    project.RoughCuts.forEach(file => {
      if (file.Filename === req.params.FileName)  {
        if (fs.existsSync('/Users/Jeff/Desktop/Archive/' + project.Fullname + '/Exports/Drafts/' + req.params.FileName))  {
          let readstream = fs.createReadStream('/Users/Jeff/Desktop/Archive/' + project.Fullname + '/Exports/Drafts/' + req.params.FileName);
          res.set('Content-Type', 'image/jpg');
          return readstream.pipe(res);
        } else {
          console.log("No Find");
        }
      }
    });
  });
});

module.exports = router;
