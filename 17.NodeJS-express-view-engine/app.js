// === NodeJS Express view engine ===
// Menggunakan Express EJS view engine
// Kenapa menggunakan EJS view engine?
// 1. Dengan menggunakan view engine pengelolaan file HTML jadi lebih mudah.
// 2. Memungkinkan membuat file template statis untuk aplikasi.
// 3. Memudahkan pembuatan file HTML.

// === express: ===
// const express = require('express')
// const app = express()
// const port = 8080

// app.get('/', (req, res) => {
//     res.sendFile('./views/index.html', {root: __dirname})
// })

// app.get('/contact', (req, res) => {
//     res.sendFile('./views/contact.html', {root: __dirname})
// })


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// ==== Menggunakan ExpressJS ====
// === Express view engine ejs: ===
const express = require('express');
const app = express();   
const port = 8080;
const expressLayouts = require('express-ejs-layouts');
// === EJS view engine ===
app.set('view engine', 'ejs');

// === EJS-layout ===
app.use(expressLayouts);

// === index.ejs ===
app.get('/', (req, res) => {
    const halaman = [
        {
            ke: '/',
            page: 'Home'
        },
        {
            ke: '/about',
            page: 'About'
        },
        {
            ke: '/contact',
            page: 'Contact'
        },
    ];
    res.render('index',{
        layout: 'layout/main-layout',
        title:'Home',
        halaman: halaman
    });
})

// === contact.ejs ===
app.get('/contact', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Akbar Angkasa',
            email: 'akbar121202@gmail.com'
        },
        {
            nama: 'Yumna',
            email: 'yumna@gmail.com'
        },
        {
            nama: 'Abay',
            email: 'abay@gmail.com'
        },
    ];
    const halaman = [
        {
            ke: '/',
            page: 'Home'
        },
        {
            ke: '/about',
            page: 'About'
        },
        {
            ke: '/contact',
            page: 'Contact'
        },
    ];
    res.render('contact',{
        layout: 'layout/main-layout',
        title:'Halaman Contact',
        daftar: 'Nama siswa',
        mahasiswa: mahasiswa,
        halaman: halaman
    });
})

// === about.ejs ===
app.get('/about', (req, res) => {
    const halaman = [
        {
            ke: '/',
            page: 'Home'
        },
        {
            ke: '/about',
            page: 'About'
        },
        {
            ke: '/contact',
            page: 'Contact'
        },
    ];
    res.render('about', {
        layout: 'layout/main-layout',
        title: 'About',
        halaman: halaman,
    })
})

app.get('/product/:id/category/:idCat', (req, res)=> {
    res.send(`Product ${req.params.id} <br> Category: ${req.params.idCat}`); 
});

// routes
app.use('/', (req, res) => {
    res.status(404);
    res.send('404 Not found :(');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Teknologi yang digunakan:
// ExpressJS
// ExpressJS view engine menggunakan EJS
// EJS view engine
// express-ejs-layout