// === NodeJS membuat web server ===
const host = 'localhost';
const port = 8000;
const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};
// Note: Even though requestListener() does not use the req object, it must still be the first argument of the function.

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
// run the server: node .
// Notice that the prompt disappears. This is because a Node.js server is a long running process. It only exits if it encounters an error that causes it to crash and quit, or if we stop the Node.js process running the server.

// === special functions ===
// requestListener(req, res () => {res}) OPTIONAL atau apapun namanya ini adalah function callback untuk higher order function methode createServer()

// createServer(req, res)

// server.listen(options[, callback])
// Start a server listening for connections. A net.Server can be a TCP or an IPC server depending on what it listens to.