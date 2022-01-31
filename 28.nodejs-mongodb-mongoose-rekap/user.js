// Three main concept of mongoose for mongodb
// 1. Schema    is how the data is structured.
// 2. Model     the form of the structured data.
// 3. query     how the data os query againts the database.
const mongoose = require('mongoose');

// === Schema ===
const address = new mongoose.Schema({
    street: String,
    city: String
})

let userSchema = new mongoose.Schema({
    // === Schema types ===
    name: String,
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 50,
        // === Schema validation method ===
        validate: {
            validator: v => v % 2 === 0,
            message: props => console.log(`${props.value} is not a even number`)
        }
    },
    address,
    // === Schema validation ===
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    }
})

// === Schema methods ===
userSchema.methods.sayHi = function () {
    console.log(`Hi my name is ${this.name}`);
}

// === Schema middleware ===
userSchema.pre('save', function(){
    this.updatedAt = Date.now()
})

module.exports = mongoose.model('User', userSchema);

// Mongoose basics:
// 1. Schema    is how the data is structured.
// 2. Model     the form of the structured data.
// 3. query     how the data os query againts the database.

// === Schema types ===
// name: String,

// === Schema validation === 
// email: {
//     type: String,
//     required: true,
//     lowercase: true
// },
// createdAt: {
//     type: Date,
//     immutable: true,
//     default: () => Date.now(),
// }

// === query basics ===
// User.find()

// === Schema methods/virtuals ===
// userSchema.methods.sayHi = function () {
//     console.log(`Hi my name is ${this.name}`);
// }

// === Schema middleware ===