// === NodeJS Studi Kasus ===
// mengambil argument dari terminal/command line.
// Yang terjadi ketika kita mengirimkan argument ke/pada terminal argument tersebut akan tertampung pada sebuah array argv dari sebuah Object process milik NodeJS.
// === Membuat Contacts App menggunakan NPM Module Yargs. === 
// What's Yargs?
// Yargs helps you build interactive command line tools by parsing arguments and generating an elegant user interface.
// Yargs gives you:
// commands and (grouped) options (like module run -n --force),
// a dynamically generated help menu based on your arguments,
// bash-completion shortcuts for commands and options,
// and much more.
// With these features, and many more, yargs allows you to focus on building your program without worrying about your args.
require('yargs').scriptName("pirate-parser").usage('$0 <cmd> [args]').command('hello [name]', 'welcome ter yargs!', (yargs) => {
    yargs.positional('name', {
      type: 'string',
      default: 'Cambi',
      describe: 'the name to say hello to'
    })
  },function (argv) {
    console.log('hello', argv.name, 'welcome to yargs!')
  })
  .help()
  .argv