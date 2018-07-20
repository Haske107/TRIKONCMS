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
  const NewValue = req.body.Value;
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
      // UPDATE THE ATTRIBUTE FROM THE DATA IN THE BODY
      _Project.set({ Attribute: NewValue });
      // UPDATE THE LEDGER WITH NEW STAMP
      let NewStamp = {
        ID: req.body.User,
        Time: now()
      };
      let OldLedger = _Project.Ledger;
      let newLedger = OldLedger.push(NewStamp);
      _Project.set({ Ledger: newLedger });
      // SAVE THE PROJECT
      _Project.save(function (err, UpdatedProject) {
        if (err) return handleError(err);
        res.send(UpdatedProject);
      });
    }
  });
});

module.exports = router;
