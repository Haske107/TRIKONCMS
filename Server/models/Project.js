var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ProjectSchema = new schema({
  Name: {type: String},
  Year: {type: String},
  Month: {type: String},
  Day: {type: String},
  Type: {type: String},
  Fullname: {type: String},
  BTS: [{type: schema.Types.ObjectId, ref: 'BTS'}]
});

module.exports = mongoose.model('Project', ProjectSchema);
