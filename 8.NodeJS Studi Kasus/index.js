// == NodeJS Module Studi Kasus ==
// = Kasus =
// Tulis nilai property dan value yang kemudian taruh pada File JSON menggunakan NodeJS Core Module.
// Kita bisa memanfaatkan Module:
// fileSystem
// readline
// writeFile
// const fs = require('fs');

// Menginput Nama dan NoHp untuk props dan val object JSON.
// const fs = require('fs');
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Masukkan nama : ', (nama) => {
//     rl.question('Masukkan No.Hp : ', (hp) => {
//         const contact = {
//             nama:nama,
//             hp:hp
//         };
//         let file = fs.readFileSync('api/data.json', 'utf-8');
//         // text -> JS Object,      JSON.parse()
//         const contacts = JSON.parse(file);
//         contacts.push(contact);
//         // JS Object -> String,        JSON.stringify()
//         // JS Object -> JSON Object.
//         fs.writeFileSync('api/data.json', JSON.stringify(contacts));
//         console.log('Terima Kasih data anda sudah terisi.');
//         rl.close();
//     })
// });

// Membuat contact app
// memanfaatkan
// JSON 
// module:
// fs exist
// readLine
// readFile
// writeFile
// promise

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });














// === Menggunakan Promise ===
// daripada menggunakan callback, yang dapat menyebabkan callback hell kita dapat memanfaatkan Promise
// rl.question('Masukkan nama : ', (nama) => {
//     console.log(nama);
//     rl.close();
// })

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (answer)=>{
            resolve(answer);
        });
    });
}

let main = async () => {
    let nama = await tulisPertanyaan('Masukkan nama :');
    let hp = await tulisPertanyaan('Masukkan no hp : ');
    let contact = {nama, hp};
    // menyimpan hasil input user kedalam file JSON
    let file = fs.readFileSync('api/data.json', 'utf-8');
    let contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync('api/data.json', JSON.stringify(contacts));
    console.log('Terima Kasih data anda sudah terkirim');
    rl.close();
}

main();






















