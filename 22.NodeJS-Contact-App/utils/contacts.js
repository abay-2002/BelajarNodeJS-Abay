const fs = require('fs');

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

module.exports = {load};