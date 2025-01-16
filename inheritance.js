// class User{
//     name;
//     email;
//     constructor()
//     {
//         console.log("I am from user");
        
//     }
// }
// class Trainer extends User{
//     language;
//     constructor()
//     {
//         super()
//         console.log("I am from Trainer");
//     }
// }
// const trainer = new Trainer();

// console.log(trainer);


// class User1 {
//     name;
//     age = 20;
//     constructor() {
//         this.name = "suman";
//     }
// }
// const userName = new User1();
// function getName() {
//     return userName.name;
// }
// console.log(`Heyyy there, I'm ${getName()}`);


class Employement{
    name;
    #password;
    constructor(_name,_password)
    {
        this.name=_name
        this.#password=_password
    }
    getpassword()
    { 
        return this.#password;
    }
}

const objects1 = new Employement("suman","132suman");
console.log(objects1.getpassword());
console.log(objects1);


