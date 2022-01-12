// local module
const {createDir, createFile, findContact, pushData, loadFile} = require('./utils/contacts');
createDir();
createFile();

// Express.
const express = require('express')
const app = express()
const port = 3000;

// Express view engine.
// EJS
// Express EJS Layout
var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

// built-in middleware
app.use(express.static('public',));
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
    const Halaman = [
        {
            page: 'Home',
            to: '/'
        },
        {
            page: 'Contact',
            to: '/contact'
        }
    ];
    res.render('home', {
        title: 'Home',
        layout: 'layouts/main-layout',
        Halaman
    });
});

// Halaman Add-contact
app.get('/add-contact', (req, res) => {
    const Halaman = [
        {
            page: 'Home',
            to: '/'
        },
        {
            page: 'Contact',
            to: '/contact'
        }
    ];
    res.render('add-contact', {
        title: 'Add Contact',
        layout: 'layouts/main-layout',
        Halaman
    })
})

// Process Form Halaman Add Contact
app.post('/contact', (req, res) => {
    pushData(req.body);
    res.redirect('/contact');
})

// Halaman Contact
app.get('/contact', (req, res) => {
    const Halaman = [
        {
            page: 'Home',
            to: '/'
        },
        {
            page: 'Contact',
            to: '/contact'
        }
    ];
    const contacts = loadFile();
    res.render('contact', {
        title: 'Contact',
        layout: 'layouts/main-layout',
        Halaman,
        contacts
    })
})

// details
app.get('/contact/details/:email', (req, res) => {
    const Halaman = [
        {
            page: 'Home',
            to: '/'
        },
    ];
    const contact = findContact(req.params.email);
    res.render('details', {
        title: 'Details',
        layout: 'layouts/main-layout',
        Halaman,
        contact
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});