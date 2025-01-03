//loops in javascript

const users = [
    { name: "John Doe", email: "john@example.com", address: "123 Main St", phone: "555-1234" },
    { name: "Jane Smith", email: "jane@example.com", address: "456 Oak St", phone: "555-5678" },
    { name: "Alice Johnson", email: "alice@example.com", address: "789 Pine St", phone: "555-8765" },
    { name: "Bob Brown", email: "bob@example.com", address: "321 Maple St", phone: "555-4321" },
    { name: "Charlie Davis", email: "charlie@example.com", address: "654 Elm St", phone: "555-6789" },
    { name: "Diana Evans", email: "diana@example.com", address: "987 Cedar St", phone: "555-9876" },
    { name: "Frank Green", email: "frank@example.com", address: "159 Birch St", phone: "555-1597" },
    { name: "Grace Harris", email: "grace@example.com", address: "753 Walnut St", phone: "555-7531" },
    { name: "Henry Jackson", email: "henry@example.com", address: "852 Spruce St", phone: "555-8523" },
    { name: "Ivy King", email: "ivy@example.com", address: "951 Willow St", phone: "555-9514" }
];

for (let i = 0; i < users.length; i++) {
    console.log(`name: ${users[i].name}`);
    console.log(`email: ${users[i].email}`);
    console.log(`address: ${users[i].address}`);
    console.log(`phone: ${users[i].phone}`);
    console.log('-----------------------------------');

}

//print the following Pattern
/*
P
P R
P R O
P R O G
P R O G R
P R O G R A
P R O G R A M
P R O G R A M M
P R O G R A M M I
P R O G R A M M I N
P R O G R A M M I N G
*/
let str = "PROGRAMMING";
let i = 0;
let j = 0;
for (i = 0; i < str.length; i++) {
    let result="";
   for(j=0;j<=str.length;j++)
   {
       if(j<=i)
       {
        result=result+str[j];
       }
       result=result+"  ";   
}
console.log(result);
}


/*

1  2  3  4  5  6 
1              6
1              6
1              6
1              6
1  2  3  4  5  6
1
1
1
1
1

1
1  2
1  2  3
1  2  3  4
1  2  3  4  5  
*/

