const fs = require('fs');
const path = require('path');
const _Archive = ['K:','F:'];

exports.readProjectFromArchive =  readProjectFromArchive;
exports.readProjectsFromArchive = function(path)  {
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
};
exports.readProjectsFromEditingDrive = function(path) {
  // RETURN FOLDER NAMES
  var projects = scanForProjects(path);
  // CREATE EMPTY PROJECTS LIST
  var Projects = [];
  // ITERATE THROUGH EACH PROJECT
  for (var i = 0; i < projects.length; i++) {
    // READ PROJECT FROM DRIVE, STORE INTO PROJECTS LIST
    Projects.push(readProjectFromEditingDrive(projects[i], path));
  }
  return Projects;
};

// ARCHIVE READ FUNCTIONS
readBTSFromArchive = function(ProjectPath)  {

  // SET USE-ABLE PATH
  var BTSPath = path.join(ProjectPath, '/BTS/Done/');

  // EXTRACT BTS
  var BTS = fs.existsSync(BTSPath) ? fs.readdirSync(BTSPath) : [];


  // CREATE EMPTY LIST FOR FUTURE STORAGE
  var BTSFiles = [];

  // FOR EACH OBJECT
  for (var j = 0; j < BTS.length; j++) {
      // DECLARE ATTRIBUTES
      var Size = 0;
      var stats;
      var Birthdate;

      // CHECK IF FILE EXISTS
      if (fs.existsSync(BTSPath + BTS[j])) {
        // PULL FILE STATS
        stats = fs.statSync(BTSPath + BTS[j]);
        // STORE SIZE
        Size = stats.size;
        // STORE CREATED DATE
        Birthdate = new Date(stats.birthtime).getTime();
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
};
readStillsFromArchive = function(ProjectPath)  {

  // SET USE-ABLE PATH
  var StillsPath = ProjectPath + '/Exports/Stills';

  // EXTRACT STILLS
  var Stills = fs.existsSync(StillsPath) ? fs.readdirSync(StillsPath) : [];

  // CREATE EMPTY LIST FOR FUTURE STORAGE
  var _Stills = [];

  // FOR EACH OBJECT
  for (var j = 0; j < Stills.length; j++) {
    // GET FILE STATS

    // LOAD DATA INTO STILL OBJECT(S)
    let l = Stills[j].substr(Stills[j].length - 3);
    if(l === 'jpg' ||
       l === 'JPG' ||
       l === 'png' ||
       l === 'PNG') {
      _Stills.push({
        Filename: Stills[j],
        Size: fs.statSync(StillsPath + "/" + Stills[j]).size,
        Created: new Date(fs.statSync(StillsPath + '/' + Stills[j]).birthtime)
      });
    }

  }
  return _Stills;

};
readRoughCutsFromArchive = function(ProjectPath)  {

  // SET USE-ABLE PATH
  var Path = ProjectPath + '/Exports/Drafts';

  // EXTRACT VIDEO
  var RoughCuts =  fs.existsSync(Path) ? fs.readdirSync(Path) : [];

  // CREATE EMPTY LIST FOR FUTURE STORAGE
  var RoughCutContainer = [];

  // FOR EACH OBJECT
  for (var j = 0; j < RoughCuts.length; j++) {

    // LOAD DATA INTO VIDEO OBJECT(S)
    RoughCutContainer.push({
      Filename: RoughCuts[j],
      Size: fs.statSync(Path + '/' + RoughCuts[j]).size,
      Created: new Date(fs.statSync(Path + '/' + RoughCuts[j]).birthtime).getTime()
    });
  }
  return RoughCutContainer;

};
readFinalCutsFromArchive = function(ProjectPath)  {
  // SET USE-ABLE PATH
  var FinalCutsPath = ProjectPath + '/Exports/Final Cut';

  // EXTRACT VIDEO
  var FinalCuts =  fs.existsSync(FinalCutsPath) ? fs.readdirSync(FinalCutsPath) : [];

  // CREATE EMPTY LIST FOR FUTURE STORAGE
  var FinalCutsContainer = [];

  // FOR EACH OBJECT
  for (var j = 0; j < FinalCuts.length; j++) {

    // LOAD DATA INTO VIDEO OBJECT(S)
    FinalCutsContainer.push({
      Filename: FinalCuts[j],
      Size: fs.statSync(FinalCutsPath + '/' + FinalCuts[j]).size,
      Created: new Date(fs.statSync(FinalCutsPath + '/' + FinalCuts[j]).birthtime).getTime()
    });
  }
  return FinalCutsContainer;
};
readDailiesFromArchive = function(ProjectPath)  {

  // SET USE-ABLE PATH
  var DailiesPath = ProjectPath + '/Documents';

  // EXTRACT DAILIES
  var Dailies =  fs.existsSync(DailiesPath) ? fs.readdirSync(DailiesPath) : [];

  // CREATE EMPTY LIST FOR FUTURE STORAGE
  var DailiesContainer = [];

  // FOR EACH OBJECT
  for (var j = 0; j < Dailies.length; j++) {

    // LOAD DATA INTO VIDEO OBJECT(S)
    DailiesContainer.push({
      Filename: Dailies[j],
      Created: new Date(fs.statSync(Dailies[j]).birthtime).getTime(),
      Size: fs.statSync(Dailies[j]).size,
      Productiondate: Dailies[j].substr(0,6)
    });
  }
  return DailiesContainer;
};

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
function readProjectFromArchive(folder)  {
  var Fullpath = _Archive + folder;
  var Project = {};
  Project.Name = folder.split('-')[2];
  Project.Type = folder.split('-')[1];
  try {
    Project.Date = new Date(fs.statSync(Fullpath).birthtime).getTime();
  } catch (err) {
    console.log("-");
    Project.Date = new Date(fs.statSync(Fullpath + '-Active').birthtime).getTime();
  }
  Project.Fullname = folder;
  Project.BTS = readBTSFromArchive(Fullpath);

  Project.Stills = readStillsFromArchive(Fullpath);
  Project.Dailies = readDailiesFromArchive(Fullpath);
  Project.RoughCuts = readRoughCutsFromArchive(Fullpath);
  Project.FinalCuts = readFinalCutsFromArchive(Fullpath);
  Project.Size = calcContentSize(Project);
  return Project;
}
function readProjectFromEditingDrive(folder, FullPath)  {
  var Fullpath = path.join(FullPath, folder);
  var Project = {};
  Project.Name = folder.substr(10);
  Project.Type = folder.substr(7, 2);
  Project.Date = new Date(fs.statSync(Fullpath).birthtime).getTime();
  Project.Fullname = folder;
  Project.BTS = readBTSFromArchive(Fullpath);
  Project.Stills = readStillsFromArchive(Fullpath);
  Project.Dailies = readDailiesFromArchive(Fullpath);
  Project.RoughCuts = readRoughCutsFromArchive(Fullpath);
  Project.FinalCuts = readFinalCutsFromArchive(Fullpath);
  Project.Size = calcContentSize(Project);
  return Project;
}


