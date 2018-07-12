var express = require('express');
var router = express.Router();
var ncp = require('ncp').ncp;
var project = require('../Models/Project');
const fs = require('fs');
var CronJob = require('cron').CronJob;


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// SCRIPT CONTAINER
router.get('/script', function(req, res, next) {
  var Project = readProjectFromArchive('070418-BC-Lorenza');
  project.findOne({Name: Project.Name}, function(err, result) {
    if (!err) {
      if (!result)  {
        console.log('New Project!');
        Project.save(function(err, result)  {
          if (!err) {
            console.log("Succesfully Saved to Database!")
          }
        });
      } else {
        console.log('Project Exists');
        project.deleteOne({Name: Project.Name}, function (err)  {
          if (!err)  {
            Project.save(function(err, result)  {
              if (!err) {
                console.log("Succesfully Saved to Database!")
              }
            });
          }
        });
      }
    }
  });
});



// ARCHIVE READ FUNCTIONS
function readProjectFromArchive(folder)  {
  var Fullpath = '../Archives/' + folder;
  var Project = new project();
  Project.Name = folder.substr(10);
  Project.Type = folder.substr(7, 2);
  Project.Date = fs.statSync(Fullpath).birthtime;
  Project.Fullname = folder;
  Project.BTS = readBTSFromArchive(Fullpath);
  Project.Stills = readStillsFromArchive(Fullpath);
  Project.Dailies = readDailiesFromArchive(Fullpath);
  Project.RoughCuts = readRoughCutsFromArchive(Fullpath);
  Project.FinalCuts = readFinalCutsFromArchive(Fullpath);
  Project.Size = calcContentSize(Project);
  return Project;
}
function readProjectsFromArchive(path)  {
  // RETURN FOLDER NAMES
  var projects = scanForProjects(path);
  // CREATE EMPTY PROJECTS LIST
  var Projects = [];
  // ITERATE THROUGH EACH PROJECT
  for (var i = 0; i < projects.length; i++) {
    // READ PROJECT FROM DRIVE, STORE INTO PROJECTS LIST
    Projects.push(readProjectFromArchive(projects[i]));
  }
  return Projects;
}
function readBTSFromArchive(ProjectPath)  {

  // SET USE-ABLE PATH
  var BTSPath = ProjectPath + '/BTS';

  // EXTRACT BTS
  var BTS = fs.readdirSync(BTSPath);

  // CREATE EMPTY LIST FOR FUTURE STORAGE
  var BTSFiles = [];

  // FOR EACH OBJECT
  for (var j = 0; j < BTS.length; j++) {

    // DECLARE ATTRIBUTES
    var Size = 0;
    var stats;
    var Birthdate;

    // CHECK IF FILE EXISTS
    if (fs.existsSync(BTSPath + '/' + BTS[j])) {
      // PULL FILE STATS
      stats = fs.statSync(BTSPath + '/' + BTS[j]);
      // STORE SIZE
      Size = stats.size;
      // STORE CREATED DATE
      Birthdate = stats.birthtime;
    } else {
      console.log("File not found");
    }

    // LOAD DATA INTO BTS OBJECT(S)
    BTSFiles.push({
      Filename: BTS[j],
      Size: Size,
      Created: Birthdate
    });
   }
    return BTSFiles;
}
function readStillsFromArchive(ProjectPath)  {

  // SET USE-ABLE PATH
  var StillsPath = ProjectPath + '/Exports/Stills';

  // EXTRACT STILLS
  var Stills = fs.readdirSync(StillsPath);

  // CREATE EMPTY LIST FOR FUTURE STORAGE
  var _Stills = [];

  // FOR EACH OBJECT
  for (var j = 0; j < Stills.length; j++) {
    // GET FILE STATS

    // LOAD DATA INTO STILL OBJECT(S)
    _Stills.push({
      Filename: Stills[j],
      Size: fs.statSync(StillsPath + "/" + Stills[j]).size,
      Created: fs.statSync(StillsPath + '/' + Stills[j]).birthtime
    });
  }
  return _Stills;

}
function readRoughCutsFromArchive(ProjectPath)  {

  // SET USE-ABLE PATH
  var Path = ProjectPath + '/Exports/Drafts';

  // EXTRACT VIDEO
  var RoughCuts = fs.readdirSync(Path);

  // CREATE EMPTY LIST FOR FUTURE STORAGE
  var RoughCutContainer = [];

  // FOR EACH OBJECT
  for (var j = 0; j < RoughCuts.length; j++) {

    // LOAD DATA INTO VIDEO OBJECT(S)
    RoughCutContainer.push({
      Filename: RoughCuts[j],
      Size: fs.statSync(Path + '/' + RoughCuts[j]).size,
      Created: fs.statSync(Path + '/' + RoughCuts[j]).birthtime
    });
  }
  return RoughCutContainer;

}
function readFinalCutsFromArchive(ProjectPath)  {
  // SET USE-ABLE PATH
  var FinalCutsPath = ProjectPath + '/Exports/Final Cut';

  // EXTRACT VIDEO
  var FinalCuts = fs.readdirSync(FinalCutsPath);

  // CREATE EMPTY LIST FOR FUTURE STORAGE
  var FinalCutsContainer = [];

  // FOR EACH OBJECT
  for (var j = 0; j < FinalCuts.length; j++) {

    // LOAD DATA INTO VIDEO OBJECT(S)
    FinalCutsContainer.push({
      Filename: FinalCuts[j],
      Size: fs.statSync(FinalCutsPath + '/' + FinalCuts[j]).size,
      Created: fs.statSync(FinalCutsPath + '/' + FinalCuts[j]).birthtime
    });
  }
  return FinalCutsContainer;
}
function readDailiesFromArchive(ProjectPath)  {

  // SET USE-ABLE PATH
  var DailiesPath = ProjectPath + '/Documents';

  // EXTRACT DAILIES
  var Dailies = fs.readdirSync(DailiesPath);

  // CREATE EMPTY LIST FOR FUTURE STORAGE
  var DailiesContainer = [];

  // FOR EACH OBJECT
  for (var j = 0; j < Dailies.length; j++) {

    // LOAD DATA INTO VIDEO OBJECT(S)
    DailiesContainer.push({
      Filename: Dailies[j],
      Created: fs.statSync(Dailies[j]).birthtime,
      Size: fs.statSync(Dailies[j]).size,
      Productiondate: Dailies[j].substr(0,6)
    });
  }
  return DailiesContainer;
}
function calcContentSize(Project) {
  var Size = 0;
  Project.BTS.forEach(function(File) {
    Size += File.Size;
  });
  Project.Stills.forEach(function(File) {
    Size += File.Size;
  });
  Project.RoughCuts.forEach(function(File) {
    Size += File.Size;
  });
  Project.FinalCuts.forEach(function(File) {
    Size += File.Size;
  });
  Project.Dailies.forEach(function(File) {
    Size += File.Size;
  });
  return Size;
}
// ARCHIVE CREATE FUNCTIONS
// DB READ FUNCTIONS
// DB CREATE FUNCTIONS
// DB UPDATE FUNCTIONS
// DB DELETE FUNCTIONS


// HELPER FUNCTIONS
function scanForProjects(path) {
  // OPEN READ STREAM TO STORE FOLDERS
  var folders = fs.readdirSync(path);
  // CHECK IF FOLDERS EXIST : EXIT OUT IF THEY DON'T
  if (!folders) {
    res.render('index', { title: "No Folders Found in " + path });
    return [];
  }
  // CREATE LIST FOR FOLDER NAMES
  var list = [];
  // ITERATE THROUGH LIST OF PROJECTS
  for (var i = 0; i < folders.length; i++) {
    // CHECK IF FOLDER IS PROJECT
    if (parseInt(folders[i].substr(0, 6))) {
      list.push(folders[i])
    }
  }
  return list;
};


// BACK UP
function backUpDB() {
  var DB = '../../../../../data/db';
  var Destination = '../BackUp';
  ncp(DB, Destination, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('Successfully Backed Up DB');
    }
  });
}



// ---- 1 MINUTE CYCLE ---
// READ ARCHIVE
// CHECK FOR MISSING FILES AND PROJECTS IN DB
// UPLOAD MISSING FILES
// CHECK FOR FILES IN DB NOT IN ARCHIVE
// REMOVE FILES FROM DB
// CHECK DROPBOX
// DOWNLOAD DROPBOX TO ARCHIVE





module.exports = router;
