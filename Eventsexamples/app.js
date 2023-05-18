const EventEmitter = require('events');

const customEmitter = new EventEmitter();
// @para 1 -> name of the event
// @para 2 ->callback function

customEmitter.on('response', (name, number)=>{
    console.log(`Data recieved: ${name} ${number}`);
})

customEmitter.on('response', ()=>{
    console.log(`Some other imformation received`);
})

customEmitter.emit('response','vinay', 219834);

// customEmitter.emit('response');