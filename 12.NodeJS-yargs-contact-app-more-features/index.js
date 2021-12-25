// === NodeJs Contacts App - NPM Module Yargs ===
// const myArgv = process.argv;
// console.log(myArgv);

// membuat contact app menerapkan: 
// nodejs core module
// nodejs local module
// nodejs third-party module 
// yargs, chalk, validator 

// === NPM Module Yargs ===
// parsing an argument via command line.
// == Apa itu Yargs? ==
// Yargs helps you build interactive command line tools by parsing arguments and generating an elegant user interface.
// contoh: 
// const myArgv = process.argv.slice(2);
// console.log(myArgv[0]);

// Yargs gives you:
// *commands and (grouped) options (like module run -n --force),
// *a dynamically generated help menu based on your arguments,
// *bash-completion shortcuts for commands and options,
// and much more.
// With these features, and many more, yargs allows you to focus on building your program without worrying about your args.

// -idenya adalah menampung input user kemudian menyimpan data user ke dalam file JSON.
// -input user divalidasi terlebih dahulu sebelum disimpan ke dalam file JSON.

// == code ==
// .command()
// Define the commands exposed by your application.
// cmd should be a string representing the command or an array of strings representing the command and its aliases. Read more about command aliases in the subsection below.

// command, description, builder, handler.
const yargs = require('yargs');
const saveFile = require('./saveFile');

// === add ===
yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: { // argv, options the commands accept.
        nama: { // argv flag.
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'email',
            demandOption: true,
            type: 'string'
        },
        nohp: {
            describe: 'nomor hp',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        saveFile.simpanData(argv.nama, argv.email, argv.nohp);
    }
})
.demandCommand();
;

// === list ===
yargs.command({
    command: 'list',
    describe: 'Melihat list api',
    handler(){
        saveFile.list();
    }
})

// === detail ===
yargs.command({
    command: 'detail',
    describe: 'Menampilkan details contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        saveFile.detail(argv.nama);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Menghapus contact berdasarkan nama', 
    handler(argv){
        saveFile.remove(argv.nama);
    }   
})


yargs.parse();



