//类
class Student {
    fullName: string;
    constructor(public firstName:string, public middleInitial:string, public lastName:string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

//接口
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

// function greeter(person: string){
//     return "Hello,"+person;
// }

// let user = "hodiki User";
// let user = [0,1,2];
let user = new Student("holy", "M.", "light");

document.body.innerHTML = greeter(user);

export { }    //解决tslint报错