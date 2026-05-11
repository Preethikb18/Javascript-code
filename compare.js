//== Loose equality: it will check only value
//=== strict equality : it will check value and datatype

console.log(10 == 10); //true
console.log( 10 == "10"); //true
console.log("10" == 10); //true
console.log(10 ==="10");

console.log(10 === 10); //true

//true =1
//false = 0
console.log(true ==1); //true
console.log(true ===1); //false

console.log(false ==0);

console.log("" == 0); //  true anything empty is 0
console.log("" === 0); //false

console.log([] == 0); //true javascript automatically convets
console.log([] === 0); //false


let n1 =10;
let n2 = "10";
console.log(n1 ==n2);
console.log(n1===n2);

console.log(null ==undefined); //true
console.log(null === undefined); //false (null is object type and Undefined type is undefined)

console.log([] == ""); // [] is considered as 0
console.log([] === "");

console.log([]=== []); //false compares the memory


