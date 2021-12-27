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


module.exports = {createDir, loadFile, findContact, newContact};