// Three main concept of mongoose.
// 1. Schema, Schema is how the data is structured.
// 2. Model, Model is a form of the structured data from the schema. 
// 3. query, query is how tyou query the data againts your database.
const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    street: String,
    city: String
})

const studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    address: addressSchema
})

module.exports = mongoose.model('student', studentSchema);

// Mongoose sudah belajar:
// 1. Schema, 2. Model, 3.Query, 4. Mongoose type data,
// mongoose method cheatsheet.
// .Schema(), .model(), .create() 