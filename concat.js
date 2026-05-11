let x =100;
let y =200;

let a = 'kannada';
let b ='playwright'

console.log( `${a} ${b} ${x+y}  ${100-20} `)
console.log(x+y);
console.log(a + b);
console.log( x + a);
console.log(y+ b);

console.log(a+x+b+y);
console.log(x+y+a+b);

console.log (a+b+(x+y))

console.log(`${a}${b} + ${x+y+20}`);

console.log(1 + "1");//11
console.log("1"+ 1);//11
console.log(1+1);
console.log("1"+"1"); //11

console.log("...............");
    console.log(1 - "1"); //1-1=0
    console.log("5" - 1);//4
    console.log("10" - "4"); //6
    console.log("hello"-2);//Nan
    console.log("10" -6);

    console.log("..................");
    
    console.log("20" /"4"); //5
    console.log("20" /"testing"); //NAn
    console.log(10 * "2"); //20
    console.log("hello" / 5);


    console.log("............");
        console.log( 2 ** 3);
        console.log( "3" ** 3);    


//Urinary operator
console.log(+"42");
console.log(+"34" +5);
let d = "45";
console.log(+d +5);
let totalAmount = "2000";
console.log( +totalAmount +34);//2034

console.log("42" +100); 42100
console.log(-"42" +100);//58

let salary ="30";
console.log(+salary + 2000);

console.log( 100 - -"40");// 100+40 =140;

console.log(1 + +"1"); //2
console.log(+"hello" +2);//NAn
