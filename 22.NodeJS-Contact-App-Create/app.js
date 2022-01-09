// Express NPM
const express = require('express');
const app = express();
const port = 3000;

// Express view engine EJS
var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

// built-in middleware
app.use(express.static('public',));
app.use(express.urlencoded({extended: true}));

// createDir
const createDir = require('./utils/contacts');
createDir.createDir();

// Express-validator
const { body, validationResult, check } = require('express-validator');

// contact local module
const {cekDuplikat, findContact} = require('./utils/contacts');

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
        contacts,
    });
})

// form tambah data
app.get('/contact/add', (req, res) => {
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
    res.render('add-contact',{
        layout: 'layouts/main-layout',
        title: 'Form contact',
        halaman
    })
});

// proses data contact form
// app.post('/contact', (req, res) => {
//     let contacts = require('./utils/contacts');
//     contacts.newContact(req.body);
//     res.redirect('/contact');
// });

// validasi data


app.post(
    '/contact',
    [
    body('email').custom((value) => {
        const duplikat = cekDuplikat(value);
        if(duplikat) {
          throw new Error('Email sudah digunakan');
        }
        return true;
    }),
    check('email', 'Alamat email tidak valid').isEmail(),
    check('nohp', 'No Hp tidak valid').isMobilePhone('id-ID')
    ],
    (req, res) => { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // res.status(400).json({ errors: errors.array() });
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
        res.render('add-contact',{
            layout: 'layouts/main-layout',
            title: 'Form contact',
            halaman,
            errors:  errors.array()
        })
    }else {
        let contacts = require('./utils/contacts');
        contacts.newContact(req.body);
        res.redirect('/contact');
    }
  }
);

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

// error handling
app.use('/', (req, res) => {
    const halaman = [
        {
            to: '/',
            page: 'Home'
        }
    ];
    const notFound = res.status(404);
    if(notFound){
        res.render('error-handling/pagenotfound', {
            layout: 'layouts/main-layout',
            title: '404 Page Not Found',
            halaman
        });
    }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})