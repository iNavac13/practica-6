let greet = require('./greet1');
greet();

//let greet2 = require('./greet2').greet;
let greet2a=require('./greet2');
//greet2();
greet2a.greet();

let greet3= require('./greet3');
console.log(greet3);
greet3.greet();

greet3.greeting='Hello from the app';
let greet3b= require('./greet3');
greet3b.greet();

const Greet4=require('./greet4');
let myGreet=new (Greet4);
myGreet.greet();

const greet5=require('./greet5');
greet5.greet();
greet5.run();
greet5.jump();