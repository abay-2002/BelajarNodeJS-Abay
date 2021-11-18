// === NodeJS Core Module. ===
// Menggunakan Core Module File System NodeJS.

// daftar isi:
// writeFile()
// writeFileSync()
// readFile()
// readFileSync()
// readline()


// const { writeFile, writeFileSync, readFile, readFileSync } = require('fs');
// Ingat kembali pada NodeJS kita tidak lagi menulis Javascript pada konteks browser, kita menulis Javascript pada konteks diluar Browser. ini memungkinkan kita untuk mengakses file pada system kita.

// ooh i see in writing code we not only anticipated things goes right but also anticipated when things goes wrong like erro for example, and thats why we invented what we call callback, promise, async and await.

// == Core Module File System ==
// = writeFileSync (Synchronous) =
const fs = require('fs');
fs.writeFileSync('data/test.txt', 'Hello World Synchronous');

// = writeFile (Asynchronous) =
fs.writeFile('test2.txt', 'Hello World (Asynchronous)', (e) => {
    if(e){
        console.log(e);
    }else {
        return 0;
    }
});



// = readFileSync (Synchronous) =
let data = fs.readFileSync('data/test.txt', 'utf-8');
console.log(data);



// = readFile (Asynchronous) =
fs.readFile('readFile.txt', 'utf-8', (e, data) => {
    if(e){
        console.log(e);
    }else{
        console.log(data);
    }
});

// Sama aja, tapi pakai throw.
fs.readFile('readFile.txt', 'utf-8', (e, data) => {
    if(e) throw e
    console.log(data);
});







// = NodeJS/Core Module, readline =
const readline = require('readline');
const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
})

rl.question('Masukkan nama anda : ', (answer) => {
    rl.question('Masukkan no hp: ', (a) => {
        console.log(`Nama: ${answer}`);
        console.log(`No hp adalah : ${a}`);
        rl.close();
    })
});