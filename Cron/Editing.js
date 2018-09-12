const Patcher = require('./PatchFinder');
const CronJob = require('cron').CronJob;
const fs = require('fs-extra');
const path = require('path');


const Active = 'Z:';
const Archive = 'X:';



// Job = new CronJob('*/10 * * * * *', function() {

console.log("Beginning Active Back Up Sequence");
ActiveProjectNames = fs.readdirSync(Active);
ArchiveProjectNames = fs.readdirSync(Archive);


for (let Project of ActiveProjectNames) {

  let BackedUp = false;

  for (let ArchiveProject of ArchiveProjectNames) {

    if (Project === ArchiveProject) {
      BackedUp = true;
      console.log(Project + " Found in Archive");
    }

  }

  const Origin = path.join(Active, Project);
  const Destination = path.join(Archive, Project);

  if (!BackedUp)  {
    fs.mkdirSync(Destination);
    console.log(Project + " Created in Archive");
  }

  const ProjectPatches = Patcher.getPatches(Origin, Destination);

  console.log(Project + ' needs ' + ProjectPatches.length + ' Total Patches');

  for (let i = 0; i < ProjectPatches.length; i++) {
    console.log("Beginning " + Project + " Patch #" + (i + 1));
    Patcher.performPatch(ProjectPatches[i], Destination);
    console.log("Completed " + Project + " Patch #" + (i + 1));

  }

}

console.log("Back Up Sequence Complete -----------------");







//
//
// console.log(Patches.length + " Patches Found");
// if (!Patches.length) return;
// i = 1;
// for(let Patch of Patches)  {
//   console.log("Patch #" + i);
//   Patcher.performPatch(Patch, B);
//   i++;
// }

// }, function () {}, true);
