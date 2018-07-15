const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const path = require('path');



// GET ALL PROJECTS
router.get('/all', function (req, res, next) {
  Project.find({}, function(err, Projects) {
    if (err) {
      return res.status(500).json({
        title: 'An Error Occured',
        error: err
      });
    }
    res.status(202).json({
      message: 'Success',
      obj: Projects
    });
  });
});

// FIND A SPECIFIC PROJECT BY NAME
router.get('/:Name', function (req, res, next) {
  Project.findOne({Name : req.params.Name}).exec(function(err, _Project) {
    if(err) {
      return res.status(500).json({
        title: 'An Error Occured',
        error: err
      });
    }
    res.status(202).json({
      message: 'Success',
      obj: _Project
    });
  });
});
// VERIFY -----------------------

// UPDATE PROJECT
    //body
        // Attribute
        // value
        // user
router.post('/', function(req, res) {



//EXTERNAL ROUTER
// /* ALWAYS AT THE BOTTOM OF THE ROUTES */
  router.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '../dist/index.html'));
  });
});

module.exports = router;
