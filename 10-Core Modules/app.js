/*
// File System
var fs = require('fs');

fs.writeFileSync('corn.txt', 'Corn is good, corn is life!');
console.log(fs.readFileSync('corn.txt').toString());
*/

/*
// Path
var path = require('path');

var websiteHome = 'Desktop/kowus//index.html';
var websiteAbout = 'Desktop/kowus/about.html';

console.log(path.normalize(websiteHome).toString());
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));
*/

// The following are not really core modules but need to know functions when working with servers and file systems


/*
      //  setInterval
      //  ===========
setInterval(function () {
    console.log("beef");
}, 2000);
*/

// dirname filename
console.log(__dirname);
console.log(__filename);