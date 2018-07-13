const fs = require('fs');
const path = require('path');
const FolderName = '/Volumes/La Distancia - Production Drive/070118-MV-La Distancia/Footage/Transcodes/';
const Source = '/Volumes/La Distancia - Production Drive/070118-MV-La Distancia/Footage/Raw/';
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
