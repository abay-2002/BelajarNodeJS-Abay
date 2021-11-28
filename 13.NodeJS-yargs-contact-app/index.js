// === NodeJs Contact App | NPM Module - Yargs ===
// add 
// --validasi, duplikasi
// list
// details
// remove

// == Algorithm ==
// membuat folder data dan file api.json 
let fs = require('fs');
let data = './data';
// membuat folder
if(!fs.existsSync(data)){
    fs.mkdirSync(data);
}

// membuat file
let dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]');
}

// add
// -- idenya adalah ketika argument dikirim ke terminal argument akan diparsing kemudian data akan diproses, kemudian data argument tersebut akan ditulis kedalam api.json, argument yang dikirim tersebut akan dicek terlebih dahulu.
// --- data yang dicek: validasi email, validasi nomor handphone, apakah nomor handphone sudah terdaftar dengan nomor handphone yang ada didatabase (duplikat).
// list
// details
// remove

