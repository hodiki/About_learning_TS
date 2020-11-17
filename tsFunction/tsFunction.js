"use strict";
//TypeScript 函数
//TypeScript函数    JavaScript函数
//含有类型          无类型
//箭头函数          箭头函数
//函数类型          无函数类型
//必填和可选参数    所有参数都是可选的
//默认参数          默认参数
//剩余参数          剩余参数
//函数重载          无函数重载
//箭头函数 
//例
() => console.log('space');
(dd) => console.log(dd);
() => { };
//未使用箭头函数
function Book1() {
    let _this = this;
    _this.publishDate = 2017;
    setInterval(function () {
        console.log(_this.publishDate);
    }, 1000);
}
//使用箭头函数
function Book2() {
    this.publishDate = 2016;
    setInterval(() => {
        console.log(this.publishDate);
    }, 1000);
}
//参数类型和返回类型
function createUserId(name, id) {
    return name + id;
}
//函数类型
let IdGenerator;
function createUserId2(name, id) {
    return name + id;
}
IdGenerator = createUserId2;
//可选参数及默认参数
//在声明函数时，可以通过 ? 号来定义可选参数
//在实际使用时，可选参数要放在普通参数的后面，否则会导致编译错误
function createUserId3(name, id, age) {
    return name + id;
}
//剩余参数
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
}
let a2 = [];
push(a2, 1, 2, 3);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
//重载类中的成员方法
class Calculator {
    add(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }
}
const calculator = new Calculator;
const result = calculator.add('Semlinker', 'Kakuqo');
