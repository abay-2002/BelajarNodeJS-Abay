const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');

// menyimpan input user kedalam file json.
let simpanData = async (nama, email, nohp) => {
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
    // simpan file hasil input user dari argv ke dalam file json.
    let contact = {nama , email, nohp};
    let file = fs.readFileSync(dataPath, 'utf-8');
    let contacts = JSON.parse(file);

    // cek apakah ada nomor hp duplikat.
    const duplikat = contacts.find((contactinjson) => contactinjson.nohp === nohp);
    if(duplikat){
        console.log(chalk.red.underline.bold('Nomor Hp sudah terdaftar! Silahkan pilih nomor lain'));
        return false;
    }

    // cek validasi nomor hp
    // ambil nohp inputan user.
    if(!validator.isMobilePhone(nohp,'id-ID')){
        console.log(chalk.red.underline.bold('Nomor Hp tidak Valid!'));
        return false;
    }

    // cek apakah ada duplikasi email.
    const duplikatEmail = contacts.find((contactinjson) => contactinjson.email === email);
    if(duplikatEmail){
        console.log(chalk.red.underline.bold('Email sudah terdaftar, Silahkan gunakan email lain'));
        return false;
    }

    // cek validasi email.
    // ambil email inputan user.
    if(!validator.isEmail(email)){
        console.log(chalk.red.underline.bold('Email tidak Valid!'));
        return false;
    }

    contacts.push(contact);
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
    console.log(chalk.green.underline.bold('Terima kasih data berhasil tersimpan!'));
    return;
}

module.exports = {simpanData};

// memvalidasi apakah email valid, console.log() apabila email tidak valid.
// mengecek apakah ada nohp yang sama, jangan simpan data kedalam api apabila ada data nohp yang sama.