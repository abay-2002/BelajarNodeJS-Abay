// ==========================
// === MongoDB Atlas CRUD ===
// ==========================
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://akbarangkasa:abay2002@cluster0.b88w2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const dbName = 'kampus';
const collectionName = 'mahasiswa';
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect((error, client) => {
    if(error){
        console.log('koneksi gagal!');
    }
    const db = client.db(dbName);
    // ==============
    // === Create ===
    // ==============
    // db.collection(collectionName).insertOne({nama: 'Yumna', email:'yumna@gmail.com'}, (error, result) => {
    //     if(error){
    //         return console.log('Document gagal ditambah');
    //     }
    //     console.log(result);
    // })

    // ============
    // === Read ===
    // ============
    // console.log(db.collection(collectionName).find({}).toArray((err, result) => {
    //     if(err) throw console.log('Document tidak ditemukan!');
    //     console.log(result);
    // }));

    // ==============
    // === Update ===
    // ==============
    // .updateOne(filter, updateDoc, options);
    // const updateDocument = db.collection(collectionName).updateOne({"nama" : "Yumna" },{ $set: { 'email' : 'yumna@gmail.com' }})
    // updateDocument.then((result) => {console.log(result)}).catch((result) => {console.log(result)});

    // .updateMany
    // const updateDocument = db.collection(collectionName).updateMany({"nama" : "Yumna" },{ $set: { 'email' : 'yumna@gmail.com' }})
    // updateDocument.then((result) => {console.log(result)}).catch((result) => {console.log(result)});

    // ==============
    // === Delete ===
    // ==============
    // == .remove() DEPRECATED ==
    // .remove() remove document from collection
    // method .remove() tidak sama dengan method .drop()
    // .remove(query, justOne:optional)
    // db.collection(collectionName).remove({$eq: {'nama':'Yumna'}}, true).then((result) => {console.log(result)}).catch((result) => {console.log(result)});
    // == .deleteOne(filter, callback)
    db.collection(collectionName).deleteOne({"nama" : "Yumna"}, (err, result) => {
        if(err) throw console.log('Document gagal dihapus!');
        console.log(result);
    })
});

// insertOne(), insertMany(), find(), findOne(), updateOne(), updateMany(), deleteOne(), deleteMany()
// client / kita terhubung ke server.
// client/server -> database -> collection 