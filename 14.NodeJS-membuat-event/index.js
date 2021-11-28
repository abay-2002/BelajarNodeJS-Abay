// === NodeJs | Membuat event from scratch ===
// Membuat event from scratch in NodeJs
const {EventEmitter} = require('events');
const myEvent = new EventEmitter();

myEvent.on('lunch', () => {
    console.log('yum');
})

myEvent.emit('lunch');

// eventEmitter();
// require('events');
// emit();