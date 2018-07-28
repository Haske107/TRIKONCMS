var mongoose = require('mongoose');
var project = require('./Assets/Project');
var Toolkit = require('./Assets/Toolkit');
var observableDiff = require('deep-diff').observableDiff;
var applyChange = require('deep-diff').applyChange;
var CronJob = require('cron').CronJob;
const _Archive = 'X:';

// DEFINE CRON JOB
var Job = new CronJob('*/10 * * * * *', function() {
    console.log("Starting Archive Upload Sequence: " + new Date);
    Toolkit.readProjectsFromArchive(_Archive).forEach( Project =>  {
      if (Project.Name) uploadProjectToDB(Project);
    });
    console.log("Archive Upload Sequence Complete");
}, function () {}, true);

// DB CREDENTIALS
const localurl = "mongodb://localhost:27017/";
const dbName = 'TRIKON-DB';
// CONNECT TO DB
mongoose.connect(localurl + dbName, function(err, result) {
  if (err)  {
    console.error(err);
  } else {
    console.log('Succesfully Connected to '  + dbName );
  }
});

// PROJECT UPLOADER
function uploadProjectToDB(Project)  {
  if (Project.Name.substr(Project.Name.length - 6) === 'Active' )  {
    Project.Name = Project.Name.substr(0, Project.Name.length - 7);
    console.log(Project.Name);
  }
  project.findOne({Name: Project.Name}, function(err, DBProject) {
    if (!err) {
      if (!DBProject)  {
        console.log('New Project!');
        let newProject = new project(Project);
        newProject.save(function(err, DBProject)  {
          if (!err) {
            console.log("Succesfully Saved to Database at " + new Date)
          }
        });
      } else {
        console.log('Project Exists');
        // COMPARE OBJECTS
        var A = [], B = [];
        Project.BTS.forEach(file => {
          A.push(file.Filename+file.Created);
        });
        DBProject.BTS.forEach( file => {
          B.push(file.Filename+file.Created);
        });
        observableDiff(DBProject, Project, Change => {
          if (Change.path[Change.path.length - 1] !== 'name' && Change.kind !== 'D') {
            applyChange(DBProject, Project, Change);
          }
        });
        DBProject.save(function(err, DBProject)  {
          if (!err) {
            console.log("Succesfully Saved to Database on " + new Date)
          }
        });
      }
    }
  });
}

// START SERVICE
Job.start();
