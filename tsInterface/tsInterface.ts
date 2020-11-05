//TypeScript接口

//除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述

//对象的形状
//例
// interface Person{
//     name:string;
//     age:number;
// }

// let semlinker:Person={
//     name:"semlinker",
//     age:33,
// };

//可选|只读属性
//只读属性用于限制只能在对象刚刚创建的时候修改其值
interface Person {
    readonly name: string;
    age?: number;
}
//TypeScript 还提供了 ReadonlyArray<T> 类型
//其与 Array<T> 相似，但是把所有可变方法去掉了，确保数组创建后再也不能被修改
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0]=12; //Error
// ro.push(5); //Error
// ro.length = 100;    //Error
// a = ro; //Error

//任意属性 
//索引签名
//有时候我们希望一个接口中除了包含必选和可选属性之外，还允许有其他的任意属性
//这时我们可以使用 索引签名 的形式来满足上述要求
interface Person3 {
    name3: string;
    age?: number;
    [propName: string]: any;
}

const p1: Person3 = { name3: "semlinker" };
const p2: Person3 = { name3: "lolo", age: 5 };
const p3: Person3 = { name3: "kakuqo", sex: 1 };


//接口与类型别名的区别

//Objects/Functions
//接口和类型别名都可以用来描述对象的形状或函数签名:

//接口
interface Point {
    x: number;
    y: number;
}

interface SetPoint {
    (x: number, y: number): void;
}

//类型别名
type Point2 = {
    x: number;
    y: number;
};

type SetPoint2 = (x: number, y: number) => void;


//Other Types
//与接口类型不一样，类型别名可以用于一些其他类型，比如原始类型、联合类型和元组
//primitive
type name = string;

//object
type PartialPointX = { x: number };
type PartialPointY = { Y: number };

//union
type PartialPoint = PartialPointX | PartialPointY;

//tuple
type Data = [number, string];


//Extend
//接口和类型别名都能够被扩展，但语法有所不同

//Interface extends interface
interface PartialPointXX { x: number; }
interface PointXX extends PartialPointXX {
    y: number;
}

//Type alias extends type alias
type PartialPointXXX = { x: number; };
type PointXXX = PartialPointXXX & { y: number; };

//Interface extends type alias
type PartialPointYY = { x: number; };
interface PointYY extends PartialPointYY { y: number; }

//Type alias extends interface
interface PartialPointYYY { x: number; }
type PointYYY = PartialPointYYY & { y: number; };


//Implements
//类可以以相同的方式实现接口或类型别名，但类不能实现使用类型别名定义的联合类型
interface Point {
    x: number;
    y: number;
}

class SomePoint implements Point {
    x = 1;
    y = 2;
}

type Point1 = {
    x: number;
    y: number;
}

class SomePoint2 implements Point1 {
    x = 1;
    y = 2;
}

type PartialPointXY = { x: number; } | { y: number; };

//类只能实现对象类型或对象类型与静态已知成员的交集。
// class SomePartialPoint implements PartialPointXY{   //Error
//     x=1;
//     y=2;
// }


//Declaration merging
//与类型别名不同，接口可以定义多次，会被自动合并为单个接口
//但属性声明不允许重复
interface Point { x: number; }
interface Point { y: number; }
// interface Point { y: undefined; }   //Error

const point: Point = { x: 1, y: 2 };

export { }    //解决"无法重新声明块范围变量"报错