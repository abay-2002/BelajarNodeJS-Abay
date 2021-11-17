// === NodeJS Module System ===
// Yang terjadi ketika kita membuat/meng-export module maka module tersebut akan berbentuk sebuah object, dimana object memiliki property dan value.
let satu = require('./satu');
console.log(satu.panggilNama('Abay'));
console.log(satu.nama);
console.log(satu.Mahasiswa.makan(10));

// class
let Mobil = satu.Mobil;
let mobil1 = new Mobil('Porsche');
console.log(mobil1);