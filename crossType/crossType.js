"use strict";
//交叉类型
let point = {
    x: 1,
    y: 2
};
let p;
let q;
let abc = {
    x: {
        d: true,
        e: 'semlinker',
        f: 666
    }
};
console.log('abc:', abc);
console.log(`ABC:${typeof abc},abc.x:${typeof abc.x}`);
