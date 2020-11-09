"use strict";
//TypeScript 类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Greeter = /** @class */ (function () {
    //构造函数-执行初始化操作
    function Greeter(message) {
        this.greeting = message;
    }
    //静态方法
    Greeter.getClassName = function () {
        return "Class name is Greeter";
    };
    //成员方法
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    //静态属性
    Greeter.cname = "Greeter";
    return Greeter;
}());
var greeter1 = new Greeter("world");
//ECMAScript 私有字段
//ts3.8开始支持私有字段
//私有字段以#字符开头，另称私有名称
//每个私有字段名称都唯一地限定于其包含地类；
//不能再私有字段上使用TypeScript可访问性修饰符（如public或private）;
//私有字段不能在包含的类之外访问，甚至不能被检测到
var Person = /** @class */ (function () {
    function Person(name) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is " + __classPrivateFieldGet(this, _name) + "!");
    };
    return Person;
}());
_name = new WeakMap();
var semlinker = new Person("Semlinker");
// semlinker.#name;    //Error,不能外部访问私有字段
//访问器
//可以通过getter和setter方法来实现数据的 封装 和 有效性校验 ，防止出现异常数据
var passcode = "Hello TypeScript";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "Hello TypeScript") {
                this._fullName = newName;
            }
            else {
                console.log("Error:Unauthorized update of employee!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Semlinker";
if (employee.fullName) {
    console.log(employee.fullName);
}
//类的继承
//在 TypeScript 中可以通过 extends 关键字来实现继承
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters); //调用父类的方法
    };
    return Snake;
}(Animal));
var sam = new Snake("Sammy the Python");
sam.move();
//抽象类
//使用 abstract 关键字声明的类，我们称之为抽象类
//抽象类不能被实例化，因为它里面包含一个或多个抽象方法
//所谓的抽象方法，是指不包含具体实现的方法
var Persons = /** @class */ (function () {
    function Persons(name) {
        this.name = name;
    }
    return Persons;
}());
//应有 1 个参数，但获得 0 个。
// const lolo = new Person;    //Error
//抽象类不能被直接实例化，我们只能实例化实现了所有抽象方法的子类
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name) {
        return _super.call(this, name) || this;
    }
    Developer.prototype.say = function (words) {
        console.log(this.name + "say" + words);
    };
    return Developer;
}(Persons));
var LiMing = new Developer("LiMing");
LiMing.say("f off Blizzard!!!");
//PS：抽象类和接口
//接口是对动作的抽象，抽象类是对根源的抽象
//一个类只能继承一个类（抽象类）(正如人不可能同时是生物和非生物)，但是可以实现多个接口(吃饭接口、走路接口)
//区别
//抽象类当做父类，被继承。且抽象类的派生类的构造函数中必须调用super()；接口可以当做“子类”继承其他类
//抽象类与接口都无法实例化， 类类型接口实际上是一种 抽象类型
//接口中不能包含具体实现，抽象类中除抽象函数之外，其他函数可以包含具体实现
//抽象类中的抽象方法在子类中必须实现， 接口中的非可选项在接口被调用时必须实现
//抽象方法可当做类的实例方法，添加访问修饰符；但是接口不可以
//类方法重载
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function (id) {
        if (typeof id === 'number') {
            console.log("\u83B7\u53D6id\u4E3A" + id + "\u7684\u4EA7\u54C1\u4FE1\u606F");
        }
        else {
            console.log("\u83B7\u53D6\u6240\u6709\u7684\u4EA7\u54C1\u4FE1\u606F");
        }
    };
    return ProductService;
}());
var productService = new ProductService();
productService.getProducts(666); //获取id为666的产品信息
productService.getProducts(); //获取所有的产品信息
// export { }    //解决"无法重新声明块范围变量"报错
