const {MongoClient} = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';

const dbName = 'kelas';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect((error, client) => {
    if(error){
        console.log('koneksi gagal!');
    }
    const db = client.db(dbName);
    // bikin collection.
    db.createCollection('murid');
    const collectionMurid = db.collection('murid');
    // insert 1 document ke dalam collection.
    collectionMurid.insertOne({nama: 'Akbar Angkasa', email: 'akbarangkasa@gmail.com'}, (error, result) => {
        if(error){
            return console.log('Data gagal ditambahkan');
        }
        console.log(result);
    });    
});


// client / kita terhubung ke server.
// client/server -> database -> collection 