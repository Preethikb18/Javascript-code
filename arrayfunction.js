const { Profiler } = require("react");

let num = [1,2,3,5,7,9];
let len = num.length;
console.log(len);

//Add the element to the end of the array
num.push(100);
console.log(num);

// Remove the element from the end of the array
num.pop();
console.log(num);


//Unshift -add to the begining of the array
let product = ['imac','samsung', 'iphone', 'macbook'];
product.unshift('nokia');
console.log(product);

//Shift : Remove the first element
let product = ['imac','samsung', 'iphone', 'macbook'];
product.shift();
console.log(product);

//splice : add or remove or replace element from anywhere in an array
let product = ['imac','samsung', 'iphone', 'macbook'];

product.splice(0,0,'dell');
console.log(product);

let product = ['imac','samsung', 'iphone', 'macbook'];

product.splice(2,2,'dell','sony');
console.log(product);

let product = ['imac','samsung', 'iphone', 'macbook'];
product.slice(0,0);
console.log(product);

let product = ['imac','samsung', 'iphone', 'macbook'];
product.splice(0,1,'canon');
console.log(product);

let product = ['imac','samsung', 'iphone', 'macbook'];
product.splice(2,1,'canon');
console.log(product);

let product = ['imac','samsung', 'iphone', 'macbook'];
product.splice(0,product.length,'canon');
console.log(product);

let product = ['imac','samsung', 'iphone', 'macbook'];
product.splice(product.length-1,1,'canon');
console.log(product);


let product = ['imac','samsung', 'iphone', 'macbook'];
product.splice(2,0,'mouse');
console.log(product);

//Slice: 
let product = ['imac','samsung', 'iphone', 'macbook'];
let newproduct = product.slice(0,1);
console.log(newproduct);

let product = ['imac','samsung', 'iphone', 'macbook'];
let newproduct = product.slice(0,2);
console.log(newproduct);

let product = ['imac','samsung', 'iphone', 'macbook'];
let newproduct = product.slice(0);
console.log(newproduct);

let product = ['imac','samsung', 'iphone', 'macbook'];
let newproduct = product.slice(2,4);
console.log(newproduct);


let product = ['imac','samsung', 'iphone', 'macbook'];
let newproduct = product.slice(-3);
console.log(newproduct);

//reverse:Not recommended to use reverse 
let product = ['imac','samsung', 'iphone', 'macbook'];
product.reverse();
console.log(product);

//index of
let product = ['imac','samsung', 'iphone', 'macbook'];
let i = product.indexOf('samsung');
console.log(i);

let product = ['imac','samsung', 'iphone', 'macbook'];
let i = product.indexOf('preethi');
console.log(i);

//1 st occurance of imac
let product = ['imac','samsung','imac', 'iphone', 'imac', 'macbook'];
let i = product.indexOf('imac');
console.log(i);

//on which index or occurance of imac

//let product = ['imac','samsung','imac', 'iphone', 'imac', 'macbook'];
let j = product.indexOf('imac',i+1);
console.log(j);

//3rd occurance
let k = product.indexOf('imac',j+1);
console.log(k);


let product = ['imac','samsung', 'iphone', 'macbook'];
product.splice(0,2, 'nokia','sony');
console.log(product);

let product = ['imac','samsung', 'iphone', 'macbook'];
let newarray = product.slice(0,1);
console.log(newarray);
