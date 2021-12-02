const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');


// cek apakah ada folder untuk menyimpan file api, buat apabila belom ada.
let data = './data';
if(!fs.existsSync(data)){
    fs.mkdirSync(data);
}
 
// cek apakah ada file untuk menyimpan api, buat apabila belom ada.
let dataPath = './data/api.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]');
}

// === function load ===
// untuk mengambil/fetch data dari API.
let load = () => {
    let file = fs.readFileSync('./data/api.json', 'utf-8');
    let contacts = JSON.parse(file);
    return contacts; 
} 

// == add ==
// menyimpan input user kedalam file json.
let simpanData = async (nama, email, nohp) => {
    // simpan file hasil input user dari argv ke dalam file json.
    let contact = {nama , email, nohp};
    let contacts = load();

    // === NoHp ===
    // cek apakah ada nomor hp duplikat.
    const duplikat = contacts.find((contactinjson) => contactinjson.nohp === nohp);
    if(duplikat){
        console.log(chalk.red.inverse.bold('Nomor Hp sudah terdaftar! Silahkan pilih nomor lain'));
        return false;
    }

    // cek validasi nomor hp
    // ambil nohp inputan user.
    if(!validator.isMobilePhone(nohp,'id-ID')){
        console.log(chalk.red.inverse.bold('Nomor Hp tidak Valid!'));
        return false;
    }

    // === Email ===
    // cek apakah ada duplikasi email.
    const duplikatEmail = contacts.find((contactinjson) => contactinjson.email === email);
    if(duplikatEmail){
        console.log(chalk.red.inverse.bold('Email sudah terdaftar, Silahkan gunakan email lain'));
        return false;
    }

    // cek validasi email.
    // ambil email inputan user.
    if(!validator.isEmail(email)){
        console.log(chalk.red.inverse.bold('Email tidak Valid!'));
        return false;
    }

    // === push contact to contacts ===
    contacts.push(contact);
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
    console.log(chalk.green.inverse.bold('Terima kasih data berhasil tersimpan!'));
    return;
}

// == list ==
let list = () => {
    // ambil isi dari api 
    let dataPath = './data/api.json';
    let jsonData = fs.readFileSync(dataPath, 'utf-8');
    let contacts = JSON.parse(jsonData);
    console.log(chalk.cyan.inverse.bold('Daftar kontak : '));
    contacts.forEach((element) => {
        let nama = element.nama; 
        let email = element.email; 
        let nohp = element.nohp; 
        console.log(
            `Nama: ${nama}`,
            `Email: ${email}`,
            `No.Hp: ${nohp}`
        );
    })
    return;
}

// === detail ===
// ketika user memberi command details dan argv nama user, maka lakukan pencarian pada data kemudian cocokan nama dari argv dengan nama yang ada pada api.json.
let detail = (nama) => {
    let contacts = load();
    let hasil = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase()  
    )
    if(!hasil){
        console.log(chalk.red.inverse.bold('Nama tidak ditemukan'));
        return false;
    }
    console.log(chalk.cyan.inverse.bold(hasil.nama));
    console.log(hasil.email);
    console.log(hasil.nohp);
}


// beberapa fitur:
// detail, list, add, remove(belum)


// === delete ===
// ketika user memberi command delete diikuti dengan argv nama, maka fetch data dari api.json kemudian cocokan data input user dengan data pada contact api.json apabila ada nama yang sesuai/cocok maka lakukan hapus nama tersebut.
// algorithm hapus:
// ketika nama argv sudah cocok dengan nama yang berada pada api.json maka buat array baru berdasarkan api.json tapi tanpa nama yang cocok tersebut.
// 1.fetch data dari api.
// 2.cocokan argv yang diberikan user dengan data yang ada pada index dari salah satu element api.
// 3.apabila argv sesuai dengan element yang berada didalam api maka lakukan penghapusan object berdasarkan nama tersebut.
let remove = (nama) => {
    let c = fs.readFileSync('./data/api.json','ascii');
    let contacts = JSON.parse(c);
    const contact = contacts.find((element) => nama == element.nama);
    if(contact){
        // cari index
        const index = contacts.indexOf(contact);
        contacts.splice(index, 1);
        // simpan hasil hapus ke dalam api
        fs.writeFileSync('./data/api.json', JSON.stringify(contacts));
        console.log(chalk.green.inverse.bold(`Contact nama: ${nama} berhasil dihapus.`));
        return false;
    }

    if(!contact){
        console.log(chalk.yellow.inverse.bold(`Contact nama: ${nama} tidak ditemukan!`));
        return false;
    }
}

module.exports = {simpanData, list, detail, remove};