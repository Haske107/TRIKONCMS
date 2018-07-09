const ncp = require('ncp').ncp;
const fs = require('fs');
const CronJob = require('cron').CronJob;

// PATH VARIABLES
const Archives = '../Archives';
const Destination = '../ArchiveBU';

// DEFINE CRON JOB
const job = new CronJob('*/10 * * * * *', () => {
    const Starttime = new Date;
    console.log("Starting Back Up Sequence: " + new Date);
    if (!fs.existsSync(Destination)) {
      fs.mkdirSync(Destination);
    }
    ncp(Archives, Destination, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('Successfully Backed Up Archive: Task Time - ' + (new Date - Starttime) + ' Seconds');
      }
    });
  console.log("Back Up Sequence Complete");
  }, () => {}, true
);

job.start();

