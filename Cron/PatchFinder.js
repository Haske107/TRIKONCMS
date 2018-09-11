const walkSync = require('walk-sync');
const FSTree = require('fs-tree-diff');
const path = require('path');
const fs = require('fs-extra');

exports.getPatches =  function (A,B) {
  try {
    let Original = new FSTree();
    Original.addEntries(walkSync.entries(A));
    let Destination = new FSTree();
    Destination.addEntries(walkSync.entries(B));
    let ValidPatches = [];
    const Patches = Destination.calculatePatch(Original);
    for (let Patch of Patches) {
      if(Patch[2].relativePath.substr(0,1) !== '$') ValidPatches.push(Patch);
    }
    return ValidPatches;
  } catch (error) {
    console.log("Error!", error);
    return [];
  }
};



exports.performPatch =  function (Patch, destPath) {
  try {
    const FullPath = path.join(Patch[2].basePath, Patch[2].relativePath);
    const DestPath = path.join(destPath, Patch[2].relativePath);
    console.log(Patch[0] + "  " + DestPath);
    switch (Patch[0]) {
      case 'mkdir':
        fs.mkdirSync(DestPath);
        break;
      case 'create' :
        fs.copyFileSync(FullPath, DestPath);
        break;
      case 'unlink' :
        fs.unlinkSync(DestPath);
        break;
      case 'rmdir' :
        fs.removeSync(DestPath);
        break;
      case 'change' :
        fs.removeSync(DestPath);
        fs.copyFileSync(FullPath, DestPath);
        break;
    }
  } catch (error) {
    console.log("Error Patching", error);
  }
};
