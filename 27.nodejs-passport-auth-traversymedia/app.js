const express = require('express');
const app = express();

// EJS
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));
// users route
app.use('/users', require('./routes/users'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening to port: ${port}`);
})