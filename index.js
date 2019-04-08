let http = require('http');
let fs = require('fs');
let path = require('path');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./assgn2proj/index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};

const port = process.env.PORT || 8000;
var nStatic = require('node-static');
var fileServer = new nStatic.Server('./assgn2proj');
http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(port);

// console.log(path.dirname(require.main.filename));
// http.createServer(handleRequest).listen(port);
console.log("Server running on port 8000");