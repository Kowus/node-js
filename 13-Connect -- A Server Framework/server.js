/*
 var connect = require('connect');
 var http = require('http');

 var app = connect();

 function doFirst(request, response, next) {
 console.log("Doing First...");
 next();
 }
 function doSecond(request, response, next) {
 console.log("Doing Second...");
 next();
 }

 app.use(doFirst);
 app.use(doSecond);

 http.createServer(app).listen(8888);
 console.log('Server is now running....................');
 */


var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response) {
    console.log('User requested profile');
}
function forum(request, response) {
    console.log('User requested forum');
}

app.use('/profile', profile);
app.use('/forum', forum);


http.createServer(app).listen(8888);
console.log('Server is now running....................');
