//datatype: type of data

//1: primitive data type: memory is fixed -predefnied data types
//number
//string
// boolean
//BigInt
//Undefined
//null
//number : 4 bytes for each number
let x = 10;
console.log(x);
console.log(typeof (x));

let y = 12.33;
console.log(y);
console.log(typeof y);

let i =-100;
console.log(i);
console.log(typeof i);

//string : 2 bytes for each character
let name = 'Preethi';
console.log(name);
console.log( typeof name);

let message ='Welcome to my javascript learning';
console.log (message);
console.log(typeof message);

let m1 = '$';
console.log(m1);
console.log(typeof m1);

let m2 ='10000';
console.log (typeof m2);

let m3 = 100;
console.log ( m3);
console.log (typeof m3)

let test = 'I love javascript learning';
console.log( typeof test);

let p;
console.log(p);

//3. boolean : 4 bytes
let flag = true;
console.log( flag);
console.log (typeof flag);

let isElementExist = false;
console.log(isElementExist);
console.log (typeof isElementExist);


//Undefined
//size : 0 bytes
let firstName = undefined;
console.log (firstName);
console.log( typeof firstName);

firstName ='pooja';
console.log (firstName);
console.log(typeof firstName);


//null: no value : 0 bytes
let obj = null;
console.log(obj);
console.log (typeof obj);  // existing bug in javascript ... legacy bug


//Reinitialization
let c  = 10;
c= 20;
console.log (c);
c ='first';
console.log (c);


//constant: fixed value
const pi = 3.14;
console.log( pi);
console.log( typeof pi);

const title ='LoginPage'
console.log(title);

let x =100;
let y =200;
let a = 'selenium';
let b = 'playwright';
console.log(x+y);
console.log(a+b);

//exponential **
console.log(2 ** 3);
console.log("2" ** 3);

//urinary operator (+): converts to a number
console.log(+"42" +5);
let d = "45";
console.log( +d +10);

//urinary operator (-)
console.log(-"42" +100);

console.log(m);
let m =10;
//Both let and const don't allow hoisting (accessing the variable before declaring)






//2: Non primitive data type : Reference type: Memory is dynamic 
//Array
//Objects
//functions
//map/list/set
