
//encapsulation

class Employee 
{
    name;
    age;
    #salary; //private var of the class

    constructor (name,age,salary)
    {
        this.name =name;  //public
        this.age =age;   //public
        this.#salary =salary;  //private
    }
//public getter and setter methods

setSalary (salary)
{
    this.#salary =salary;
}

getSalary ()
{
    return this.#salary;
    
}
}

let  objEmp =new Employee('Tom',20,123);
console.log(objEmp.name,objEmp.age);
let s1 =objEmp.getSalary();
console.log(s1);


class LoginPage
{
    #username;
    #password;

    constructor(username,password)
    {
        this.#username =username;
        this.#password =password;
    }
    //getter methods
    getUserName()
    {
        return this.#username;
    }
    
    getPassword()
    {
        return this.#password;
    }

    //setter mthods

    setUsername (username)
    {
        this.#username=username;
    }
    setPassword(password)
    {
        this.#password =password;
    }
}

let lg= new LoginPage('preethi.ischool@gmail.com', 'Petsure123');
let user = lg.getUserName();
console.log(user);



class User{

    #name;
    #age;
    #salary;

    constructor(name,age,salary)
    {
        this.#name=name;
        if(age>=18)
        {     this.#age =age;

        }
         if(salary >10)
         {
this.#salary = salary;
         }
        
    }

    setAge(age)
    {
        if(age >=18)
        {
            this.#age = age;
        }
        else
        {
            console.log('age must greater than 18');
        }
    }

    getAge()
    {
        return this.#age;
    }
}

let objUser = new User('tom',21, 34);
let t1 = objUser.getAge();
console.log(t1);



class Browser
{

    launchBrowser()
    {
        console.log('launching browser');

    }
    checkOSCompatible()
    {
        console.log('checkOSompatible');

    }
    #checkRAMSize()
    {
        console.log('checkRamSize');
    }
    #checkUpgrade()
    {
        console.log('checkUpgrade');
    }
}

let obj =new Browser();
obj.launchBrowser();
obj.checkRAMSize();
obj.checkUpgrade();

