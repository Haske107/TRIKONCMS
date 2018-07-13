
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ProjectSchema = new schema({

  //PROJECT BASIC DETAILS
  Name: {type: String},
  Type: {type: String},
  Date: {type: String},
  Size: {type: String},
  Fullname: {type: String},
  Path: {type: String},
  Ledger: [{
    ID: {type: String},
    Time: {type: String}
  }],

  // NON-ARCHIVED ATTRIBUTES
  Producer: {type: String},
  Director: {type: String},
  Cinematographer: {type: String},
  Actor: [{type: String}],
  Musician: [{type: String}],
  ReleaseDate: {type: String},
  CreatedPhase: {type: String},
  GreenlightDate: {type: String},
  ProductionDates: [{type: String}],
  PostDates: {
    Begin: {type: String},
    End: {type: String}
  },
  Delivery: {type: String},

  // ATTACHED FILES
  BTS: [{
    Filename: {type: String},
    Size: {type: Number},
    Created: {type: String},
    Ledger: [{
      ID: {type: String},
      Time: {type: String}
    }]
  }],
  Stills: [{
    Filename: {type: String},
    Size: {type: Number},
    Created: {type: String},
    Ledger: [{
      ID: {type: String},
      Time: {type: String}
    }]
  }],
  RoughCuts: [{
    Filename: {type: String},
    Size: {type: Number},
    Created: {type: String},
    Type: {type: String},
    Ledger: [{
      ID: {type: String},
      Time: {type: String}
    }]
  }],
  FinalCuts: [{
    Filename: {type: String},
    Size: {type: Number},
    Created: {type: String},
    Type: {type: String},
    Ledger: [{
      ID: {type: String},
      Time: {type: String}
    }]
  }],
  Dailies: [{
    Filename: {type: String},
    Created: {type: String},
    Size: {type: Number},
    Productiondate: {type: String},
    Ledger: [{
      ID: {type: String},
      Time: {type: String}
    }]
  }]
});

module.exports = mongoose.model('Project', ProjectSchema);
