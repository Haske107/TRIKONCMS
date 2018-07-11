const fs = require('fs');
const path = require('path');
const FolderName = '/Volumes/Onset - B/070918-BC-Lorenza/Footage/Transcodes/';
const Source = '/Volumes/Onset - B/070918-BC-Lorenza/Footage/Raw/';
const walkSync = function(dir) {
  if (!fs.existsSync(FolderName)) {
    fs.mkdirSync('/Volumes/Onset - B/Transcodes/');
  }
  let files = fs.readdirSync(dir);
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      walkSync(dir + file + '/');
    }
    else {
      if (path.extname(file) === '.mov'
        || path.extname(file) === '.Mov'
        || path.extname(file) === '.MOV') {
        fs.renameSync(dir  + file, FolderName + file);
      } else {
      }
    }
  });
};
walkSync(Source);
