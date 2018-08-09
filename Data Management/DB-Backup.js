const ncp = require('ncp').ncp;
const fs = require('fs');
const CronJob = require('cron').CronJob;

// DEFINE CRON JOB
const job = new CronJob('*/10 * * * * *', () => {
    console.log("Starting Back Up Sequence: " + new Date);
    backUpDB(new Date);
    console.log("Back Up Sequence Complete");
  }, function () {}, true
);

// DEFINE BACK UP
function backUpDB(date) {
  const DB = 'G:\\';
  const Destination = 'E:\\';
  if (fs.existsSync(DB))  {
    console.log("Found the DB");
    if (fs.existsSync(Destination))  {
      console.log("Found the Destination");
    } else  {
      console.log("Can't Find the Destination");
      fs.mkdirSync(Destination);
      console.log("Created the Destination");
    }
    ncp(DB, Destination, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log('Successfully Backed Up DB: Task Time - ' + (new Date - date) + ' Seconds');
      }
    });
  } else  {
    console.log("Can't Find the DB")
  }
}

// BEGIN PROCESS
job.start();

