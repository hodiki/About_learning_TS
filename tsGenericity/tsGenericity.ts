//TypeScript 泛型
//泛型（Generics）是允许同一个函数接受不同类型参数的一种模板
//相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型
//T 被称为类型变量，它是我们希望传递给 identity 函数的类型占位符，
//同时它被分配给 value 参数用来代替它的类型
//此时 T 充当的是类型，而不是特定的 Number 类型
function identity<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
}

console.log(identity<Number, string>(68, "Semlinker"));
//除了为类型遍历显式设定值之外，我们可以省略尖括号，让编译器自动选择这些类型
console.log(identity(68,"Semlinker"));


//泛型接口
interface GenericIdentityFn<T>{
    (arg:T):T;
}

//泛型类
class GenericNumber<T>{
    zeroValue!: T;
    add!: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue=0;
myGenericNumber.add = function(x,y){
    return x+y;
};


//泛型工具类型
// 为了方便开发者 TypeScript 内置了一些常用的工具类型，
// 比如 Partial、Required、Readonly、Record 和 ReturnType 等

//typeof
//typeof操作符可以用来获取一个变量声明或对象的类型
interface Person{
    name:string;
    age:number;
}

const sem:Person={
    name:'semlinker',
    age:33
};
type Sem=typeof sem;    //->Person

function toArray(x:number):Array<number>{
    return[x];
}
type Func = typeof toArray; //->(x:number)=>number[]

//keyof
//keyof操作符可以用于获取某种类型的所有键，其返回类型式联合类型
interface Person1{
    name:string;
    age:number;
}

type K1=keyof Person;   //"name"|"age"
type K2=keyof Person[];     //"length"|"toString"|"pop"|"push"|"concat"|"join"
type K3=keyof {[x:string]:Person};      //string | number
//在TypeScript中支持两种索引签名，数字索引和字符串索引
interface StringArray{
    //字符串索引->keyof StringArray =>string | number
    [index:string]:string;
}

interface StringArray1{
    //数字索引->keyof StringArray1=>number
    [index:number]:string;
}
//为了同时支持两种索引类型，就得要求数字索引的返回值必须是字符串索引返回值的子类
//其中的原因就是当使用数值索引时，JavaScript 在执行索引操作时，会先把数值索引先转换为字符串索引
//所以 keyof { [x: string]: Person } 的结果会返回 string | number


//in
//in用来遍历枚举类型
type Keys="a"|"b"|"c"
type Obj ={
    [p in Keys]:any
}//->{a:any,b:any,c:any}

//infer
//在条件类型语句中，可以用infer声明一个类型变量并且对它进行使用
type ReturnType<T> = T extends(
    ...args:any[]
)=>infer R ? R:any;
//以上代码中 infer R 就是声明一个变量来承载传入函数签名的返回值类型
//简单说就是用它取到函数返回值的类型方便之后使用

//extends
//可通过extends关键字添加泛型约束，让泛型不要过于灵活或者要继承某些类等
interface Lengthwise{
    length:number;
}

function loggingIdentity<T extends Lengthwise>(arg:T):T{
    console.log(arg.length);
    return arg;
}
//现在这个泛型函数被定义了约束，因此它不再是适用于任意类型
// loggingIdentity(3); //Error 类型“number”的参数不能赋给类型“Lengthwise”的参数。
//这时我们需要传入符合约束类型的值
loggingIdentity({length:10,value:3});
loggingIdentity("string");
// loggingIdentity(123);    //Error


//Partial
//Partial<T>的作用就是将某个类型里的属性全部变为可选项"?"
type Partial<T>={
    [P in keyof T]?:T[P];
};
//在以上代码中，首先通过 keyof T 拿到 T 的所有属性名，
//然后使用 in 进行遍历，将值赋给 P，最后通过 T[P] 取得相应的属性值
//中间的 ? 号，用于将所有属性变为可选












export { }    //解决tslint报错