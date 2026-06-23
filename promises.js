//promises
//1.pending
//2.Resolve --Fulfilment
//3. Rejection  --error reason

let pizzaPromise = new Promise((resolve,reject) =>
{ //do something here...
    let success =false;
    if(success)
    {
        resolve('Pizza');
    }
else
{
    reject('delivery is not available');
}
});
pizzaPromise
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
.finally(()=> console.log('close the promise'))


function getUserInfo(userId)
{
    return new Promise((resolve,reject)=>
    {
        console.log('Fetching the user data ...' , userId);
        setTimeout(()=>
        {
            if(userId<=0)
            {
                reject('Invalid user id');
            }
            else
            {
            let user = {
            id : userId,
             name : 'shilpa',
            city :'Bangalore'
        };
        resolve(user);
    }
          },5000);

    });
}
getUserInfo(101)
.then((user)=>{console.log(user)})
.catch((error)=> console.log(error))
.finally(()=> console.log('Finally block'))