function greet(person: string) {
    return 'Hello,' + person
}

//+++++++++目录 start+++++++++
//Bollean
//Number类型
//String类型
//Symbol类型
//Array类型
//Enum枚举类型
//Any类型
//Unknown类型
//Tuple类型
//void类型
//Null和Undefined类型
//object类型（小写o）
//Object类型
//{}类型
//Never类型
//+++++++++目录 end+++++++++


//Bollean类型
let isDone: boolean = false;

//Number类型
let count: number = 10;

//String类型
let namee: string = "smliker";

//Symbol类型
// const sym = Symbol();
// let obj = {
//     [sym]: "semlinker",
// }
// console.log(obj[sym]);//semlinker

//Array类型
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];//泛型语法

//Enum枚举类型
//数字枚举
enum Direction {
    north,
    south,
    east,
    west,
}
let dir: Direction = Direction.north;
//字符串枚举
enum Direction2 {
    north = "north",
    south = "south",
    east = "east",
    west = "west",
}
let dir2: Direction2 = Direction2.north;
//常量枚举
const enum Direction3 {
    north,
    south,
    east,
    west,
}
let dir3: Direction3 = Direction3.north;
//异构枚举
enum Enum {
    A,
    B,
    C = "C",
    D = 7,
}

//Any类型
let value: any;
// value.foo.bar;
// value.trim();
// value();
// new value();
// value[0][1];
// value.toString();

//Unknown类型
//对 unknown类型的 value 变量的所有赋值都被认为是类型正确的，但将value赋值给其它类型就不一样了
let value2: unknown;
let value11: unknown = value2
let value12: any = value2;
// let value13: boolean=value2; //Error
// let value14:number=value2; //Error
// let value15:string = value2; //Error
// let value16:object=value2; //Error
// let value17:any[]=value2; //Error
// let value18:Function=value2; //Error
// value2.foo.bar; //Error
// value2.trim(); //Error
// value2(); //Error
// new value2(); //Error

//Tuple类型，元组
//TS特有类型，元组，定义具有有限数量的未命名属性的类型，使用时必须提供每个属性的值，且类型需匹配
let tupleType: [string, boolean];
tupleType = ["hello world", true];
//可以使用元组类型来声明剩余参数的类型，且智能提示也会随之改变
//例
//未使用标签的智能提示
//addPerson(arg_0:stirng,args_1:number):void
function addPerson(...args:[string,number]):void{
    console.log(`Person info:name:${args[0]},age:${args[1]}`)
}
//已使用标签的智能提示
//addPerson(name:string,age:number):void
function addPerson1(...args:[name:string,age:number]):void{
    console.log(`Person info: name: ${args[0]},age: ${args[1]}`);
}


//void类型
//声明一个void类型没什么用，严格模式下，其值只能为undefined
function vvvoid(): void {
    console.log("This is nothing")
}

//Null和Undefined类型
let u: undefined = undefined;
let n: null = null;

//object类型（小写o）
//表示非原始类型
//js中被视为原始类型的：
type Primitive = string | boolean | number | bigint | symbol | null | undefined;
//其它类型（非基本类型）
type NonPrimitive = object;

//Object类型
//它是所有Object类的实例的类型,Object类的所有实例都继承了Object接口中的所有属性
//Object接口定义了Object.prototype原型对象上的属性 例：toString():string;   //node_modules/typescript/lib/lib.es5.d.ts
//ObjectConstructor接口定义了Object类的属性 例：new(value?:any):Object;    //node_modules/typescript/lib/lib.es5.d.ts
// 传入一个 Object 对象的实例，它总是会满足该函数的返回类型 —— 即要求返回值包含一个 toString() 方法
function f(x: Object):{toString():string}{
    return x;   //OK
}

//{}类型
//没有成员的对象
const obj = {};
//试图访问其属性，TS编译会报错
// obj.prop="hello world";
//但可以使用在Object类型上定义的所有属性和方法
obj.toString();

//Never类型
//表示那些永不存在的值的类型。返回never的函数必须存在无法到达的终点（设计上来说不应到达的，若到达了则表示设计有缺陷）
function infiniteLoop():never{  //例1
    while(true){}
}
type Foo =string | number;  //例2
function conNever(foo:Foo){
    if(typeof foo==="string"){
        //这里foo收窄为string类型
    }else if(typeof foo==="number"){
        //这里foo收窄为number类型
    }else{
        //foo在此处为never
        const check:never = foo;
    }
}


console.log(greet("TyoeScript"));