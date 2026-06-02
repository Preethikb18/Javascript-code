
test('preethi');
function test(name)
{
    console.log(name);
}



//function expression
let getData = function gettingUserDetailsFromDashboardPage()
{
console.log('hello user details');

}

getData();
console.log(typeof getData);
console.log(typeof gettingUserDetailsFromDashboardPage)

let getUserData = function getting_user_test_data_from_excel_sheet(name,age)
{
    console.log(name,age);
}
getUserData('Megha',34);
console.log(getUserData.name);