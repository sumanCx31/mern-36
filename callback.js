// 5 :45 min > UTC

// setInterval(() => {
//     let h=today.getHours();
//     let m=today.getMinutes();
//     let s=today.getSeconds();
// document.getElementById('clock').innerHTML=h+":"+m+":"+s;
// },1000);



const fun2 = (callback) => {
    console.log("Before callback");
    callback();
    console.log("After callback");
};

fun2(true);