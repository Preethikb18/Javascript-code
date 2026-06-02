const { use } = require("react");

function test(name)
{
    console.log(name);
}
//call by value
test ('tom');

//call by reference :Object referrence

let user =
{
name : 'tom',
age: 34,
role:'service desk',
city: 'bangalore'
};

function getUserDetails (userObj)
{    userObj.name='James'
    console.log(userObj.name, userObj.age);
    return userObj;
    
}
let userCopy= getUserDetails(user); //call function by passing referrnce
console.log(userCopy);


//destructring concept

let person=
{
    name : 'tom',
age: 34,
role:'service desk',
city: 'bangalore'
};

function getPersonData({name, age , role})
{
console.log(name, age);
}
//calling function

getPersonData(person);

let employee=
{
    id: 23,
    name: 'Mat',
    role: 'Software eng',
    department: 'IT'
};

function getEmployeeDetails(empCopy)
{

    console.log(empCopy.id, empCopy.name,empCopy.role.empCopy.department);

}
//object referernce
getEmployeeDetails(empCopy);


//destructring (retrieving only specified property)
let employee=
{
    id: 23,
    name: 'Mat',
    role: 'Software eng',
    department: 'IT'
};

let {name, role} = employee;
console.log(name, role);


let{name:userName, role:userRole} =employee;
console.log(userName,userRole);

function getEmployeeData({name, role, department})
{
    console.log(name,role,department);

}
getEmployeeData(employee);


