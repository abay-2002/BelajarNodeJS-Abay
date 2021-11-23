// === NodeJS, How to parse arguments via command line ===
// via: NodeJS Documentations
// when we pass an argument via terminal in our NodeJS App the argument will be stored in argv array inside of process object.
// == Passing in arguments via the command line is an extremely basic programming task, and a necessity for anyone trying to write a simple Command-Line Interface (CLI). In Node.js, as in C and many related environments, all command-line arguments received by the shell are given to the process in an array called argv (short for 'argument values'). ==
// NodeJS Documentations : https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/.
// Now let's actually do something with the args:
let myArgv = process.argv.slice(2);

// input nama dan email melalui user interface.
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan , (answer) => {
            if(!answer){
                reject('data tidak terinput');
                rl.close();
            }else {
                resolve(answer);
            }
        })
    })
}

let main = async () => {
    switch (myArgv[0]) {
        case 'nama':
            let nama = await tulisPertanyaan('Masukkan Nama: ');
            console.log(nama);
            break;
        case 'email':
            let email = await tulisPertanyaan('Masukkan Email: ');
            console.log(email);
            break;
        default:
            console.log(`There's nothing i can do with that`);
            break;
    }
    rl.close();
    return
}
main();

// Menggunakan NPM Module Yargs.
// read 
// write 
// readline 