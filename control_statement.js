//Control statements in JavaScript allow you to control the flow of execution in your code. Here are some common control statements:
/*
types of control statements:
1. if statement
2. if...else statement
3. if...else if...else statement
4. switch statement
5. while loop
6. do...while loop
7. for loop
8. for...in loop
9. for...of loop
*/

let age = 17;
if(age>18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}
//Switch statement
let day = "Monday";
switch (day) {
    case "Sunday":
        console.log("Today is Sunday");
        break;
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;

    default:
        console.log("Insert a valid day");
        break;
}
//While loop
let i = 0;
while(i!=9){
    console.log(i);
    i++;
}

//Do...while loop
let j=9;
do{
    console.log(j);
    j--;
}while(j!=3);


//For loop
let arr = [1,2,3,4,5];
for(a=0;a<arr.length;a++)
{
  console.log(arr[a]);
}

//For...in loop
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};

obj1={
    name:"suman",
    age:20,
    city:"Kathmandu",
    country:"Nepal",
    sid:77856879
}
let infos =[];
for(let info in obj1)
{
    console.log(obj1[info]);  
    infos.push(`${info}:${obj1[info]}`); 
}

//For...of loop
let arr3 = [1,2,3,4,5];
for(let data of arr3)
{
    console.log(data);
    
}
console.log(infos);
console.log(infos.length);
/*
print the amount of tax to be paid by a software developer.a
if he earns a salary of NavigationPreloadManager.30000 per year.
The tax range to be paid is as follows: 
For the first 50000=>1%
For the next 30000=>15%
For the next 20000=>20%
For the next 100000=>25%
For the remaining=>30%
*/

// create a js code block that prints the day of the weeks based on the number provided.

let num=4
p=num-1
day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
if(num===1)
{
    console.log(day[p]);
}
else if(num===2)
{
    console.log(day[p]);
}
else if(num===3)
{
    console.log(day[p]);
}
else if(num===4)
{
    console.log(day[p]);
}
else if(num===5)
{
    console.log(day[p]);
}
else if(num===6)
{
    console.log(day[p]);
}
else(num===7)
{
    console.log(day[p]);
}
