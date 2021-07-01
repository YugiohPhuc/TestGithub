const { removeListener } = require('cluster');
var events = require('events');

var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('listener1 is executed');
}

var listener2 = function listener2(){
    console.log('listener2 is executed');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var event_counter = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log('there are ' + event_counter + ' listeners listening the connection event');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log("listener1 was stop");

event_counter = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log('there are ' + event_counter + ' listeners listening the connection event');

eventEmitter.emit('connection');
