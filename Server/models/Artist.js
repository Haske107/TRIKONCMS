var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Artistschema = new schema({

  //PROJECT BASIC DETAILS
  Name: {type: String},
  Position: {type: String}
});

module.exports = mongoose.model('Artist', Artistschema);
