"use strict";
//类型守卫
function printEmployeeInformation(emp) {
    console.log("Name:" + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges:" + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date:" + emp.startDate);
    }
}
let dd = {
    name: "12",
    privileges: ["34", "56"],
};
printEmployeeInformation(dd);
//typeof 关键字
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number , got'${padding}'.`);
}
class SpaceRepeatingPadder {
    constructor(numSpaces) {
        this.numSpaces = numSpaces;
    }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}
class StringPadder {
    constructor(value) {
        this.value = value;
    }
    getPaddingString() {
        return this.value;
    }
}
let padder = new SpaceRepeatingPadder(6);
if (padder instanceof SpaceRepeatingPadder) {
    //padder的类型收窄为'SpaceRepeatingPadder'
}
//自定义类型保护的类型谓词
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
