"use strict";
//类
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// function greeter(person: string){
//     return "Hello,"+person;
// }
// let user = "hodiki User";
// let user = [0,1,2];
var user = new Student("holy", "M.", "light");
document.body.innerHTML = greeter(user);
