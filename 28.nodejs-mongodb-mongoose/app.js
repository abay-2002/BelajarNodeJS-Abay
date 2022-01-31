const mongoose = require('mongoose');

// const dbName = 'belajarMongoose';
// const serverPassword = 'abay2002';
// mongoose.connect(`mongodb+srv://akbarangkasa:${serverPassword}@cluster0.b88w2.mongodb.net/${dbName}?retryWrites=true&w=majority`);
mongoose.connect('mongodb://localhost/belajarMongoose');

const Student = require('./student');
// mongoose query
run()
async function run(){
    try {
        const student = await Student.create({
            name: 'Ananda Ajeng', 
            age: 19, 
            email: 'anandaajeng@gmail.com',
            address: {
                street: 'Pedongkelan', 
                city:'Jakarta Barat'
            }
        });
        console.log(student);
    } catch (error) {  
        console.log(error.message)
    }
}  