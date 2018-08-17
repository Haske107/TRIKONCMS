
const walkSync = require('walk-sync');
const FSTree = require('fs-tree-diff');
const fs = require('fs-extra');
const path = require('path');
const CronJob = require('cron').CronJob;
const EditingDrives = ['/Users/Jeff/Desktop/Editing'];
const _Archive = '/Users/Jeff/Desktop/Archive';

// DEFINE CRON JOB
const job = new CronJob('*/4 * * * * *', () => {
  console.log("Starting Back Up Sequence: " + new Date);
  backUpEditingDrive();
  console.log("Back Up Sequence Complete");
  }, function () {}, false
);

// DEFINE BACK UP
function backUpEditingDrive() {
  let DoneProjects = [];
  let ActiveProjects = [];
  // POPULATE LISTS
  for (let Drive of EditingDrives)  {
    for (let Project of fs.readdirSync(Drive))  {
      if (Project !== '.DS_Store')  {
        if (Project.substr( Project.length - 4) !== 'Done') {
          ActiveProjects.push(Project);
        } else {
          DoneProjects.push(Project.substr(0 , Project.length-5));
        }
      }
    }
  }
  // REMOVE ARCHIVE TAGS
  for (let Project of fs.readdirSync(_Archive)) {
    if (Project.substr(Project.length - 6) === 'Active')  {
      fs.renameSync(path.join(_Archive, Project), path.join(_Archive, Project.substr(0, Project.length - 7)))
    }
  }
  // REMOVE DONE TAGS
  for (let Drive of EditingDrives)  {
    for (let Project of fs.readdirSync(Drive)) {
      if (Project.substr(Project.length - 4) === 'Done')  {
        fs.renameSync(path.join(Drive, Project), path.join(Drive, Project.substr(0, Project.length - 5)))
      }
    }
  }
  // DO THE PATCHY PATCH
  for (let Patch of getProjectPatches())  {
    performPatch(Patch);
  }
  // ADD ACTIVE TAGS
  for (let Project of fs.readdirSync(_Archive)) {
    for (let _Project of ActiveProjects)  {
      if (_Project === Project) {
        fs.renameSync(path.join(_Archive, Project), path.join(_Archive, Project + '-Active'));
      }
    }
  }
  // REMOVE DONE PROJECT FROM EDITING DRIVE
  for (let Drive of EditingDrives)  {
    for (let Project of fs.readdirSync(Drive)) {
      for (let _Project of DoneProjects)  {
        if (_Project === Project) {
          fs.remove(path.join(Drive, Project));
        }
      }
    }
  }
}
  function getProjectPatches() {
  try {
    let Archive = new FSTree({
      entries: walkSync.entries(_Archive)
    });

    let EditingDrivesTree = new FSTree();

    for (let Drive of EditingDrives) {
      EditingDrivesTree.addEntries(walkSync.entries(Drive));
    }

    let ValidPatches = [];

    for (let Patch of Archive.calculatePatch(EditingDrivesTree)) {
      let ProjectName = Patch[2].relativePath.split('/', 1)[0];
      if (Patch[1] !== "/Users/Jeff/Desktop/Editing-A/"
        && Patch[1] !== "/Users/Jeff/Desktop/Editing-B/"
        && Patch[1] !== '.DS_Store'
        && Patch[1].split('/')[Patch[1].split('/').length - 1] !== '.DS_Store'
        && !(Patch[0] === 'rmdir'
          && Patch[2].basePath === _Archive
          && Patch[1].split('/')[0].substr(Patch[1].split('/')[0].length - 6) !== 'Active')
      ) {
        console.log(Patch);
        ValidPatches.push(Patch);
      }
    }
    return ValidPatches;
  } catch (error) {
    console.log("Error!", error);
    return [];
  }
  }
  function performPatch(Patch) {
  try {
    const FullPath = Patch[2].basePath + '/' + Patch[2].relativePath;
    const DestPath = _Archive + Patch[2].relativePath;
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
      case 'change' :
        console.log("test");
        break;
    }
  } catch (error) {
    console.log("Error Patching", error);

  }
  }

// BEGIN PROCESS
job.start();

//UNIT TESTING
