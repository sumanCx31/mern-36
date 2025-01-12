class User{
    name;
    email;
    constructor()
    {
        console.log("I am from user");
        
    }
}
class Trainer extends User{
    language;
    constructor()
    {
        super()
        console.log("I am from Trainer");
    }
}
const trainer = new Trainer();

console.log(trainer);


class User1 {
    name;
    age = 20;
    constructor() {
        this.name = "suman";
    }
}
const userName = new User1();
function getName() {
    return userName.name;
}
console.log(`Heyyy there, I'm ${getName()}`);

