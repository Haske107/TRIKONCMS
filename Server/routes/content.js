var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const Project = require('../models/Project');
const DB = ["Y:/",'Z:/'];

router.get('/BTS/:ProjectName/:FileName', function (req, res, next) {
  Project.findOne({Fullname : req.params.ProjectName}, function (err, project) {
    if (err) return res.status(501);
    if (!project) return res.status(401);
    project.BTS.forEach(file => {
      if (file.Filename === req.params.FileName)  {
        if (fs.existsSync(DB + project.Fullname + '/BTS/Done/' + req.params.FileName))  {
          let readstream = fs.createReadStream(DB + project.Fullname + '/BTS/Done/' + req.params.FileName);
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
    if (err) return res.status(501);
    if (!project) return res.status(401);
    project.Stills.forEach(file => {
      if (file.Filename === req.params.FileName)  {
        if (fs.existsSync(DB[0] + project.Fullname + '/Exports/Stills/' + req.params.FileName))  {
          let readstream = fs.createReadStream(DB[0] + project.Fullname + '/Exports/Stills/' + req.params.FileName);
          res.set('Content-Type', 'image/jpg');
          return readstream.pipe(res);
        } else  if (fs.existsSync(DB[1] + project.Fullname + '/Exports/Stills/' + req.params.FileName))  {
          let readstream = fs.createReadStream(DB[1] + project.Fullname + '/Exports/Stills/' + req.params.FileName);
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
    if (err) return res.status(501);
    if (!project) return res.status(401);
    project.Dailies.forEach(file => {
      if (file.Filename === req.params.FileName)  {
        if (fs.existsSync(DB + project.Fullname + '/Exports/' + req.params.FileName))  {
          let readstream = fs.createReadStream(DB + project.Fullname + '/Dailies/' + req.params.FileName);
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
    if (err) return res.status(501);
    if (!project) return res.status(401);
    project.FinalCuts.forEach(file => {
      if (file.Filename === req.params.FileName)  {
        if (fs.existsSync(DB + project.Fullname + '/Exports/Final Cut/' + req.params.FileName))  {
          let readstream = fs.createReadStream(DB + project.Fullname + '/Exports/Final Cut/' + req.params.FileName);
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
    if (err) return res.status(501);
    if (!project) return res.status(401);
    project.RoughCuts.forEach(file => {
      if (file.Filename === req.params.FileName)  {
        if (fs.existsSync(DB[0] + project.Fullname + '/Exports/Drafts/' + req.params.FileName))  {
          let readstream = fs.createReadStream(DB[0] + project.Fullname + '/Exports/Drafts/' + req.params.FileName);
          res.set('Content-Type', 'image/jpg');
          return readstream.pipe(res);
        } else   if (fs.existsSync(DB[1] + project.Fullname + '/Exports/Drafts/' + req.params.FileName))  {
          let readstream = fs.createReadStream(DB[1] + project.Fullname + '/Exports/Drafts/' + req.params.FileName);
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
