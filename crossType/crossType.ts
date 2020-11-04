//交叉类型

//交叉类型是将多个类型合并为一个类型
//通过 & 运算符可以将现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性
type PartialPointX={x:number;};
type Point = PartialPointX & {y:number;};

let point:Point={
    x:1,
    y:2
}

//同名基础类型属性的合并
//假设在合并多个类型的过程中，刚好出现某些类型存在相同的成员，但对应的类型又不一致
interface X{
    c:string;
    d:string;
}

interface Y{
    c:number;
    e:string;
}

type XY = X&Y;
type YX = Y&X;

let p: XY;
let q: YX;

// p = { c: 6, d: "d", e: "e" };   //Error

// q = { c: "c", d: "d", e: "e" };     //Error
//此时若给p或者q赋值会报错，此时c为never类型


//同名非基础类型属性的合并
interface D{d:boolean;}
interface E{e:string;}
interface F{f:number;}

interface A{x:D;}
interface B{x:E;}
interface C{x:F;}

type ABC = A&B&C;

let abc:ABC={
    x:{
      d:true,
      e:'semlinker',
      f:666  
    }
}
console.log('abc:',abc)
console.log(`ABC:${typeof abc},abc.x:${typeof abc.x}`)