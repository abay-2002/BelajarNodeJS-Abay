// === NodeJS Web Server latihan ===
// Yang sudah dipelajari mengenai web server pada NodeJS:
// yang terjadi ketika kita mengakses halaman web adalah komputer akan melakukan HTTP request kepada sebuah alamat ip kemudian ip address pada suatu komputer yang kita lakukan request tersebut akan mengembalikan HTTP response.
// HTTP Req dan HTTP res.
// ip address dan DNS server.
// localhost dan port
// === NodeJS special function for making web server ===
// localhost dan port
// require('http');
// .createServer(req, res);
// .listen();

const http = require('http');
let host = 'localhost';
let port = 8080;
let fs = require('fs');

http.createServer((req, res,) () => {
    const url = req.url;
    res.writeHead(200, {
        'Content-Type':'text/html',
    });
    if(url === '/about'){
        fs.readFile('./about.html', (err, data)=>{
            if(err){
                res.write('File not found :(');
            }else {
                res.write(data);
            }
        })
        res.end();
    }else {
        fs.readFile('./index.html', (err, data)=>{
            if(err){
                res.write('File not found :(');
            }else {
                res.write(data);
            }
        })
        res.end();
    }
})
.listen(port, ()=> {
    console.log(`Server listening on port:${port}`);
})