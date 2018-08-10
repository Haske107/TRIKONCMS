const express = require('express');
const router = express.Router();
const MODEL_PATH = '../models/';
const Artist = require(MODEL_PATH + 'Artist');


// GET ALL ARTISTS
router.get('/collab', function(req,res)  {
  Artist.find({}, function(err, Artists)  {
    if (err) return res.status(501);
    if (!Artists) return res.status(401);
    return res.status(200).json(Artists);
  });
});
