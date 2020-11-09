"use strict";
//TypeScript数组
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//数组解构
var x;
var y;
var z;
var five_array = [0, 1, 2, 3, 4];
x = five_array[0], y = five_array[1], z = five_array[2]; //[0,1,2]
//数组展开运算符
var two_array = [0, 1];
var five_array2 = __spreadArrays(two_array, [2, 3, 4]);
//数组遍历
var colors = ["red", "green", "blue"];
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var i = colors_1[_i];
    console.log(i);
}
