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
router.post('/change', function(req, res) {

  //  EXTRACT VALUES FROM BODY
  const Attribute = req.body.Attribute;
  const NewValue = req.body.NewValue;
  const User = req.body.User;
  const _Name = req.body.Name;

  // FIND THE PROJECT IN THE DATABASE USING THE NAME IN THE BODY
  Project.findOne({Name : _Name}).exec(function(err, _Project) {
    if (err) return handleError(err);
    if(!_Project) {
      return res.status(500).json({
        title: 'No Project Found Under the Name ' + _Name,
      });
    }
    // IF A PROJECT IS FOUND
    if(_Project)  {

      // MAKE CHANGE OBJECT
      _Project[Attribute] = NewValue;

      // UPDATE THE ATTRIBUTE FROM THE DATA IN THE BODY
      // UPDATE THE LEDGER WITH NEW STAMP
      let NewStamp = {
        ID: req.body.User,
        Time: new Date().getTime()
      };
      console.log( _Project[Attribute]);
      _Project.Ledger.push(NewStamp);
      // SAVE THE PROJECT
      _Project.save(function (err, UpdatedProject) {
          return res.status(200).json({
            title: "Saved",
            obj: UpdatedProject
          });

      });
    }
  });
});

module.exports = router;
