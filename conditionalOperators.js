consolelog(10 == 10);
console.log(10 > 5);
console.log(true === true);

let age =16;
if(age >=10)
{
    console.log('you are eligible for voting');
}
else
{ 
    console.log('you are not eligible for voting');
}

if(true)
{
    console.log('hello NAL');

}
else
{//dead code
    console.log('bye');
}


if(false)
{
    console.log('hello NAL');

}
else
{//dead code
    console.log('bye');
}

let isElementPresent = false;
if(isElementPresent)
{
    console.log('Click on the element');
}
else

{
    console.log('else is missing on the page')
}
//cross browser logic
let browser ='chrome';
if(browser === 'chrome')
{
    console.log("launch chrome");

}
if(browser =='firefox')
{
    console.log('launch firefox');
}
if(browser == 'edge')
{ 
    console.log('launch edge');
}
if(browser == 'safari')
{
    console.log('launch safari');
}
else
{
    console.log('plz pass the right browser');
}

//if else to over come this

let browser ='chrome';
if(browser === 'chrome')
{
    console.log("launch chrome");

}
else if(browser ==='firefox')
{
    console.log('launch firefox');
}
else if(browser === 'edge')
{ 
    console.log('launch edge');
}
else if(browser === 'safari')
{
    console.log('launch safari');
}
else
{
    console.log('plz pass the right browser');
}


