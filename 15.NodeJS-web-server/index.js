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

// In a separate terminal window, we’ll communicate with the server using cURL, a CLI tool to transfer data to and from a network. Enter the command to make an HTTP GET request to our running server: