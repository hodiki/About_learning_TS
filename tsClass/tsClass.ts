//TypeScript 类

class Greeter {
    //静态属性
    static cname: string = "Greeter";
    //成员属性
    greeting: string;

    //构造函数-执行初始化操作
    constructor(message: string) {
        this.greeting = message;
    }

    //静态方法
    static getClassName() {
        return "Class name is Greeter"
    }

    //成员方法
    greet() {
        return "Hello," + this.greeting;
    }
}

let greeter1 = new Greeter("world");


//ECMAScript 私有字段
//ts3.8开始支持私有字段
//私有字段以#字符开头，另称私有名称
//每个私有字段名称都唯一地限定于其包含地类；
//不能再私有字段上使用TypeScript可访问性修饰符（如public或private）;
//私有字段不能在包含的类之外访问，甚至不能被检测到
class Person {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.#name}!`);
    }
}

let semlinker = new Person("Semlinker");

// semlinker.#name;    //Error,不能外部访问私有字段


//访问器
//可以通过getter和setter方法来实现数据的 封装 和 有效性校验 ，防止出现异常数据

let passcode = "Hello TypeScript";

class Employee {
    private _fullName!: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "Hello TypeScript") {
            this._fullName = newName;
        } else {
            console.log("Error:Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Semlinker";
if (employee.fullName) {
    console.log(employee.fullName);
}


//类的继承
//在 TypeScript 中可以通过 extends 关键字来实现继承
class Animal {   //定义一个动物类
    name: string;

    constructor(theName: string) {    //构造函数，初始化name
        this.name = theName;
    }

    move(distanceInMeters: number = 0) {    //定义一个方法move
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {     //定义蛇类，继承动物类
    constructor(name: string) {
        super(name);    //调用父类的构造函数
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);   //调用父类的方法
    }
}

let sam = new Snake("Sammy the Python");
sam.move();


//抽象类
//使用 abstract 关键字声明的类，我们称之为抽象类
//抽象类不能被实例化，因为它里面包含一个或多个抽象方法
//所谓的抽象方法，是指不包含具体实现的方法

abstract class Persons {
    constructor(public name: string) { }

    abstract say(words: string): void;
}

//应有 1 个参数，但获得 0 个。
// const lolo = new Person;    //Error

//抽象类不能被直接实例化，我们只能实例化实现了所有抽象方法的子类
class Developer extends Persons {
    constructor(name: string) {
        super(name);
    }

    say(words: string): void {
        console.log(`${this.name}say${words}`);
    }
}

const LiMing = new Developer("LiMing");
LiMing.say("f off Blizzard!!!")


//PS：抽象类和接口
//接口是对动作的抽象，抽象类是对根源的抽象
//一个类只能继承一个类（抽象类）(正如人不可能同时是生物和非生物)，但是可以实现多个接口(吃饭接口、走路接口)
//区别
//抽象类当做父类，被继承。且抽象类的派生类的构造函数中必须调用super()；接口可以当做“子类”继承其他类
//抽象类与接口都无法实例化， 类类型接口实际上是一种 抽象类型
//接口中不能包含具体实现，抽象类中除抽象函数之外，其他函数可以包含具体实现
//抽象类中的抽象方法在子类中必须实现， 接口中的非可选项在接口被调用时必须实现
//抽象方法可当做类的实例方法，添加访问修饰符；但是接口不可以


//类方法重载
class ProductService {
    getProducts(): void;
    getProducts(id: number): void;
    getProducts(id?: number) {
        if (typeof id === 'number') {
            console.log(`获取id为${id}的产品信息`);
        } else {
            console.log(`获取所有的产品信息`);
        }
    }
}

const productService = new ProductService();
productService.getProducts(666);    //获取id为666的产品信息
productService.getProducts();   //获取所有的产品信息




// export { }    //解决"无法重新声明块范围变量"报错