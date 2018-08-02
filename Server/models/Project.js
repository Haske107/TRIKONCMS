var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ProjectSchema = new schema({

  //PROJECT BASIC DETAILS
  Name: {type: String},
  Type: {type: String},
  Date: {type: String},
  Size: {type: String},
  Description: {type: String},
  Fullname: {type: String},
  Path: {type: String},
  Ledger: [{
    ID: {type: String},
    Time: {type: String}
  }],

  // CSV ATTRIBUTES
  Producer: {type: String},
  Director: {type: String},
  Cinematographer: {type: String},
  Client: {type: String},
  PostSupervisor: {type: String},
  Editor: {type: String},
  DaysLeft: {type: String},
  City: {type: String},
  Country: {type: String},
  Camera: {type: String},
  ProductionStatus: {type: String},
  GreenlightStatus: {type: String},
  PhotographyStatus: {type: String},
  DeliverablesStatus: {type: String},
  DeliveredStatus: {type: String},


  Budget: {type: String},
  Revenue: {type: String},
  Paid: {type: String},
  ReleaseDate: {type: String},
  InitiatedDate: {type: String},
  CreatedPhase: {type: String},
  GreenlightDate: {type: String},
  ProductionDates: [{type: String}],
  EnterPost: {type: String},
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
  Notes: [{
    User: {type: String},
    Time: {type: String},
    Content: {type: String},
    VideoTime: {type: String},
    Addressed: {type: String}
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
  }],
  Delete: {type: String}
});

module.exports = mongoose.model('Project', ProjectSchema);
