// contact app
// CRUD 
// membuat/menambah  Create
// melihat           Read
// mengubah          Update
// menghapus         Delete
// contact pada halaman contact

// Express 
const express = require('express');
const app = express();
const port = 8080;

// View engine EJS
// === EJS ===
const expressLayouts = require('express-ejs-layouts');
// === EJS view engine ===
app.set('view engine', 'ejs');

// === EJS-layout ===
app.use(expressLayouts);

// === Express Middleware ===
// === Built-in middleware ===
app.use(express.static('public'));

const {load, findContact} = require('./utils/contacts');

// Middleware routing
// Home
app.get('/', function (req, res) {
    const halaman = [
        {
            to: '/',
            page: 'Home'
        },
        {
            to: '/about',
            page: 'About'
        },
        {
            to: '/contact',
            page: 'Contact'
        }
    ];
    res.render('home',{
        layout: 'layout/main-layout',
        title: 'Home',
        halaman: halaman
    });
});

// About
app.get('/about', function (req, res) {
    const halaman = [
        {
            to: '/',
            page: 'Home'
        },
        {
            to: '/about',
            page: 'About'
        },
        {
            to: '/contact',
            page: 'Contact'
        }
    ];
    const publicImgFile = {
        author: "akbar-angkasa.jpg"
    };
    const miscellaneous = {
        author: "Akbar Angkasa",
        position: "Mahasiswa",
        age: "19"
    };
    res.render('about',{
        layout: 'layout/main-layout',
        title: 'About',
        halaman: halaman,
        publicImgFile,
        miscellaneous
    });
})

// Contact
app.get('/contact', function (req, res) {
    const halaman = [
        {
            to: '/',
            page: 'Home'
        },
        {
            to: '/about',
            page: 'About'
        },
        {
            to: '/contact',
            page: 'Contact'
        }
    ];
    const contacts = load();
    res.render('contact',{
        layout: 'layout/main-layout',
        title: 'Contacts',
        halaman: halaman,
        contacts
    });
})

// Detail
app.get('/contact/:nama', (req,res) => {
    const halaman = [
        {
            to: '/',
            page: 'Home'
        },
        {
            to: '/about',
            page: 'About'
        },
        {
            to: '/contact',
            page: 'Contact'
        }
    ];
    // req.params.nama Akan mengambil parameter request url.
    const contact = findContact(req.params.nama);
    res.render('detail', {
        layout:'layout/main-layout',
        title: 'Detail',
        halaman,
        contact
    })
});


// Middleware Error Handling
// === Error handling ===
// 404 error pageNotFound
app.use('/', (req, res) => {
    const halaman = [
        {
            to: '/',
            page: 'Home'
        }
    ];
    const notFound = res.status(404);
    if(notFound){
        res.render('error-page/pageNotFound', {
            layout: 'layout/main-layout',
            title: '404 Page Not Found :(',
            halaman
        })
    };
})

app.listen(port, () => {
    console.log(`Server are listening to port:${port}`);
});

// Teknologi yang dibutuhkan:
// Express : Sebagai NodeJS web framework untuk membuat web server.
// EJS     : Express view engine.
// EJS-layout : Express view engine layout system.
// Bootstrap 5 : HTML, CSS, JS framework.