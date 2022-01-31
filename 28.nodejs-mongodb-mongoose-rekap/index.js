const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rekapMongoose');

const User = require('./user');

User.create({
    name: 'Aqila Yumna',
    age: 20,
    address: {
        street: 'Jl. Pesona',
        city: 'Makassar'
    },
    email: 'aqilayumna@gmail.com'
}).then((result) => console.log(result)).catch((e) => console.log(e.message));
