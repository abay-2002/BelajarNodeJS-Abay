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
        const student = await Student.deleteOne({name: 'Ananda Ajeng'})
        // const student = await Student.create({
        //     name: 'Akbar Angkasa', 
        //     age: 19, 
        //     email: 'akbarangkasa@gmail.com',
        //     address: {
        //         street: 'Jl. Gudang Air', 
        //         city:'Jakarta Timur'
        //     }
        // });
        console.log(student);
    } catch (error) {  
        console.log(error.message)
    }
}  