
/*
Operators in JavaScript:

1.Arithmetic Operators
+,-,*,'/',%,++,--.
---------------------------------------------------------------------------------------
2.String concatenation
"+" , ","
---------------------------------------------------------------------------------------
3.Assignment Operators
=,+=,-=,*=,/=,%=.
---------------------------------------------------------------------------------------
4.Comparison Operators
==,===,!=,!==,<,>,<=,>=.
---------------------------------------------------------------------------------------
5.Logical Operators
&&,||,!
---------------------------------------------------------------------------------------
6.Conditional Operators
?:
Example:
let user={
name:"Nitesh",
age:20
}
(user.age>18)?console.log("Eligible"):console.log("Not Eligible");
---------------------------------------------------------------------------------------
7.Nullish Coalescing Operator
??  
eg:
let userInput;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue;
console.log(result); // output: Default Value

8.Object Destructuring
---------------------------------------------------------------------------------------
9.rest and spread operator
...rest , ...spread
---------------------------------------------------------------------------------------
10.Template Literals
`Hello, ${name}`
---------------------------------------------------------------------------------------
11.typeof operator
typeof
---------------------------------------------------------------------------------------
12.delete operator
delete
eg:
The delete operator is used to remove a property from an object.
 * 
 * @example
 * let person = {
 *     name: "John",
 *     age: 30,
 *     city: "New York"
 * };
 * 
 * delete person.age;
 * console.log(person); // output: { name: "John", city: "New York" }
 *
---------------------------------------------------------------------------------------
13.instanceof operator
instanceof
---------------------------------------------------------------------------------------
*/

let h=10
h++
console.log(h);
++h
console.log(h);

p=10
console.log(p++);//First print then increment
console.log(++p);//First increment then print

let str1 = "Hello";
let str2 = "World";
console.log(str1, str2); // output: Hello World

let num1 = 10;
console.log((num1<20)?"num1 is less than 20":"num1 is greater than 20");


// object destructuring
// eg:
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

let { name, age, city } = person;
console.log(name); // output: John
console.log(age);  // output: 30
console.log(city); // output: New York

let obj1={
    name:"Sandesh Bhattarai"
}
let obj2=obj1
obj2.name="Nitesh"
console.log(obj1.name);


// Example of template literals
let userName = "Alice";
let greeting = `Hello, ${userName}! Welcome to our website.`;
console.log(greeting); 

arr1=[1,2,3,4,5]
arr2=[...arr1,6,7,8,9]
console.log(arr2);