const express = require('express');
const router = express.Router();
const MODEL_PATH = '../models/';
const User = require(MODEL_PATH + 'User');


// GET ALL ARTISTS
router.get('/artist/', function(req,res)  {
  User.find({type: 'Artist'}, function(err, Artists)  {
    if (err) return res.status(501);
    if (!Artists) return res.status(401);
    return res.status(200).json(Artists);
  });
});

// GET SPECIFIC ARTIST
router.get('/artist/:ID', function(req,res)  {
  User.findById(req.params.ID, function(err, Artist)  {
    if (err) return res.status(501);
    if (!Artist) return res.status(401);
    Artist.Ledger.push({
      Time: new Date().getTime(),
      Type: 'View'
    });
    Artist.save(function(err, success)  {
      if (err) return res.status(502);
      if (!success) return res.status(402);
      return res.status(200).json(Artist);
    });
  });
});

// VERIFICATION REQUIRED /////////////////////


// ARTIST ROUTES
  // CREATE ARTIST
router.post('/artist/', function(req,res)  {
  const newUser = new User(req.body);
  newUser.Ledger = [];
  newUser.Ledger.push({
    Time: new Date().getTime(),
    Type: 'CREATED'
  });
  newUser.save(function(err, success) {
    if (err) return res.status(501);
    if (!success) return res.status(401);
    return res.status(201);
  });
});
  // UPDATE ARTIST
router.post('/artist/update', function(req,res)  {
  User.findById(req.body.Artist_ID, function(err, Artist)  {
    if (err) return res.status(500);
    if (!Artist) return res.status(401);
    Artist[req.body.attribute] = req.body.newValue;
    Artist.Ledger.push({
      ID: req.body.Mod_ID,
      Time: new Date().getTime(),
      Type: 'MOD'
    });
    Artist.save(function(err, success)  {
      if (err) return res.status(500);
      if (!success) return res.status(401);
      return res.status(200);
    });
  });
});
  // REMOVE ARTIST
router.post('/artist/remove', function(req,res)  {
  User.findById(req.body.Artist_ID, function(err, Artist)  {
    if (err) return res.status(500);
    if (!Artist) return res.status(401);
    Artist.Delete = true;
    Artist.Ledger.push({
      ID: req.body.Mod_ID,
      Time: new Date().getTime(),
      Type: 'DEL'
    });
    Artist.save(function(err, success)  {
      if (err) return res.status(500);
      if (!success) return res.status(401);
      return res.status(200);
    });
  });
});
// CLIENT ROUTES ////////////

// GET ALL CLIENTS
router.get('/client/', function(req,res)  {
  User.find({type: 'Client'}, function(err, Clients)  {
    if (err) return res.status(501);
    if (!Clients) return res.status(401);
    return res.status(200).json(Clients);
  });
});

// GET SPECIFIC CLIENT
router.get('/client/:ID', function(req,res)  {
  User.findById(req.params.ID, function(err, Client)  {
    if (err) return res.status(501);
    if (!Client) return res.status(401);
    Client.Ledger.push({
      Time: new Date().getTime(),
      Type: 'View'
    });
    Client.save(function(err, success)  {
      if (err) return res.status(502);
      if (!success) return res.status(402);
      return res.status(200).json(Client);
    });
  });
});

// CREATE CLIENT
router.post('/client/', function(req,res)  {
  const newUser = new User(req.body);
  newUser.save(function(err, success) {
    if (err) return res.status(501);
    if (!success) return res.status(401);
    return res.status(201);
  });
});
// UPDATE CLIENT
router.post('/client/update', function(req,res)  {
  User.findById(req.body.ID, function(err, Client)  {
    if (err) return res.status(500);
    if (!Client) return res.status(401);
    Client[req.body.attribute] = req.body.newValue;
    Client.Ledger.push({
      ID: req.body.Mod_ID,
      Time: new Date().getTime(),
      Type: 'Mod'
    });
    Client.save(function(err, success)  {
      if (err) return res.status(500);
      if (!success) return res.status(401);
      return res.status(200);
    });
  });
});
// REMOVE CLIENT
router.post('/client/remove', function(req,res)  {
  User.findById(req.body.ID, function(err, Client)  {
    if (err) return res.status(500);
    if (!Client) return res.status(401);
    Client.Delete = true;
    Client.save(function(err, success)  {
      if (err) return res.status(500);
      if (!success) return res.status(401);
      return res.status(200);
    });
  });
});

// ADMIN ROUTES /////////
// GET ALL ADMIN
router.get('/admin/', function(req,res)  {
  User.find({type: 'Admin'}, function(err, Admins)  {
    if (err) return res.status(501);
    if (!Admins) return res.status(401);
    return res.status(200).json(Admins);
  });
});

// GET SPECIFIC CLIENT
router.get('/admin/:ID', function(req,res)  {
  User.findById(req.params.ID, function(err, Admin)  {
    if (err) return res.status(501);
    if (!Admin) return res.status(401);
    Admin.Ledger.push({
      Time: new Date().getTime(),
      Type: 'View'
    });
    Admin.save(function(err, success)  {
      if (err) return res.status(502);
      if (!success) return res.status(402);
      return res.status(200).json(Admin);
    });
  });
});

// CREATE CLIENT
router.post('/admin/', function(req,res)  {
  const newUser = new User(req.body);
  newUser.save(function(err, success) {
    if (err) return res.status(501);
    if (!success) return res.status(401);
    return res.status(201);
  });
});
// UPDATE CLIENT
router.post('/admin/update', function(req,res)  {
  User.findById(req.body.ID, function(err, Admin)  {
    if (err) return res.status(500);
    if (!Admin) return res.status(401);
    Admin[req.body.attribute] = req.body.newValue;
    Admin.Ledger.push({
      ID: req.body.ModsID,
      Time: new Date().getTime(),
      Type: 'Mod'
    });
    Admin.save(function(err, success)  {
      if (err) return res.status(500);
      if (!success) return res.status(401);
      return res.status(200);
    });
  });
});
// REMOVE CLIENT
router.post('/admin/remove', function(req,res)  {
  User.findById(req.body.ID, function(err, Admin)  {
    if (err) return res.status(500);
    if (!Admin) return res.status(401);
    Admin.Delete = true;
    Client.save(function(err, success)  {
      if (err) return res.status(500);
      if (!success) return res.status(401);
      return res.status(200);
    });
  });
});




module.exports = router;
