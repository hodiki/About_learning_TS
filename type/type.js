"use strict";
function greet(person) {
    return 'Hello,' + person;
}
//+++++++++目录 start+++++++++
//Bollean
//Number类型
//String类型
//Symbol类型
//Array类型
//Enum枚举类型
//Any类型
//Unknown类型
//Tuple类型
//void类型
//Null和Undefined类型
//object类型（小写o）
//Object类型
//{}类型
//Never类型
//+++++++++目录 end+++++++++
//Bollean类型
var isDone = false;
//Number类型
var count = 10;
//String类型
var namee = "smliker";
//Symbol类型
// const sym = Symbol();
// let obj = {
//     [sym]: "semlinker",
// }
// console.log(obj[sym]);//semlinker
//Array类型
var list1 = [1, 2, 3];
var list2 = [1, 2, 3]; //泛型语法
//Enum枚举类型
//数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["north"] = 0] = "north";
    Direction[Direction["south"] = 1] = "south";
    Direction[Direction["east"] = 2] = "east";
    Direction[Direction["west"] = 3] = "west";
})(Direction || (Direction = {}));
var dir = Direction.north;
//字符串枚举
var Direction2;
(function (Direction2) {
    Direction2["north"] = "north";
    Direction2["south"] = "south";
    Direction2["east"] = "east";
    Direction2["west"] = "west";
})(Direction2 || (Direction2 = {}));
var dir2 = Direction2.north;
var dir3 = 0 /* north */;
//异构枚举
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum[Enum["D"] = 7] = "D";
})(Enum || (Enum = {}));
//Any类型
var value;
// value.foo.bar;
// value.trim();
// value();
// new value();
// value[0][1];
// value.toString();
//Unknown类型
//对 unknown类型的 value 变量的所有赋值都被认为是类型正确的，但将value赋值给其它类型就不一样了
var value2;
var value11 = value2;
var value12 = value2;
// let value13: boolean=value2; //Error
// let value14:number=value2; //Error
// let value15:string = value2; //Error
// let value16:object=value2; //Error
// let value17:any[]=value2; //Error
// let value18:Function=value2; //Error
// value2.foo.bar; //Error
// value2.trim(); //Error
// value2(); //Error
// new value2(); //Error
//Tuple类型
//TS特有类型，定义具有有限数量的未命名属性的类型，使用时必须提供每个属性的值，且类型需匹配
var tupleType;
tupleType = ["hello world", true];
//void类型
//声明一个void类型没什么用，严格模式下，其值只能为undefined
function vvvoid() {
    console.log("This is nothing");
}
//Null和Undefined类型
var u = undefined;
var n = null;
//Object类型
//它是所有Object类的实例的类型,Object类的所有实例都继承了Object接口中的所有属性
//Object接口定义了Object.prototype原型对象上的属性 例：toString():string;   //node_modules/typescript/lib/lib.es5.d.ts
//ObjectConstructor接口定义了Object类的属性 例：new(value?:any):Object;    //node_modules/typescript/lib/lib.es5.d.ts
// 传入一个 Object 对象的实例，它总是会满足该函数的返回类型 —— 即要求返回值包含一个 toString() 方法
function f(x) {
    return x; //OK
}
//{}类型
//没有成员的对象
var obj = {};
//试图访问其属性，TS编译会报错
// obj.prop="hello world";
//但可以使用在Object类型上定义的所有属性和方法
obj.toString();
//Never类型
//表示那些永不存在的值的类型。返回never的函数必须存在无法到达的终点（设计上来说不应到达的，若到达了则表示设计有缺陷）
function infiniteLoop() {
    while (true) { }
}
function conNever(foo) {
    if (typeof foo === "string") {
        //这里foo收窄为string类型
    }
    else if (typeof foo === "number") {
        //这里foo收窄为number类型
    }
    else {
        //foo在此处为never
        var check = foo;
    }
}
console.log(greet("TyoeScript"));
