let createDir = () => {
    // bikin folder data berisi api.json
    const fs = require('fs');

    let data = './data';
    if(!fs.existsSync(data)){
        fs.mkdirSync(data);
    }
 
    // bikin file api.json
    let dataPath = './data/api.json';
    if(!fs.existsSync(dataPath)){
        fs.writeFileSync(dataPath, '[]');
    }
}
//  === Read | Membaca / Menampilkan data ===
// loadFile api.json
const fs = require('fs');
let dataPath = './data/api.json';

let loadFile = () => {
    let contacts = fs.readFileSync(dataPath);
    let hasil = JSON.parse(contacts);
    return hasil;
}

// cari nama pada array menggunakan array method find().
let findContact = (nama) => {
    let contacts = loadFile();
    let hasil = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
    return hasil; 
}

// === Create | Menambah data ===
// menimpa data
let saveContact = (contacts) => {
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
}

// add contact | contact form
let newContact = (newData) => {
    let contacts = loadFile();
    contacts.push(newData);
    // save contact | timpa data
    saveContact(contacts);
    return
}

// === Delete | Menghapus data ===
let removeContact = (email) => {
    // 1. samain data yang ada pada api dengan data input user.
    // 2. apabila data namanya sama maka hapus data tersebut. method splice
    // 3. timpa array lama dengan array baru dimana salah satu data contact yang telah terhapus tersebut.
    // ambil data api
    let contacts = loadFile();
    // sesuai parameter dengan nama
    const contact = contacts.find((element) => element.email === email);
    if(contact){
        // cari index nama parameter
        let index = contacts.indexOf(contact);
        // hapus
        contacts.splice(index, 1);
        // push ke api
        saveContact(contacts);
        return false
    }
}

// === Update | Mengubah data ===
let updateContact = () => {
    
}

module.exports = {createDir, loadFile, findContact, newContact,  removeContact};