// === NodeJS Express view engine dengan EJS ===
// ExpressJS dan ExpressJS view engine EJS
// Kenapa menggunakan ExpressJS?
// -memudahkan development NodeJS WEB Server.
// Kenapa menggunakan EJS? 
// -Memungkinkan untuk membuat template statis HTML.
// Fitur-fitur EJS:
// -Control Flow
// -Layout

// == ExpressJS ==
const express = require('express')
const app = express()
const port = 8000

// == ExpressJS view engine EJS == 
app.set('view engine', 'ejs');

// = Home =
app.get('/', (req, res) => {
    const halaman = [
        {
            halaman: 'Home',
            link: '/'
        },
        {
            halaman: 'About',
            link: '/about'
        },
        {
            halaman: 'Contact',
            link: '/contact'
        },
    ];
    res.render('index',{
        title: 'Home',
        halaman: halaman
    });
})

// = about =
app.get('/about', (req, res) => {
    const halaman = [
        {
            halaman: 'Home',
            link: '/'
        },
        {
            halaman: 'About',
            link: '/about'
        },
        {
            halaman: 'Contact',
            link: '/contact'
        },
    ];
    res.render('about',{
        title: 'About',
        halaman: halaman
    });
})

// = contact =
app.get('/contact', (req, res) => {
    const halaman = [
        {
            halaman: 'Home',
            link: '/'
        },
        {
            halaman: 'About',
            link: '/about'
        },
        {
            halaman: 'Contact',
            link: '/contact'
        },
    ];
    const mahasiswa = [
        {
            nama: 'Akbar Angkasa',
            email: 'akbar121202@gmail.com'
        },
        {
            nama: 'Aqilah Yumna Syafiqah',
            email: 'yumna@gmail.com'
        },
        {
            nama: 'abay',
            email: 'abay@gmail.com'
        },
    ]
    res.render('contact', {
        title:'Contact',
        halaman: halaman,
        mahasiswa: mahasiswa
    })
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