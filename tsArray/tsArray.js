"use strict";
//TypeScript数组
Object.defineProperty(exports, "__esModule", { value: true });
//数组解构
let x;
let y;
let z;
let five_array = [0, 1, 2, 3, 4];
[x, y, z] = five_array; //[0,1,2]
//数组展开运算符
let two_array = [0, 1];
let five_array2 = [...two_array, 2, 3, 4];
//数组遍历
let colors = ["red", "green", "blue"];
for (let i of colors) {
    console.log(i);
}
