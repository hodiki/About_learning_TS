"use strict";
//TypeScript 断言
//类型断言
//类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构
//它没有运行时的影响，只是在编译阶段起作用。
//通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”
//尖括号语法
var someValue = "this is a string";
var strLength = someValue.length;
//as 语法
var someValue2 = "this is a string too";
var strLength2 = someValue.length;
//非空断言
//在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型
//具体而言，x! 将从 x 值域中排除 null 和 undefined
//忽略undefined和null类型
function myFunc(maybeString) {
    // const onlyString:string =maybeString;   //Error
    var ignoreUndefinedAndNull = maybeString; //OK
}
//PS:!非空断言操作符会从编译生成的Js代码中移除，例如
var a = undefined;
var b = a;
console.log(b);
//虽然能通过Ts的类型检查器的检查，但在编译生成的Js代码中，!操作符被移除，会输出undefined
//确定赋值断言
//告诉Ts编译器该属性会被明确地赋值（不要报错说没赋值了）
// let x:number;    // Variable 'x' is used before being assigned.(2454)
var x; //OK
initialize();
console.log(2 * x);
function initialize() {
    x = 10;
}
