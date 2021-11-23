// algorithm:
// 1. Check of theres a folder containing json file, if theres none make one.
const fs = require('fs');

const data = './data';
if(!fs.existsSync(data)){
    fs.mkdirSync(data);
};

const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]');
};


// 2. Make cli interface for inputting data.
const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let pertanyaan = async (tanya) => { 
    return new Promise((resolve, reject) => {
        rl.question(tanya, (answer) => {
            if(answer){
                resolve(answer);
            }else {
                reject('data belum terinput');
                rl.close();
            }
        });
    }); 
}

let simpanPertanyaan = (nama, email) => {
    // simpan pada sebuah object:
    let contact = {nama, email};
    // simpan contact pada file contacts.json
    let file = fs.readFileSync(dataPath, 'utf-8');
    // parse JSON -> JS Object
    let contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
    console.log(contact);
    rl.close();
    return
}

module.exports = {simpanPertanyaan, pertanyaan, rl}