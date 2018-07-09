const Toolkit = require('./Assets/Toolkit');
const ncp = require('ncp').ncp;
const walkSync = require('walk-sync');
const FSTree = require('fs-tree-diff');
const fs = require('fs-extra');
const CronJob = require('cron').CronJob;
const EditingDriveA = '/Users/Jeff/Desktop/Editing-A';
const EditingDriveB = '/Users/Jeff/Desktop/Editing-B';


// DEFINE CRON JOB
const job = new CronJob('*/10 * * * * *', () => {
  console.log("Starting Back Up Sequence: " + new Date);
  Toolkit.readProjectsFromEditingDrive(EditingDriveA).forEach(Project =>  {
    backUpEditingDriveA(EditingDriveA, Project.Fullname);
  });
  Toolkit.readProjectsFromEditingDrive(EditingDriveB).forEach(Project =>  {
    // backUpEditingDrive(EditingDriveB, Project.Fullname);
  });
  console.log("Back Up Sequence Complete");
  }, function () {}, false
);

// DEFINE BACK UP
function backUpEditingDriveA(Fullpath, Projectpath) {}
function findActiveProjects() {
  let Projects = [];
  let ActiveProjects = [];
  Toolkit.readProjectsFromEditingDrive('/Users/Jeff/Desktop/Editing-A/').forEach(Project =>  {
    Projects.push(Project);
  });
  Toolkit.readProjectsFromEditingDrive('/Users/Jeff/Desktop/Editing-B/').forEach(Project =>  {
    Projects.push(Project);
  });
  Projects.forEach(Project => {
    if (Project.Fullname.substr(Project.Fullname.length - 4) !== 'Done'
      && Project.Fullname.substr(Project.Fullname.length - 4) !== 'done' )  {
      ActiveProjects.push(Project);
    }
  });
  return ActiveProjects;
} //DONE
function getActiveProjectPatches()  {
  let Archive = new FSTree({
    entries: walkSync.entries('../Archives')
  });
  let EditingDrives = new FSTree({
    entries: walkSync.entries(EditingDriveA)
  });

  EditingDrives.addEntries(walkSync.entries(EditingDriveB));
  let ValidPatches = [];

  Archive.calculatePatch(EditingDrives).forEach( Patch => {
    let ProjectName = Patch[2].relativePath.split('/', 1)[0];
    if (  ProjectName.substring(ProjectName.length - 6) === 'Active'
       && ProjectName.substr(ProjectName.length - 6) === 'active'
       && Patch[1] !== "/Users/Jeff/Desktop/Editing-A/"
       && Patch[1] !== "/Users/Jeff/Desktop/Editing-B/"
       && Patch[1] !== '.DS_Store'
    )  {
      ValidPatches.push(Patch);
    }
  });
  return ValidPatches;
}
function performPatch( Patch ) {
  const FullPath = Patch[2].basePath + '/' + Patch[2].relativePath;
  const DestPath = '../Archives/' + Patch[2].relativePath;
  switch (Patch[0]) {
    case 'mkdir': fs.mkdirSync(DestPath); break;
    case 'create' : fs.copyFileSync(FullPath, DestPath);  break;
    case 'unlink' : fs.unlinkSync(DestPath); break;
    case 'rmdir' :  fs.removeSync(DestPath); break;
  }
}
function findDoneProjects() {

}
function removeDoneTag()  {

}
function addActiveTag() {
  fs.readdirSync(EditingDriveB).forEach( Project => {

    if  (Project.substr(Project.length - 4) !== 'Done'
      || Project.substr(0,1) !== '.') {
      fs.renameSync(Project, Project + ' - Active');
    }
  });
}
function removeActiveTag() {
  fs.readdirSync(EditingDriveB).forEach( Project => {
    if  (Project.substr(Project.length - 9) !== '- Active') {
      fs.renameSync(Project, Project.substr(0, Project.length - 6));
    }
  });
}

function removeDoneProjectFromEditingDrive()  {

}
function checkIfProjectLanded() {

}

// BEGIN PROCESS
// job.start();

//UNIT TESTING
addActiveTag();




