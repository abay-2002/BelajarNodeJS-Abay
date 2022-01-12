// == Bikin api.json ==
// lakukan check apakah ada folder data
const fs = require('fs');

let createDir = () => {
    const fs = require('fs');
    let folder = './data';
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }
}

// lakukan check apakah ada file JSON
let dataPath = './data/api.json';
let createFile = () => {
    const fs = require('fs');
    if(!fs.existsSync(dataPath)){
        fs.writeFileSync(dataPath, '[]');
    }
}

// == Simpan add contact ke api.json ==
let loadFile = () => {
    let contacts = fs.readFileSync(dataPath);
    let hasil = JSON.parse(contacts);
    return hasil;
}

let saveFile = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data));
}

let newContact = (data) => {
    let contacts = loadFile();
    contacts.push(data);
    saveFile(contacts);
    return
}

// cari contact berdasarkan email
let findContact = (email) => {
    let contacts = loadFile();
    return contacts.find((contact) => contact.email === email);
}

// CREATE and READ data to and from MongoDB Atlas.
// Create / push data to mongodb dan push data to local api.
let pushData = (contact) => {
    // push mongodb
    const { MongoClient } = require('mongodb');
    const uri = 'mongodb+srv://akbarangkasa:abay2002@cluster0.b88w2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    const dbName = 'contacts';
    const collect = 'contact';
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
        db.collection(collect).insertOne(contact, (error, result) => {
                if(error){
                    return console.log('Document gagal ditambah!')
                }
                console.log(result);
            }
        );
        newContact(contact);
        return
    });
}

module.exports = {createDir, createFile, loadFile, findContact, pushData, loadFile};