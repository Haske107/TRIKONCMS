var childProcess = require('child_process');
var CronJob = require('cron').CronJob;

function runScript(scriptPath, callback) {

  // keep track of whether callback has been invoked to prevent multiple invocations
  var invoked = false;

  var process = childProcess.fork(scriptPath);

  // listen for errors as they may prevent the exit event from firing
  process.on('error', function (err) {
    if (invoked) return;
    invoked = true;
    callback(err);
  });

  // execute the callback once the process has finished running
  process.on('exit', function (code) {
    if (invoked) return;
    invoked = true;
    var err = code === 0 ? null : new Error('exit code ' + code);
    callback(err);
  });

}

// DEFINE CRON JOB
var Job = new CronJob('*/10 * * * * *', function() {
  console.log("Starting CSV Upload Sequence: " + new Date);
  // Now we can run a script and invoke a callback when complete, e.g.
  runScript('./index.js', function (err) {
    if (err) throw err;
    console.log('finished running CSV Script.js');
  });
  console.log("CSV Upload Sequence Complete");
}, function () {}, true);


Job.start();
