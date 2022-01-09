const { MongoClient } = require('mongodb');
// Local connection
const uri = 'mongodb://127.0.0.1:27017';
// Nama database
const dbName = 'kelas';

const client = new MongoClient(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

client.connect((error, client) => {
    if(error){
        return console.log('Koneksi gagal!');
    }
    const db = client.db(dbName);
    // CRUD
    // Create
    db.collection('mahasiswa').insertOne(
        {
            nama: 'Istib',
            email: 'istib@gmail.com'
        },
        (error, result) => {
            if(error){
                return console.log('Document gagal ditambah!')
            }
            console.log(result);
        }
    );
});

// method2 dan object dapat menggunakan Async and Await ataupun menggunakan Callback:
// new MongoClient(uri)        
// .connect(error, client)   koneksi ke server mongodb
// .db('namaDatabase')        koneksi ke database
// .collection('namaCollection')    memilih collection didalam sebuah database
// .insertOne({},(err, result))     Create