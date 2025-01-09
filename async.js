//Promise:It is a constructor function that takes a function as an argument and that function takes two arguments resolve and reject.
// stages of promises:
// 1.Pending:Initial stage of promise
// 2.Fulfilled:When the promise is fulfilled
// 3.Rejected:When the promise is rejected

const login = (username,password) => {
    return new Promise((resolve,reject) => {
        let success = false;
        if(username === 'admin' && password === '12345')
        {
            success = true;
        }
        if(success)
        {
            resolve("You are logged in");
        }
         else {
            reject("Promise is rejected");
            }
        }).then((message) => {
            console.log(message);
            data();
        });
    function data()
    {
            console.log("name:suman\nage:20\ncity:ktm"); 
        }
    }

login('admin','12345')
.then((RESOLVE) => {
    console.log(RESOLVE);
})
.catch((REJECTION) => {
    console.log(REJECTION);
})