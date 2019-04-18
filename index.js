const port = process.env.PORT || 8000;
let http = require('http');
let fs = require('fs');
let path = require('path');
let nStatic = require('node-static');
let fileServer = new nStatic.Server('./assgn2proj');
http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(port);

console.log("Server running on port 8000");