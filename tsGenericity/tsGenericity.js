"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TypeScript 泛型
//泛型（Generics）是允许同一个函数接受不同类型参数的一种模板
//相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型
//T 被称为类型变量，它是我们希望传递给 identity 函数的类型占位符，
//同时它被分配给 value 参数用来代替它的类型
//此时 T 充当的是类型，而不是特定的 Number 类型
function identity(value, message) {
    console.log(message);
    return value;
}
console.log(identity(68, "Semlinker"));
//除了为类型遍历显式设定值之外，我们可以省略尖括号，让编译器自动选择这些类型
console.log(identity(68, "Semlinker"));
//泛型类
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
const sem = {
    name: 'semlinker',
    age: 33
};
function toArray(x) {
    return [x];
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//现在这个泛型函数被定义了约束，因此它不再是适用于任意类型
// loggingIdentity(3); //Error 类型“number”的参数不能赋给类型“Lengthwise”的参数。
//这时我们需要传入符合约束类型的值
loggingIdentity({ length: 10, value: 3 });
loggingIdentity("string");
