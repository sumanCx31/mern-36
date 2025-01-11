//Promise:It is a constructor function that takes a function as an argument and that function takes two arguments resolve and reject.
// stages of promises:
// 1.Pending:Initial stage of promise
// 2.Fulfilled:When the promise is fulfilled
// 3.Rejected:When the promise is rejected

//Handling of Promise through then,catch,finally.

const fun1 = (x) => {
    return new Promise((res, rej) => {
      if(x) {
        res("I am resolve of func1")
      } else {
        rej("I am reject of func1")
      }
    })
  }
  
  const fun2 = (x) => {
    return new Promise((res, rej) => {
      if(x) {
        res("I am resolve of func2")
      } else {
        rej("I am reject of func2")
      }
    })
  }
  
  fun1(true)
    .then((res1) => {
  
      console.log(res1)
  
      fun2(false)
        .then((res2) => {
          console.log(res2)
        })
        .catch((exception) => {
          console.log(exception)
        })
    })
    .catch((exception) => { 
      console.log(exception)
    })
  