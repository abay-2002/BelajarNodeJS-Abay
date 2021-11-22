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
let contacts = require('./contacts');

let main = async () => {
    let nama = await contacts.tulisPertanyaan('Nama : ');
    let email = await contacts.tulisPertanyaan('Email : ');
    contacts.simpanContact(nama, email);
}

main();