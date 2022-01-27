const mongoose = require('mongoose');
const dbName = 'belajarMongoose';
const serverPassword = 'abay2002';

const Student = require('./student');

mongoose.connect(`mongodb+srv://akbarangkasa:${serverPassword}@cluster0.b88w2.mongodb.net/${dbName}?retryWrites=true&w=majority`);

// mongoose query
run()
async function run(){
    try {
        const student = await Student.create({
            name: 'Akbar Angkasa', 
            age: 18, 
            address: {
                street: 'Gudang air', 
                city:'Jakarta'
            }
        });
        console.log(student);
    } catch (error) {  
        console.log(error.message)
    }
}