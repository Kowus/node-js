var http = require('http');

function onRequest(request, response) {
    console.log("A user made a request" + request.url);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Here is your bowl of plaintain chips");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running............");
