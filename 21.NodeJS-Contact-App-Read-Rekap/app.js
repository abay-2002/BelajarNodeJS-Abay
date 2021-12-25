// Express NPM
const express = require('express');
const app = express();
const port = 8080;

// Express view engine EJS
var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

// built-in middleware
app.use(express.static('public',));

// createDir
const createDir = require('./utils/contacts');
createDir.createDir();

// == Middleware Route ==
// Home
app.get('/', (req, res) => {
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
        layout: 'layouts/main-layout',
        title: 'Home',
        halaman
    });
})

// About
app.get('/about', (req, res) => {
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
    res.render('about',{
        layout: 'layouts/main-layout',
        title: 'About',
        halaman
    });
})

// contact
app.get('/contact', (req, res) => {
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
    const contactsFetch = require('./utils/contacts');
    const contacts = contactsFetch.loadFile();
    res.render('contact',{
        layout: 'layouts/main-layout',
        title: 'contact',
        halaman,
        contacts
    });
})

// details
app.get('/contact/:nama', (req, res) => {
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
    const fetch = require('./utils/contacts');
    const contact = fetch.findContact(req.params.nama);
    res.render('detail', {
        layout: 'layouts/main-layout',
        title: 'Details',
        halaman,
        contact
    });
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})