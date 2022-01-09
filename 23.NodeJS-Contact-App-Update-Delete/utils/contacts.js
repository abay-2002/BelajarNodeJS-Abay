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
    return contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
}

let findContactEmail = (email) => {
    let contacts = loadFile();
    return contacts.find((contact) => contact.email.toLowerCase() === email.toLowerCase());
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

// validasi form
// cekDuplikat
let cekDuplikat = (nama) => {
    let contacts = loadFile();
    let hasil = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
    return hasil;
}

// delete contact
let deleteContact = (email) => {
    let contacts = loadFile();
    const contact = contacts.find((contact) => contact.email === email);
    if(contact){
        let index = contacts.indexOf(contact);
        contacts.splice(index, 1);
        console.log(contacts);
        saveContact(contacts);
        return false;
    }
}

// update data contact
let updateContact = () => {
    
}

module.exports = {createDir, loadFile, findContact, newContact, cekDuplikat, deleteContact, findContactEmail};