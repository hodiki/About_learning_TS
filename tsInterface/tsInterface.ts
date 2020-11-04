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
interface Person{
    readonly name:string;
    age?:number;
}
//TypeScript 还提供了 ReadonlyArray<T> 类型
//其与 Array<T> 相似，但是把所有可变方法去掉了，确保数组创建后再也不能被修改
let a: number[]=[1,2,3,4];
let ro: ReadonlyArray<number> = a;
// ro[0]=12; //Error
// ro.push(5); //Error
// ro.length = 100;    //Error
// a = ro; //Error

//任意属性 
//索引签名
//有时候我们希望一个接口中除了包含必选和可选属性之外，还允许有其他的任意属性
//这时我们可以使用 索引签名 的形式来满足上述要求
interface Person3{
    name3:string;
    age?:number;
    [propName:string]:any;
}

const p1:Person3 = {name3:"semlinker"};
const p2:Person3 = {name3:"lolo",age:5};
const p3:Person3 = {name3:"kakuqo",sex:1};


//接口与类型别名的区别
//Objects/Functions



export { }    //解决"无法重新声明块范围变量"报错