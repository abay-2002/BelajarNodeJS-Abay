// === NodeJS membuat WEB Server ===
const http = require('http');
const port = 8080;
const fs = require('fs');

// === contoh 1 ===
// http
// .createServer((req, res) => {
//     res.write('Hello world!');
//     res.end();
// })
// .listen(port, () => {
//     console.log(`Server is listening to port:${port}`);
// });

// === contoh 2 ===
http
.createServer((req, res) => {
    const url = req.url;
    res.writeHead(200, {
        'Content-Type': 'text/html',        
    });
    if(url === '/contact'){
        fs.readFile('./contact.html', (err, data) => {
            if(err){
                res.write('<h1>File Not Found :(</h1>');
            }else {
                res.write(data);
            }
            res.end();
        });
    }else if(url === '/about'){
        fs.readFile('./about.html', (err, data) => {
            if(err){
                res.write('<h1>File Not Found :(</h1>');
            }else {
                res.write(data);
            }
            res.end();
        });
    }else {
        fs.readFile('./index.html', (err, data) => {
            if(err){
                res.write('<h1>File Not Found :(</h1>');
            }else {
                res.write(data);
            }
            res.end();
        });
    }
})
.listen(port, () => {
    console.log(`Server is listening to port:${port}`);
});

// === special functions ===
// requestListener(req, res, () => {res.write() res.end()}) == OPTIONAL ==.
// requestListener(req, res () => {res}) OPTIONAL atau apapun namanya ini adalah function callback untuk higher order function methode createServer()

// createServer((req, res) => {})
// Create a local server to receive data from
// parameter req dan res pada callback createServer berbentuk object.

// res.writeHead()
// Sends a response header to the request. The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. Optionally one can give a human-readable statusMessage as the second argument.

// server.listen(options[, callback])
// Start a server listening for connections. A net.Server can be a TCP or an IPC server depending on what it listens to.