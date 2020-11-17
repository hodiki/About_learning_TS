"use strict";
//TypeScript 对象
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
//对象解构
let person = {
    name: "Semlinker",
    gender: "Male",
};
let { name, gender } = person;
//对象展开运算符
let person2 = {
    name2: "Seminker",
    gender: "Male",
    address: "Xiamen",
};
//组装对象
let personWithAge = Object.assign(Object.assign({}, person), { age: 33 });
//获取除了某些项外的其它项
let { name2 } = person2, rest = __rest(person2, ["name2"]);
