const fs = require('fs');
const path = require('path');
//get folder name
//recursively scan folder
// copy transcodes to new transcodes folder
//open folder in finder

const FolderName = process.argv[2] ;

const walkSync = function(dir) {
  let files = fs.readdirSync(dir);
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      walkSync(dir + file + '/');
    }
    else {
      if (path.extname(file) === '.mov'
        || path.extname(file) === '.Mov'
        || path.extname(file) === '.MOV') {
        fs.copyFile(dir  + file, '/Users/Jeff/Desktop/Transcodes/' + file, err =>  {
          if (!err) {
            console.log("Copied over .mov File");
          } else {
            console.log("There was a problem copying file");
          }
        });
      } else {
      }
    }
  });
};
if (!fs.existsSync('/Users/Jeff/Desktop/Transcodes')) {
  fs.mkdirSync('/Users/Jeff/Desktop/Transcodes');
}
walkSync(FolderName);
