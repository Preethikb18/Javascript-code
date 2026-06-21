function testing()
{
    console.log ('testing fun');
}

function calling_Func(callback)
{
console.log('calling func')
callback();
}

calling_Func(testing);


// function expression
let coding = function doCoding()
{
    console.log(' calling do Coding');
}

calling_Func (coding);


calling_Func( function ()
{
    console.log('I am running');
})
function calling_Func(callback)
{
console.log('calling func')
callback();
}




function calling_Func(callback)
{
console.log('calling func')
callback();
}
calling_Func(()=>
{
    console.log('calling qrrowFunction');
})



let add = (a,b)=> a+b;
let sub = (a,b) => a-b;
let mul =(a,b) => a*b;
let div =(a,b)=> a/b;

function calculator(callbak, a,b)
{
    console.log('calling multiple operation');
    return callbak(a,b);
}
let res = calculator(sub ,50,10);
console.log(res);

//process 
function greet(name)
{
    console.log('Hi' ,name);
    
}


function processUser(callback ,userName)
{

    console.log('Calling callback function');
    callback (userName);
}

processUser(greet, 'Preethi');


////

function printing(callbak)
{
console.log('printing function');
callbak(100);
}

printing((num)=>
{
console.log('Hello' , num);
})

//
function printing(callback)
{
    console.log('calling callabck function');
    callback(100,200);
}

printing((num1,num2) =>
{
    let res = num1+num2;
    console.log(res);
})


///
function finding(callback1, callback2)
{
    console.log('doing something');
    callback1();
    callback2();
}

let code = function coding()
{
    console.log('Hello coding');
}

let write =function writing()
{
    console.log('Hello Writing');
}
finding(code,write);

//

function click(element)
{
  console.log('click the element', element);
}
function performAction(callbackAction,element)
{
    console.log('do this action');
    callbackAction(element);
}

performAction(click,'loginButton');

//
function getUserDetails(callback,userObj)
{
console.log('Getting User details');
callback (userObj);
}

getUserDetails((user)=>
{
console.log(user)
},{name:'Preethi',age: 30} );