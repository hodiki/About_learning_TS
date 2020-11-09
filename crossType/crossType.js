"use strict";
//交叉类型
var point = {
    x: 1,
    y: 2
};
var p;
var q;
var abc = {
    x: {
        d: true,
        e: 'semlinker',
        f: 666
    }
};
console.log('abc:', abc);
console.log("ABC:" + typeof abc + ",abc.x:" + typeof abc.x);
