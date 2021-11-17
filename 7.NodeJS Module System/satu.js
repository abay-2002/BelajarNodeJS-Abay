// === NodeJS Module System ===
// == NodeJS Module System terbagi menjadi tiga ==
// 1. Core Module
// 2. Local Module
// 3. Third-party Module (NPM)
// = function =
function panggilNama(nama){
    return `Hallo nama saya ${nama}`;
}

// = variable =
let nama = 'Akbar Angkasa';

// = object =
let Mahasiswa = {
    nama: 'Akbar Angkasa',
    usia: 18,
    energi: 10,
    makan(makan){
        return `Total energi ${this.energi += makan}`
    }
}

// = class =
class Mobil {
    constructor(merk){
        console.log(merk);
    }
}

// = export =
// Yang terjadi ketika kita membuat/meng-export module maka module tersebut akan berbentuk sebuah object, dimana object memiliki property dan value.
module.exports.panggilNama = panggilNama;
module.exports.nama = nama;
module.exports.Mahasiswa = Mahasiswa;
module.exports.Mobil = Mobil;
