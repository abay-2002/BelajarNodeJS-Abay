// === Membuat Folder dan File untuk contacts.json ===
const fs = require('fs');

// == Melakukan cek apakah ada Folder data, buat apabila tidak ada ==
let data = './data';
if(!fs.existsSync(data)){
    fs.mkdirSync(data);
}

// == Melakukan cek apakah ada File contacts.json, buat apabila tidak ada ==
let dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]');
}

// == Ambil data dari argv yargs ==
let myArgv = process.argv.slice(2);
console.log(myArgv[0]);



exports.modules = {}