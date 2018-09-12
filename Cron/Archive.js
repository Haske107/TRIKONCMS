const Patcher = require('./PatchFinder');
const CronJob = require('cron').CronJob;

A = 'X:/';
B = 'Y:/';

// Job = new CronJob('*/10 * * * * *', function() {

  console.log("Beginning Back Up Sequence");
  const Patches = Patcher.getPatches(A, B);
  console.log(Patches.length + " Patches Found");
  if (!Patches.length) return;
  i = 1;
  for(let Patch of Patches)  {
    console.log("Patch #" + i);
    Patcher.performPatch(Patch, B);
    i++;
  }

// }, function () {}, true);
