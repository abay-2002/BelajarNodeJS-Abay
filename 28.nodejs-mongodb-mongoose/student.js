// Three main concept of mongoose.
// 1. Schema, Schema is how the data is structured.
// 2. Model, Model is a form of the structured data from the schema. 
// 3. query, query is how tyou query the data againts your database.
const mongoose = require('mongoose');

// mongoose schema
const addressSchema = mongoose.Schema({
    // mongoose type data
    street: String,
    city: String
})

const studentSchema = mongoose.Schema({
    name: String,
    // mongoose validation
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 50,
        validate: {
            validator: v => v % 2 === 1,
            message: props => console.log(`${props.value} bukan usia ganjil`)
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    address: addressSchema
})

// Schema method
studentSchema.methods.sayHi = function(){
    console.log(`Hello my name is ${this.name}`);
}

module.exports = mongoose.model('student', studentSchema);

// Mongoose sudah belajar:
// 1. Schema, 2. Model, 3.Query, 4. Schema types, 5. Schema validation and custom validation, 6. Schema middleware, 7. Schema methods

// mongoose method cheatsheet.
// .Schema(), .model(), .create() 
