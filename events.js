const Emitter = require('events');

const emitter = new Emitter;

emitter.once('message', (data, second, third) => { //on - можно генерировать событие много раз
    console.log('Вы прислали сообщение  ' + data)  //once - только один
    console.log('Второй аргумент ' + second);
    console.log('Третий аргумент ' + third);
})

const MESSAGE = process.env.message || "";

if(MESSAGE) {
    emitter.emit('message', MESSAGE, 123, 456)
} else {
    emitter.emit('message', ' вы не указали сообщение')
}

emitter.removeAllListeners()
emitter.removeListener('message')

const callback = (data, second, third) => { 
    console.log('Вы прислали сообщение  ' + data)  
    console.log('Второй аргумент ' + second);
    console.log('Третий аргумент ' + third);
}

emitter.once('message', callback)
emitter.removeListener('message', callback)