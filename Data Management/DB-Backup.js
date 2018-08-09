const ncp = require('ncp').ncp;
const fs = require('fs');
const CronJob = require('cron').CronJob;

// // DEFINE CRON JOB
// const job = new CronJob('*/10 * * * * *', () => {
//     console.log("Starting Back Up Sequence: " + new Date);
//     backUpDB(new Date);
//     console.log("Back Up Sequence Complete");
//   }, function () {}, true
// );
//
// // DEFINE BACK UP
// function backUpDB(date) {
//
//
// }
//
// // BEGIN PROCESS
// job.start();


// GET PROJECT PATCHES
function getProjectPatches() {
  try {

    let Archive = new FSTree({
      entries: walkSync.entries('E:\\')
    });

    let EditingDrivesTree = new FSTree({
      entries: walkSync.entries('U:\\')
    });

    let ValidPatches = [];

    for (let Patch of EditingDrivesTree.calculatePatch(Archive)) {

      ValidPatches.push(Patch);

    }

    return ValidPatches;

  } catch (error) {

    console.log("ERROR OCCURED!", error);
    return [];

  }
}


cosole.log(getProjectPatches());
