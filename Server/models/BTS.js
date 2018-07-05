var mongoose = require('mongoose');
var schema = mongoose.Schema;

var BTSschema = new schema({
  Name: {type: String},
  Year: {type: String},
  Month: {type: String},
  Day: {type: String},
  Type: {type: String},
  Fullname: {type: String},
  ProjectID: {type: schema.Types.ObjectId, ref: 'BTS'}
});

module.exports = mongoose.model('BTS', BTSschema);
