var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/script', function(req, res, next) {

  // ARCHIVE PATH
  var Archive = '../Archives/';

  // RETURN FOLDER NAMES
  var projects = scanForProjects(Archive);

  // CREATE EMPTY PROJECTS LIST
  var Projects = [];

  // ITERATE THROUGH EACH POSSIBLE PROJECT
  for (var i = 0; i < projects.length; i++) {

    // EXTRACT INFO FROM FOLDER NAME
    var Day = projects[i].substr(2, 2);
    var Month = projects[i].substr(0, 2);
    var Year = projects[i].substr(4, 2);
    var Type = projects[i].substr(7, 2);
    var Name = projects[i].substr(10);
    var FullName = projects[i];

    // PUSH TO PROJECT LIST
    Projects.push({
      year: Year,
      month: Month,
      day: Day,
      name: Name,
      type: Type,
      fullname: FullName
    });

    // EXTRACT BTS
    var BTS = fs.readdirSync(Archive + projects[i] + "/BTS");

    // CREATE EMPTY LIST
    var BTSFiles = [];

    // FOR EACH OBJECT
    for (var i = 0; i < BTS.length; i++)  {

      // TODO LOAD DATA INTO BTS OBJECT(S)
      BTSFiles.push({
        name: BTS[i],
        size: fs.statSync(Archive + projects[i] + "/BTS" + '/' + BTS[i])
      });

    }
    // TODO SEARCH FOR MATCHING BTS OBJECTS UNDER THIS PROJECT
    // TODO VERIFY USING SIZE
    // TODO IF NO MATCH FOUND UPLOAD CURRENT TO DB
    // TODO CHECK DATABASE FOR NEW BTS NOT CURRENTLY IN ARCHIVE
    // TODO IF NEW DOWNLOAD TO ARCHIVE & TODO REDO EXTRACTION PROCESS

    // TODO EXTRACT LIVEWORK
    // TODO LOAD DATA INTO LIVEWORK OBJECT(S)
    // TODO SEARCH FOR MATCHING LIVEWORK OBJECTS UNDER THIS PROJECT
    // TODO VERIFY FILE MATCH USING SIZE
    // TODO IF NO MATCH FOUND UPLOAD CURRENT TO DB
    // TODO CHECK DATABASE FOR NEW LIVEWORK NOT CURRENTLY IN ARCHIVE
    // TODO IF NEW DOWNLOAD TO ARCHIVE & REDO EXTRACTION PROCESS

    // TODO EXTRACT DELIVERABLE PHOTOS
    // TODO LOAD DATA INTO DELIVERABLE PHOTOS OBJECT(S)
    // TODO SEARCH FOR MATCHING DELIVERABLE PHOTOS OBJECTS UNDER THIS PROJECT
    // TODO VERIFY FILE MATCH USING SIZE
    // TODO IF NO MATCH FOUND UPLOAD CURRENT TO DB
    // TODO CHECK DATABASE FOR NEW DELIVERABLE PHOTOS NOT CURRENTLY IN ARCHIVE
    // TODO IF NEW DOWNLOAD TO ARCHIVE & REDO EXTRACTION PROCESS

    // TODO EXTRACT DELIVERABLE VIDEOS
    // TODO EXTRACT DELIVERABLE FINAL CUTS
    // TODO EXTRACT DOCUMENTS
    // TODO EXTRACT MUSIC
  }
  res.render('index', { Project: Projects });
});



// HELPER FUNCTIONS

function scanForProjects(path) {
  // OPEN READ STREAM TO STORE FOLDERS
  var folders = fs.readdirSync(path);
    // CHECK IF FOLDERS EXIST : EXIT OUT IF THEY DON'T
    if (!folders) {
      res.render('index', { title: "No Folders Found in " + path });
      return [];
    }
    // CREATE LIST FOR FOLDER NAMES
    var list = [];
    // ITERATE THROUGH LIST OF PROJECTS
    for (var i = 0; i < folders.length; i++) {
      // CHECK IF FOLDER IS PROJECT
      if (parseInt(folders[i].substr(0, 6))) {
        list.push(folders[i])
      }
    }
    return list;
};


module.exports = router;
