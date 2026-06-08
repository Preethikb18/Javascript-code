let user = {
    id: 23,
    name: 'suma',
    age: 30,
    salary: 450,
    coding()
    {
        console.log('coding function');

    },
    testing()
    {
      console.log(this.name, 'Testing function');
        this.coding();
    },

    data: function()
    {
     console.log(this.age,this.salary,'Anonymous function');
    },
    test: () =>
    {
        console.log('Hello World');
    }
    
};

console.log(user.name,user.age,user.role);
user.coding();
user.testing();
user.data();
user.test();