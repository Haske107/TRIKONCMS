/**
 * Created by Jeff on 7/2/2017.
 */


export class Project       {
  Name: string;
  Type: string;
  Date: string;
  Size: string;
  Fullname: string;
  Path: string;
  Ledger: [{
    ID: string,
    Time: string
  }];

  // NON-ARCHIVED ATTRIBUTES
  Producer: string;
  Director: string;
  Cinematographer: string;
  Actor: [string];
  Musician: [string];
  ReleaseDate: string;
  CreatedPhase: string;
  GreenlightDate: string;
  ProductionDates: [string];
  PostDates: {
    Begin: string,
    End: string
  };
  Delivery: string;
  Budget: number;
  revenue: number;


  // ATTACHED FILES
  BTS: [{
    Filename: string;
    Size: {type: Number},
    Created: string;
    Ledger: [{
      ID: string,
      Time: string
    }]
  }];
  Stills: [{
    Filename: string;
    Size: {type: Number},
    Created: string;
    Ledger: [{
      ID: string,
      Time: string
    }]
  }];
  RoughCuts: [{
    Filename: string;
    Size: number;
    Created: string;
    Type: string;
    Approved: boolean;
    Ledger: [{
      ID: string,
      Time: string
    }]
    Notes: [{
      User: string,
      Time: string,
      Content: string,
      VideoTime: string,
      Addressed: string
    }]
  }];
  FinalCuts: [{
    Filename: string;
    Size: number;
    Created: string;
    Type: string;
    Ledger: [{
      ID: string,
      Time: string
    }]
  }];
  Dailies: [{
    Filename: string;
    Created: string;
    Size: number;
    Productiondate: string;
    Ledger: [{
      ID: string,
      Time: number
    }]
  }];
  Delete: boolean;



  constructor (
    Project: any
  ) {
    this.Name = Project.Name;
    this.Type = Project.Type;
    this.Date = Project.Date;
    this.Size = Project.Size;
    this.Fullname = Project.Fullname;
    this.Path = Project.Path;
    this.Ledger = Project.Ledger;
    this.Producer = Project.Producer;
    this.Director = Project.Director;
    this.Cinematographer = Project.Cinematographer;
    this.Actor = Project.Actor;
    this.Musician = Project.Musician;
    this.ReleaseDate = Project.ReleaseDate;
    this.CreatedPhase = Project.CreatedPhase;
    this.GreenlightDate = Project.GreenlightDate;
    this.ProductionDates = Project.Productiondates;
    this.PostDates = Project.PostDates;
    this.Delivery = Project.Delivery;
    this.BTS = Project.BTS;
    this.Stills = Project.Stills;
    this.RoughCuts = Project.RoughCuts;
    this.FinalCuts = Project.FinalCuts;
    this.Dailies = Project.Dailies;
    this.Delete = Project.Delete;
  }
}
