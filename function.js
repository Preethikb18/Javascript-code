//Piece of code which is doing something ....reusable and can be called

//function --method
//function called without class :function
//Function written within methos : method

//no return
function test()
{
    console.log('Hello test');

}
//call the function
test();
console.log('Bye!!!');

function click()
{
    console.log('click on the element');
}
click();

//2. zero input ,but return number
function getNumber()
{
    console.log('Print number');
        return 1000;
    
}
getNumber();
let res= getNumber();
console.log(res);

function launchBrowser()
{
    console.log('Launch Browser');
    return true;
}

let isLaunched = launchBrowser();
console.log(isLaunched);
if(isLaunched)
{
    console.log('Enter the url');
}
else
{
    console.log(`Don't enter the url`);
}

function getTrainerName()
{
    return 'Naveen';
}
let result = getTrainerName();
console.log(result);

console.log(typeof getTrainerName);  //function


//3. Some input param and some return
//input param -2
function add( x, y)
{
console.log('Adding 2 number');
let z = x+ y;
return z;
}
let total = add(6,8);
console.log(total);
let r1 = add('preethi ', 100) // can pass parameter of any type 
console.log( r1);

//
function calculateBilling(foodBill, drinksBill, tax)
{
    console.log('calculating the billing amount.....');
    return foodBill+ drinksBill +tax;

}
let totalAmount = calculateBilling(100,200,10);
console.log(totalAmount);

 totalAmount = calculateBilling(200,100,56);
console.log(totalAmount);

console.log('///////////////');

//WAF: AC
//input param: (browser name) : valid : chrome, firefox,edge, safari
//return true
//print : browser is launched successfully
//return : true /false boolen
//wrong browserName : print: invalid browser, return false

function launchBrowser(browserName)
{
console.log('launching the browser' + browserName);

switch (browserName) {
    case 'Chrome':
        console.log('Chrome browser is launched successfully');
        return true;
        case 'Edge':
        console.log('Edge browser is launched successfully');
        return true;
       case 'Safari':
        console.log('Safari browser is launched successfully');
        return true;
        case 'Firefox':
        console.log('Firefox browser is launched successfully');
        return true;
    default:
        console.log('Invalid browser ' + browserName);
        return false;
        
}
}
let isBrowserLaunched = launchBrowser('CHROME');
console.log(isBrowserLaunched);

if(isBrowserLaunched)
{
    console.log('enter the url: + https://www.nal.com ');
}


//--------------
function printLog()
    {
        console.log('printing 2');
        console.log('bye');
    }
function printLog(name)
    {
        console.log('printing 1');
        console.log('bye');
    }

    printLog('naveen');