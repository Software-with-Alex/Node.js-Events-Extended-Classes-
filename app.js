function sayHello(name){
    console.log(`hello ${name}`)
}

// sayHello('alex')


console.log(window)




window.console.log(window); //global


const logger = require('./logger.js');

const secLogger = require('./logger');




logger('hi')

secLogger('this is the second one')



let helloMessage = require('./logger');


console.log(helloMessage);



const path = require('path');

let pathObj = path.parse(__filename);


console.log(path.parse(__filename))





const namer = require('./logger.js');

namer.log('kiser')



console.log(path);console.log(module)





const tot = require('./tot.js')





console.log(tot.sum(33,88))
console.log(new tot.SomeMathObj('alex', 27))
console.log(new tot.SomeMathObj('paul', 33))

console.log(tot.PI)


const EventEmitter = require('events');



const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => {
    console.log(`tutorial event occurred`)
})

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('example', (mul1,mul2) =>{
    console.log(`I have been emmitted ${mul1 + mul2}`)
});

eventEmitter.emit('example', 22,33)



const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('divided', (div1, div2) => {
    console.log(`${div1 / div2}`);
})


eventEmitter.emit('divided', 20, 2)







events modules in nodejs


const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('multiplySomething', (num1, num2) =>{
    console.log(`${num1 * num2}`); 
})

eventEmitter.emit('multiplySomething',33, 55);

eventEmitter.emit('multiplySomething',12, 9);
// console.log(olderPerson)


class Person extends EventEmitter{
    constructor(name){

        super();
        this.name = name;
        
        
    }
    get names(){
        return this.name;
    }
}

let alex = new Person('alexander hill')

console.log(alex);


alex.on('name', () => {
    console.log(alex.name)
})

alex.emit('name')


 



 const EventEmitter = require('events');

 const eventEmitter = new EventEmitter();

 eventEmitter.on('add',(num1, num2) => {
     console.log('event done');
 })


 eventEmitter.emit('add', 2, 3);









events with classes and extends


const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('addsomething', (num1, num2) => {
    console.log(` this is the anwser ${num1 + num2}`)
})

eventEmitter.emit('addsomething', 99, 1);


class Person extends EventEmitter {
    constructor(name){
        super();
        this.name = name;
    }
}

let alex = new Person('alex');

alex.on()







 
events with classes extended


const EventEmitter = require('events');

const eventsEmitter = new EventEmitter();

eventsEmitter.on('addNums', (num1, num2) => {
    console.log(` this correct number is : ${num1 + num2}`);
})

eventsEmitter.emit('assSomething', 2,3);

// now lets extend a class

class Person extends EventEmitter{
    constructor(name){
        super();
        this.name = name
    }
}

let alexander = new Person('Alexander Hill');

alexander.on('newName', (name) => {
    console.log(name)
})

alexander.emit('newName')








//node events with classes extended

const EventsEmitter = require('events');
const eventsEmitter = new EventsEmitter();

eventsEmitter.on('addSomething', (num1, num2) => {

    console.log(`${num1 + num2}`)

})

eventsEmitter.emit('addSomething', 2, 8);

class Person extends EventsEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}

let alexHill = new Person('Alexander Hill');

alexHill.on('name', () => {
    console.log(alexHill.name)
})

alexHill.emit('name');
