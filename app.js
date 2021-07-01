var events = require("events");

var eventEmitter = new events.EventEmitter();

function printdatareceived(){
    console.log('data received successful');
}

eventEmitter.on('data received', printdatareceived);

var printconnection = function(){
    console.log('connection successfully');;
    eventEmitter.emit('data received');
}

eventEmitter.on('connection', printconnection);

eventEmitter.emit('connection');




