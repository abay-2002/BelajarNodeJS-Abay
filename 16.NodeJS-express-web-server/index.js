// === NodeJS express web server ===
// web server tanpa menggunakan express 

// === web server menggunakan NPM Module express NodeJS === 
const express = require('express')
const app = express()
const port = 8080

// routes ke root.
app.get('/', (req, res) => {
    // res.send('Hello From ExpressJS');
    res.sendFile('./pages/index.html', {root: __dirname});
})

// routes ke about.
app.get('/about', (req, res) => {
    // res.send('Hello From ExpressJS');
    res.sendFile('./pages/about.html', {root: __dirname});
})

app.get('/product/:id/category/:idCat', (req, res)=> {
    res.send(`Product ${req.params.id} <br> Category: ${req.params.idCat}`);
    
})

// routes
app.use('/', (req, res) => {
    res.status(404);
    res.send('404 Not found :(');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})