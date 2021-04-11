class Parent{
    constructor(){
        this.fatherName = "Abul bashar molla"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new Child("Emran");
const baby2 = new Child("Naiem");
console.log(baby);
console.log(baby2);
