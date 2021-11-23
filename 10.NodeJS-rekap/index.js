// === NodeJS ===
// contacts app.
// make a data api json folder when theres none make one 
// 3. save the data in a object.

let contact = require('./contact');
let myArgvs = process.argv.slice(2);

let parseArgv = async () => {
    switch(myArgvs[0]){
        case 'nama':
            let nama = await contact.pertanyaan('nama : ');
            contact.simpanPertanyaan(nama);
            break;
        case 'email':
            let email = await contact.pertanyaan('email : ');
            contact.simpanPertanyaan(email);
            break;
        default:
            console.log('Please input something');
            break;
    }
    contact.rl.close();
    return
}

parseArgv();


// mengimplementasikan nodejs core module. Ok
// mengimplementasikan nodejs local module. Ok
// mengimplementasikan nodejs parse argument via command line, contoh: node . --nama Masukkan nama : Ok.