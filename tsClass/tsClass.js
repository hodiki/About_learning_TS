//TypeScript 类
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name;
class Greeter {
    //构造函数-执行初始化操作
    constructor(message) {
        this.greeting = message;
    }
    //静态方法
    static getClassName() {
        return "Class name is Greeter";
    }
    //成员方法
    greet() {
        return "Hello," + this.greeting;
    }
}
//静态属性
Greeter.cname = "Greeter";
let greeter1 = new Greeter("world");
//ECMAScript 私有字段
//ts3.8开始支持私有字段
//私有字段以#字符开头，另称私有名称
//每个私有字段名称都唯一地限定于其包含地类；
//不能再私有字段上使用TypeScript可访问性修饰符（如public或private）;
//私有字段不能在包含的类之外访问，甚至不能被检测到
class Person {
    constructor(name) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    greet() {
        console.log(`Hello, my name is ${__classPrivateFieldGet(this, _name)}!`);
    }
}
_name = new WeakMap();
let semlinker = new Person("Semlinker");
// semlinker.#name;    //Error,不能外部访问私有字段
//访问器
//可以通过getter和setter方法来实现数据的 封装 和 有效性校验 ，防止出现异常数据
let passcode = "Hello TypeScript";
class Employee {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == "Hello TypeScript") {
            this._fullName = newName;
        }
        else {
            console.log("Error:Unauthorized update of employee!");
        }
    }
}
let employee = new Employee();
employee.fullName = "Semlinker";
if (employee.fullName) {
    console.log(employee.fullName);
}
//类的继承
//在 TypeScript 中可以通过 extends 关键字来实现继承
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name); //调用父类的构造函数
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters); //调用父类的方法
    }
}
let sam = new Snake("Sammy the Python");
sam.move();
//抽象类
//使用 abstract 关键字声明的类，我们称之为抽象类
//抽象类不能被实例化，因为它里面包含一个或多个抽象方法
//所谓的抽象方法，是指不包含具体实现的方法
class Persons {
    constructor(name) {
        this.name = name;
    }
}
//应有 1 个参数，但获得 0 个。
// const lolo = new Person;    //Error
//抽象类不能被直接实例化，我们只能实例化实现了所有抽象方法的子类
class Developer extends Persons {
    constructor(name) {
        super(name);
    }
    say(words) {
        console.log(`${this.name}say${words}`);
    }
}
const LiMing = new Developer("LiMing");
LiMing.say("f off Blizzard!!!");
// export { }    //解决"无法重新声明块范围变量"报错
