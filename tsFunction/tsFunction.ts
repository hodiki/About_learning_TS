//TypeScript 函数

//TypeScript函数    JavaScript函数
//含有类型          无类型
//箭头函数          箭头函数
//函数类型          无函数类型
//必填和可选参数    所有参数都是可选的
//默认参数          默认参数
//剩余参数          剩余参数
//函数重载          无函数重载

//箭头函数 
//例
() => console.log('space');

(dd: any) => console.log(dd);

() => { }

//未使用箭头函数
function Book1(this: any) {
    let _this = this
    _this.publishDate = 2017;
    setInterval(function () {
        console.log(_this.publishDate);
    }, 1000)
}


//使用箭头函数
function Book2(this: any) {
    this.publishDate = 2016;
    setInterval(() => {
        console.log(this.publishDate);
    }, 1000);
}

//参数类型和返回类型
function createUserId(name: string, id: number): string {
    return name + id;
}

//函数类型
let IdGenerator: (chars: string, nums: number) => string;

function createUserId2(name: string, id: number): string {
    return name + id;
}

IdGenerator = createUserId2

//可选参数及默认参数
//在声明函数时，可以通过 ? 号来定义可选参数
//在实际使用时，可选参数要放在普通参数的后面，否则会导致编译错误
function createUserId3(name: string, id: number, age?: number): string {
    return name + id;
}

//剩余参数
function push(array: any[], ...items: number[]) {
    items.forEach(function (item) {
        array.push(item)
    });
}

let a2: any[] = [];
push(a2, 1, 2, 3);


//函数重载
//函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力
//函数实现需要马上出现在声明之后
type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

//重载类中的成员方法
class Calculator {
    add(a: string, b: string): string;
    add(a: number, b: string): number;
    add(a: string, b: number): string;
    add(a: Combinable, b: Combinable) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }
}

const calculator = new Calculator;
const result = calculator.add('Semlinker','Kakuqo');