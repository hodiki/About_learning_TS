"use strict";
//TypeScript接口
Object.defineProperty(exports, "__esModule", { value: true });
//TypeScript 还提供了 ReadonlyArray<T> 类型
//其与 Array<T> 相似，但是把所有可变方法去掉了，确保数组创建后再也不能被修改
var a = [1, 2, 3, 4];
var ro = a;
var p1 = { name3: "semlinker" };
var p2 = { name3: "lolo", age: 5 };
var p3 = { name3: "kakuqo", sex: 1 };
var SomePoint = /** @class */ (function () {
    function SomePoint() {
        this.x = 1;
        this.y = 2;
    }
    return SomePoint;
}());
var SomePoint2 = /** @class */ (function () {
    function SomePoint2() {
        this.x = 1;
        this.y = 2;
    }
    return SomePoint2;
}());
// interface Point { y: undefined; }   //Error
var point = { x: 1, y: 2 };
