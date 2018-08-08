const ncp = require('ncp').ncp;
const fs = require('fs-extra');
const CronJob = require('cron').CronJob;
const walkSync = require('walk-sync');
const FSTree = require('fs-tree-diff');
const path = require('path');


// PATH VARIABLES
const Archives = '/Users/Jeff/Desktop/Archive';
const Destination = '/Users/Jeff/Desktop/BackUp';
//  PATCH FUNCTIONS
function getProjectPatches() {
  try {
    var Archive = new FSTree({
      entries: walkSync.entries(Archives)
    });

    var EditingDrivesTree = new FSTree({
      entries: walkSync.entries(Destination)
    });



  var ValidPatches = [];

  for (var Patch of EditingDrivesTree.calculatePatch(Archive)) {
    if (Patch[1].split('/')[1] !== '.DS_Store'
      && !(Patch[0] === 'rmdir'
        && Patch[2].basePath === Destination
        && Patch[1].split('/')[0].substr(Patch[1].split('/')[0].length - 6) !== 'Active')
    ) {
      ValidPatches.push(Patch);
    }
  }
  return ValidPatches;
  } catch (error) {
    console.log("ERROR OCCURED!", error);
    return [];
  }
}
function performPatch(Patch) {
  try {
    const FullPath = path.join(Patch[2].basePath, Patch[2].relativePath);
    const DestPath = path.join(Destination, Patch[2].relativePath);
    switch (Patch[0]) {
      case 'mkdir':
        fs.mkdirSync(DestPath);
        break;
      case 'create' :
        fs.copyFileSync(FullPath, DestPath);
        break;
      case 'unlink' :
        fs.unlinkSync(DestPath);
        break;
      case 'rmdir' :
        fs.removeSync(DestPath);
        break;
    }
  } catch (error) {
    console.log("Error Patching", error);
  }
}

// DEFINE CRON JOB
const job = new CronJob('*/3 * * * * *', () => {
    console.log("Starting Back Up Sequence: " + new Date);
    if (!fs.existsSync(Destination)) {
      fs.mkdirSync(Destination);
    }
    // FIND DONE PROJECTS IN ARCHIVE THAT ARE ACTIVE IN BACKUP
    for (var Project in fs.readdirSync(Destination)) {
      if (Project.substr(Project.length - 6) === 'Active')  {
        for (var _Project in fs.readdirSync(Archives)) {
          if (Project.substr(0, Project.length - 7) === _Project)  {
            fs.renameSync(path.join(Destination, Project),
              path.join(Destination, Project.substr(0, Project.length - 7)))
          }
        }
      }
    }

    for (var patch of getProjectPatches())  {
      performPatch(patch);
    }


  console.log("Back Up Sequence Compvare");
  }, () => {}, true
);

job.start();

