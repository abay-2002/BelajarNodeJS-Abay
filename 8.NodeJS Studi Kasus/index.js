// === Membuat Contatc App ===
// Memanfaatkan: 
// NodeJS Core Module
// NodeJS Module System

// == idenya adalah: ==
// Ambil input user dari terminal -> simpan input user tersebut ke dalam file JSON.
// Apabila pada system belum tersedia file JSON maka buatkan.

// == Algorithm ==
// - Lakukan pengecekan pada system apakah ada folder & file JSON, apabila belum ada maka buat folder dan file JSON. ok
// - Baca input dari terminal memanfaatkan module readline. ok
// - Simpan input dari terminal kedalam Javascript Object. ok
// - Baca file JSON. ok 
// - Ambil hasil dari File JSON yang sudah dibaca tadi. ok
// - Ubah bentuk file JSON ke Javascript Object ok 
// - Push Object dari input user kedalam Object JSON yang sudah difetch dan diParse sebelumnya. ok
// - Tulis variable hasil push ke Javascript Object ke bentuk format Object JSON. ok

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

let main = async () => {
    let nama = await tulisPertanyaan('Nama : ');
    let email = await tulisPertanyaan('Email : ');
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

main();