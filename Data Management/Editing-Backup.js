const Toolkit = require('./Assets/Toolkit');
const ncp = require('ncp').ncp;
const walkSync = require('walk-sync');
const FSTree = require('fs-tree-diff');
const fs = require('fs-extra');
const path = require('path');
const CronJob = require('cron').CronJob;
const EditingDrives = ['/Users/Jeff/Desktop/Editing-A','/Users/Jeff/Desktop/Editing-B'];


// DEFINE CRON JOB
const job = new CronJob('*/4 * * * * *', () => {
  console.log("Starting Back Up Sequence: " + new Date);
  backUpEditingDrive();
  console.log("Back Up Sequence Complete");
  }, function () {}, false
);

// DEFINE BACK UP
function backUpEditingDrive() {
  //add active tags to active projects on editing drive
  addActiveTag();
  // compare active projects
  for (let patch of getActiveProjectPatches()) {
    // apply patches to archive
    performPatch(patch);
  }
  removeDoneProjectFromEditingDrive();
  removeDoneTag();
  removeActiveTag();
  console.log("CODE END------------");

}

  function getActiveProjectPatches() {
    let Archive = new FSTree({
      entries: walkSync.entries('../Archives')
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
        && Patch[1].split('/')[1] !== '.DS_Store'
        && !(Patch[0] === 'rmdir'
          && Patch[2].basePath === '../Archives'
          && Patch[1].split('/')[0].substr(Patch[1].split('/')[0].length - 6) !== 'Active')
      ) {
        console.log(Patch);

        ValidPatches.push(Patch);
      }
    }
    ;
    return ValidPatches;
  }
  function getDoneProjectPatches() {
    let Archive = new FSTree({
      entries: walkSync.entries('../Archives')
    });
    let EditingDrivesTree = new FSTree();
    for (let Drive of EditingDrives) {
      EditingDrivesTree.addEntries(walkSync.entries(Drive));
    }
    ;

    let ValidPatches = [];
    for (let Patch of Archive.calculatePatch(EditingDrivesTree)) {
      let ProjectName = Patch[2].relativePath.split('/', 1)[0];
      if (ProjectName.substring(ProjectName.length - 4) === 'Done'
        || ProjectName.substr(ProjectName.length - 4) === 'done'
        || Patch[1] !== "/Users/Jeff/Desktop/Editing-A/"
        || Patch[1] !== "/Users/Jeff/Desktop/Editing-B/"
        || Patch[1] !== '.DS_Store'
      ) {
        console.log(Patch);
        ValidPatches.push(Patch);
      }
    }
    ;
    return ValidPatches;
  }
  function performPatch(Patch) {
    const FullPath = Patch[2].basePath + '/' + Patch[2].relativePath;
    const DestPath = '../Archives/' + Patch[2].relativePath;
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
  }
  function addActiveTag() {
    for (let Drive of EditingDrives) {
      for (let Project of fs.readdirSync(Drive)) {
        if (Project.substr(Project.length - 4) !== 'Done'
          && Project.substr(0, 1) !== '.') {
          fs.renameSync(path.join(Drive, Project), path.join(Drive, Project) + '-Active');
        }
      }
    }
  } //
  function removeActiveTag() {
    for (let Drive of EditingDrives) {
      for (let Project of fs.readdirSync(Drive)) {
        if (Project.substr(Project.length - 6) === 'Active') {
          fs.renameSync(path.join(Drive, Project), path.join(Drive, Project.substr(0, Project.length - 7)));
        }
      }
    }
  } //
  function validateTransfer() {

  }
  function removeDoneProjectFromEditingDrive() {
    for (let Drive of EditingDrives) {
      for (let Project of fs.readdirSync(Drive)) {
        if (Project.substr(Project.length - 4) === 'Done'
          || Project.substr(Project.length - 4) === 'done') {
          fs.remove(path.join(Drive, Project), err => {});
        }
      }
    }
  } //
  function removeDoneTag()  {
      for (let Project of fs.readdirSync('../Archives')) {
        if (Project.substr(Project.length - 4) === 'Done'
          ||Project.substr(Project.length - 4) === 'done') {
          fs.renameSync(path.join('../Archives', Project), path.join('../Archives', Project.substr(0,Project.length - 5)));
          if (Project.substr(Project.length - 6) === 'Active')  {
            fs.renameSync(path.join('../Archives', Project), path.join('../Archives', Project.substr(0,Project.length - 7)));
          }
        }

      }
  }

// BEGIN PROCESS
job.start();

//UNIT TESTING
//removeActiveTag();
