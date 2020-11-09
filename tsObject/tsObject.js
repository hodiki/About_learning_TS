"use strict";
//TypeScript 对象
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var person = {
    name: "Semlinker",
    gender: "Male",
};
var name = person.name, gender = person.gender;
//对象展开运算符
var person2 = {
    name2: "Seminker",
    gender: "Male",
    address: "Xiamen",
};
//组装对象
var personWithAge = __assign(__assign({}, person), { age: 33 });
//获取除了某些项外的其它项
var name2 = person2.name2, rest = __rest(person2, ["name2"]);
