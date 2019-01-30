const Patcher = require('./PatchFinder');
const CronJob = require('cron').CronJob;
const fs = require('fs-extra');
const path = require('path');

let Active = 'Z:';
let Archive = 'Y:';




console.log("Starting Archive Back Up Service");

// Job = new CronJob('* * */4 * * *', function() {
  let Logs = fs.readdirSync("Z:\\.Misc\\Back Up Transfer Logs");
  let value = 0;
  for (let log of Logs) {
    Logvalue = parseInt(log.substr(4,4));
    if (value <= Logvalue) value = Logvalue + 1;
  }


  let Now = new Date().toISOString().replace(":", "-").replace(".","-");
  let Filename = "Z:\\.Misc\\Back Up Transfer Logs\\" + 'Log_' + value + '.txt';
  let Writer = fs.createWriteStream(Filename);

  console.log("Beginning Editing to Left Back Up Sequence");
  fs.appendFileSync(Filename,  '\n\nBEGINNING EDITING BACK UP TRANSFER ' + new Date().toISOString() + ' \n');


  let i = 0;
  for (i; i < 2; i++) {
    ActiveProjectNames = fs.readdirSync(Active);
    ArchiveProjectNames = fs.readdirSync(Archive);
    for (let Project of ActiveProjectNames) {
    if (Project !== ".DS_Store" && Project !== ".Misc" ) {
      let BackedUp = false;
      for (let ArchiveProject of ArchiveProjectNames) {
        if (Project === ArchiveProject) {
          BackedUp = true;
          console.log(Project + " Found in Archive");
        }
      }
      const Origin = path.join(Active, Project);
      const Destination = path.join(Archive, Project);
      if (!BackedUp) {
        fs.mkdirSync(Destination);
        console.log(Project + " Created in Archive");
      }

      const ProjectPatches = Patcher.getPatches(Origin, Destination);

      console.log(Project + ' needs ' + ProjectPatches.length + ' Total Patches');
      if(ProjectPatches.length === 0) {
        fs.appendFileSync(Filename, Project.padEnd(10) + ("     |" + Active + "->" + Archive + "| ").padEnd(10) + " VERIFIED SYNCED\n");
      } else {
        fs.appendFileSync(Filename,Project.padEnd(10) + " SYNC IN PROGRESS " + new Date().toISOString() + "\n\n\n* * * * * * * * * * * *\n\n\n");
      }

      for (let Patch of ProjectPatches) {
        fs.appendFileSync(Filename, Patch + '\n');
      }


      for (let i = 0; i < ProjectPatches.length; i++) {
        console.log("Beginning " + Project + " Patch #" + (i + 1));
        Patcher.performPatch(ProjectPatches[i], Destination);
        console.log("Completed " + Project + " Patch #" + (i + 1));

      }
      if(ProjectPatches.length !== 0)  {
        fs.appendFileSync(Filename, Project.padEnd(10) + " SYNC COMPLETE\n\n\n* * * * * * * * * * * *\n\n\n");
      }

    }
  }
  console.log("Editing to Left Back Up Sequence Complete -----------------");

  if (i === 0)  {
    Active = 'Y:';
    Archive = 'X:';
    console.log("Starting Left to Right Back Up Sequence ------------------");
    fs.appendFileSync(Filename,  '\n\nBEGINNING LEFT TO RIGHT TRANSFER '+ new Date().toISOString() +'\n');
  }

}

console.log("Back Up Left to Right Sequence Complete -----------------");
Writer.close();
// }, null, true,null,null,true);
