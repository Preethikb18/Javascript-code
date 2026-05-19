let num =-9;
if(num <0)
{ console.log('The number is negative');

}
else if(num> 0)
{
    console.log('The number is positive')
}
else if(num ===0)
{
    console.log('The number is zero');
}

let day =1;
switch (day) {
    case 1:
        console.log('Its Monday');
        break;
        case 2:
        console.log('Its Tuesday');
        break;
        case 3:
        console.log('Its Wednesday');
        break;
        case 4:
        console.log('Its Thursday');
        break;
        case 5:
        console.log('Its Friday');
        break;
        case 6:
        console.log('Its Saturday');
        break;
        case 7:
        console.log('Its Sunday');
        break;
}

//Terinary operator
let age =18;
let result= age>18?'Eligible' :'Not eligible';
console.log(result);

//Prints number 1 to 10
for(let i=1; i<=10; i++)
{
    console.log(i);
}

//Prints 10 to 1
for(let j=10; j>=0; j--)
{
    console.log(j);
}

//Print only even numbers from 1 to 20
for(let k =1; k<=20; k++)
{
    if(k%2==0)
    {
        console.log(k);
    }
}

//print sum of numbers from 1 to 100

let j=0;
for(let i=1; i<=100; i++)
{
    j=i+j;

}
console.log(j);

//array example
let fruits = ['apple', 'mango', 'pear', 'guava','kiwi']
console.log(fruits);
console.log(fruits[2]);
fruits.push('banana');
console.log(fruits);
console.log(fruits.length);

console.log('Hello' +' '+  5);
process.stdout.write('Hello' + 'Preethi');
console.log('Hello' + 'Preethi');

console.log('Hello' + 'Preethi');
process.stdout.write('Hello' + 'Preethi');

//template literal
let a =10;
let b=20;
console.log(`The sum of ${a} and ${b} is  ${a+b}`);

let x=5;
let y = x++;
console.log(y); //assign first so 5
console.log(x); //6

//type of
console.log(typeof 34);
console.log(typeof 'Bangalore');
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

console.log(3 +'hi');