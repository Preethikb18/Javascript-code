//callback hell  -pyramid of doom
function startMachine(callabck)
{
    setTimeout(()=>
    {
        console.log('MAchine has started');
        callabck();
    },2000)
}
function boilWater(callabck)
{
    setTimeout(()=>
    {
        console.log('Water is boiled');
        callabck();
    },4000)
}

function addCoffeePowder(callabck)
{
    setTimeout(()=>
    {
        console.log('Add a coffee powder');
        callabck();
    },4000)
}
function pourInCup(callabck)
{
    setTimeout(()=>
    {
        console.log('Pour in cup');
        callabck();
    },2000)
}
function serveCofee(callabck)
{
    setTimeout(()=>
    {
        console.log('Serve coffee');
        callabck();
    },2000)
}

startMachine(()=>
{
    boilWater(()=>
    {
        addCoffeePowder(()=>
        {
            pourInCup(()=>
            {
                serveCofee(()=>
                {
                    console.log('Your coffee is ready');
                })
            })
        })
    })
})

//give me the user object after 4 sec
function getUSerData(callback)
{
    console.log('Fetching user from server/db');
    setTimeout(()=>
    {
        let user =
        {
            id:101,
            name: 'sunny',
            city:'Bangalore'
        }
       callback(user);
    },4000)
}

getUSerData((userObj)=>
{
console.log('user recieved');
console.log(userObj);
console.log(userObj.name,userObj.city);
})






//callbacks with promises...