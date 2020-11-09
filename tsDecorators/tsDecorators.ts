//TypeScript 装饰器

//何为装饰器
//它是一个表达式
//该表达式被执行后，返回一个函数
//函数的入参分别为target,name和descriptor
//执行该函数后，可能返回descriptor对象，用于配置target对象

//PS:若要启用实验性的装饰器特性，你必须在命令行或 tsconfig.json 里启用 experimentalDecorators 编译器选项


//分类
//类装饰器
//属性装饰器
//方法装饰器
//参数装饰器


//类装饰器
declare type ClassDecorator = <TFunction extends Function>(
    target:TFunction
)=>TFunction | void;
//类装饰器顾名思义，就是用来装饰类的。它接收一个参数： target: TFunction - 被装饰的类

//例
function Greeter(target:Function):void{
    target.prototype.greet = function():void{
        console.log("Hello worker")
    }
}

@Greeter
class Greeting{
    constructor(){
        //
    }
}

let myGreeting = new Greeting();
(myGreeting as any).greet();


//若通过外部输入（自定义）问候语
function Greeter1(greeting:string){
    return function(target:Function){
        target.prototype.greet = function():void{
            console.log(greeting);
        };
    };
}

@Greeter1("Hello TS!")
class Greeting1{
    constructor(){
        //
    }
}

let myGreeting1 = new Greeting1();
(myGreeting1 as any).greet();



//属性装饰器
//声明：
declare type PropertyDecorator = (target:Object,
    propertyKey:string|symbol)=>void;
//属性装饰器顾名思义，用来装饰类的属性。它接收两个参数:
//target:Object-被装饰的类
//propertyKey:string|symbol-被装饰类的属性名

//例
function logProperty(target:any,key:string){
    delete target[key];

    const backingField="_"+key;

    Object.defineProperty(target,backingField,{
        writable:true,
        enumerable:true,
        configurable:true
    });

    //property getter
    const getter = function(this:any){
        const currVal = this[backingField];
        console.log(`Get:${key}=>${currVal}`);
        return currVal;
    }

    //property setter
    const setter = function(this:any,newVal:any){
        console.log(`Set:${key}=>${newVal}`);
        this[backingField]=newVal;
    }

    //Create new property with getter and setter
    Object.defineProperty(target,key,{
        get:getter,
        set:setter,
        enumerable:true,
        configurable:true
    });
}

class Person{
    @logProperty
    public name:string;

    constructor(name:string){
        this.name=name;
    }
}

const p1 = new Person("semlinker");
p1.name = "kakuqo";





//方法装饰器

//方法装饰器声明：
// declare type MethodDecorator = <T>(target:Object,propertyKey:string | symbol,
//     descriptor:TypePropertyDescript<T>)=>TypedPropertyDescriptor<T>|void;

//target:Object - 被装饰的类
//propertyKey:string|symbol - 方法名
//descriptor:TypePropertyDescript - 属性描述符

//例:
function log(target:Object,propertyKey:string,descriptor:PropertyDescriptor){
    let originalMethod = descriptor.value;
    descriptor.value = function(...args:any[]){
        console.log("wrapped function:before invoking " + propertyKey);
        let result = originalMethod.apply(this,args);
        console.log("wrapped function:after invoking " + propertyKey);
        return result;
    };
}

class Task{
    @log
    runTask(arg:any):any{
        console.log("runTask invoked,args: " + arg);
        return "finished";
    }
}

let task = new Task();
let result = task.runTask("learn ts");
console.log("result:" + result);



//参数装饰器

//参数装饰器声明:
// declare type ParameterDecorator = (target:Object,propertyKey:string|symbol,
//     parameterIndex:name)=>void

//target:Object - 被装饰的类
//propertyKey:stirng | symbol - 方法名
//parameterIndex:number - 方法中参数的索引值

function Log(target:Function,key:string,parameterIndex:number){
    let functionLogged = key || target.prototype.constructor.name;
    console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has been decorated`);
}

class Greeter2{
    greeting:string;
    constructor(@Log phrase:string){
        this.greeting = phrase;
    }
}


export { }    //解决tslint报错