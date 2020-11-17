"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//类
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// function greeter(person: string){
//     return "Hello,"+person;
// }
// let user = "hodiki User";
// let user = [0,1,2];
let user = new Student("holy", "M.", "light");
document.body.innerHTML = greeter(user);
