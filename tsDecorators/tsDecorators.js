"use strict";
//TypeScript 装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
//类装饰器顾名思义，就是用来装饰类的。它接收一个参数： target: TFunction - 被装饰的类
//例
function Greeter(target) {
    target.prototype.greet = function () {
        console.log("Hello worker");
    };
}
var Greeting = /** @class */ (function () {
    function Greeting() {
        //
    }
    Greeting = __decorate([
        Greeter
    ], Greeting);
    return Greeting;
}());
var myGreeting = new Greeting();
myGreeting.greet();
//若通过外部输入（自定义）问候语
function Greeter1(greeting) {
    return function (target) {
        target.prototype.greet = function () {
            console.log(greeting);
        };
    };
}
var Greeting1 = /** @class */ (function () {
    function Greeting1() {
        //
    }
    Greeting1 = __decorate([
        Greeter1("Hello TS!")
    ], Greeting1);
    return Greeting1;
}());
var myGreeting1 = new Greeting1();
myGreeting1.greet();
//属性装饰器顾名思义，用来装饰类的属性。它接收两个参数:
//target:Object-被装饰的类
//propertyKey:string|symbol-被装饰类的属性名
//例
function logProperty(target, key) {
    delete target[key];
    var backingField = "_" + key;
    Object.defineProperty(target, backingField, {
        writable: true,
        enumerable: true,
        configurable: true
    });
    //property getter
    var getter = function () {
        var currVal = this[backingField];
        console.log("Get:" + key + "=>" + currVal);
        return currVal;
    };
    //property setter
    var setter = function (newVal) {
        console.log("Set:" + key + "=>" + newVal);
        this[backingField] = newVal;
    };
    //Create new property with getter and setter
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    __decorate([
        logProperty
    ], Person.prototype, "name", void 0);
    return Person;
}());
var p1 = new Person("semlinker");
p1.name = "kakuqo";
//方法装饰器
//方法装饰器声明：
// declare type MethodDecorator = <T>(target:Object,propertyKey:string | symbol,
//     descriptor:TypePropertyDescript<T>)=>TypedPropertyDescriptor<T>|void;
//target:Object - 被装饰的类
//propertyKey:string|symbol - 方法名
//descriptor:TypePropertyDescript - 属性描述符
//例:
function log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("wrapped function:before invoking " + propertyKey);
        var result = originalMethod.apply(this, args);
        console.log("wrapped function:after invoking " + propertyKey);
        return result;
    };
}
var Task = /** @class */ (function () {
    function Task() {
    }
    Task.prototype.runTask = function (arg) {
        console.log("runTask invoked,args: " + arg);
        return "finished";
    };
    __decorate([
        log
    ], Task.prototype, "runTask", null);
    return Task;
}());
var task = new Task();
var result = task.runTask("learn ts");
console.log("result:" + result);
//参数装饰器
//参数装饰器声明:
// declare type ParameterDecorator = (target:Object,propertyKey:string|symbol,
//     parameterIndex:name)=>void
//target:Object - 被装饰的类
//propertyKey:stirng | symbol - 方法名
//parameterIndex:number - 方法中参数的索引值
function Log(target, key, parameterIndex) {
    var functionLogged = key || target.prototype.constructor.name;
    console.log("The parameter in position " + parameterIndex + " at " + functionLogged + " has been decorated");
}
var Greeter2 = /** @class */ (function () {
    function Greeter2(phrase) {
        this.greeting = phrase;
    }
    Greeter2 = __decorate([
        __param(0, Log)
    ], Greeter2);
    return Greeter2;
}());
