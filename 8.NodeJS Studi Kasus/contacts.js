// == Code ==
const fs = require('fs');
const { stdin, stdout } = require('process');
const readline = require('readline');

// = membuat folder dan file JSON. =
// folder
let data = './data';
if(!fs.existsSync(data)){
    fs.mkdirSync(data);
}

// file
let dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]');
}

// = baca input dari terminal =
let rl = readline.createInterface({
    input: stdin,
    output: stdout
});

let tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (answer) => {
            resolve(answer);
        });
    });
};

let simpanContact = (nama, email) => {
    // simpan input
    let contact = {nama, email};
    // baca file JSON.
    let file = fs.readFileSync(dataPath, 'utf-8');
    // JSON -> JS Object.
    let contacts = JSON.parse(file);
    // JS Object push -> contact.
    contacts.push(contact);
    // JS Object -> JSON, write file JSON.
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
    console.log('Data berhasil disimpan');
    rl.close();
}

module.exports = {tulisPertanyaan, simpanContact};