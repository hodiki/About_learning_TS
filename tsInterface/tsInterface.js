"use strict";
//TypeScript接口
Object.defineProperty(exports, "__esModule", { value: true });
//TypeScript 还提供了 ReadonlyArray<T> 类型
//其与 Array<T> 相似，但是把所有可变方法去掉了，确保数组创建后再也不能被修改
let a = [1, 2, 3, 4];
let ro = a;
const p1 = { name3: "semlinker" };
const p2 = { name3: "lolo", age: 5 };
const p3 = { name3: "kakuqo", sex: 1 };
class SomePoint {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
}
class SomePoint2 {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
}
// interface Point { y: undefined; }   //Error
const point = { x: 1, y: 2 };
