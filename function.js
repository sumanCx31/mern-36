// // A function can take anything as an argument and return anything as a result.
// // 1.Arrow Function
// eg: const add = (a,b) => a+b;
// console.log(add(1,2)); // 3

// // Hoisting:
// const addNumbers = (a,b) => {return a+b;}

// console.log(addNumbers(10))


// const fooBar = () => {
// a=a+b;}
// let a=10;
// let b=20;
// fooBar()
// console.log(a);

// Find the sum of first 20 even numbers without using loop:
// let sum = 0;
// function Recursive(num) {
//     if (num <= 20) {
//         if (num == 0) {
//             return 0;
//         }
//         else {
//             sum = sum + num;
//             num = num - 2;
//             Recursive(num);
//         }
//     }
//     return sum;
// }
// SumOfEven = Recursive(20);
// console.log(`Sum of first 20 even numbers is ${SumOfEven}`);

let sum=0
let i=0
function EvenRecursive(num) {
    if(num==0)
    {
        return 0;
    }
    else
    { 
        i=i+2
        sum=i+sum;
    }
    num=num-1;
    EvenRecursive(num);
    return sum;
}

num=20;
console.log(EvenRecursive(num));