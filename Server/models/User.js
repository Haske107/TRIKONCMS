var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Userschema = new schema({

  //PROJECT BASIC DETAILS
  UserName: {type: String},
  Email: {type: String},
  FName: {type: String},
  LName: {type: String},
  Type: {type: String},
  Company: {type: String},
  Bio: {type: String},
  UploadDate: {type: String},
  HashedPassword: {type: String},
  Ledger: [{
    ID: {type: String},
    Time: {type: Number},
    Type: {type: String}
  }],
  Documents: [{type: String}],
  ProfilePicture: [{type: String}],
  Delete: {type: Boolean}
});

module.exports = mongoose.model('User', Userschema);
