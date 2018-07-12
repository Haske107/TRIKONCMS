const ncp = require('ncp').ncp;
const fs = require('fs');
const CronJob = require('cron').CronJob;
const walkSync = require('walk-sync');
const FSTree = require('fs-tree-diff');


// PATH VARIABLES
const Archives = '/Users/Jeff/Desktop/Archive';
const Destination = '/Users/Jeff/Desktop/BackUp';
//  PATCH FUNCTIONS
function getProjectPatches() {
  let Archive = new FSTree({
    entries: walkSync.entries(Archives)
  });

  let EditingDrivesTree = new FSTree({
    entries: walkSync.entries(Destination)
  });

  let ValidPatches = [];

  for (let Patch of Archive.calculatePatch(EditingDrivesTree)) {
    let ProjectName = Patch[2].relativePath.split('/', 1)[0];
    if (Patch[1].split('/')[1] !== '.DS_Store'
      && !(Patch[0] === 'rmdir'
        && Patch[2].basePath === _Archive
        && Patch[1].split('/')[0].substr(Patch[1].split('/')[0].length - 6) !== 'Active')
    ) {
      console.log(Patch);
      ValidPatches.push(Patch);
    }
  }
  return ValidPatches;
}
function performPatch(Patch) {
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
  }
}

// DEFINE CRON JOB
const job = new CronJob('*/20 * * * * *', () => {
    const Starttime = new Date;
    console.log("Starting Back Up Sequence: " + new Date);
    if (!fs.existsSync(Destination)) {
      fs.mkdirSync(Destination);
    }

  console.log("Back Up Sequence Complete");
  }, () => {}, true
);

job.start();

