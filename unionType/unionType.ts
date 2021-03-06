//联合类型

//联合类型通常与null或undefined一起使用
const sayHello = (name: string | undefined):string|undefined => {
    return name
};
//例如：这里 name 的类型是 string | undefined 意味着可以将 string 或 undefined 的值传递给 sayHello 函数
sayHello("Hello");
sayHello(undefined);

//字面量类型，约束取值只能是某几个值中的一个
let num: 1 | 2 = 1;
type EventNames = 'click' | 'scroll' | 'mousemove';

//可辨识联合

//可辨识
//可辨识要求联合类型中的每个元素都含有一个单例类型属性
enum CarTransmission {
    Automatic = 200,
    Manual = 300
}

interface Motorcycle {
    vType: "motorcycle"; //discriminant
    make: number;
}

interface Car {
    vType: "car"; //discriminant
    transmission: CarTransmission
}

interface Truck {
    vType: "truck"; //discriminant
    capacity: number;
}
//上述代码的三个接口中都包含一个vType属性，该属性被称为可辨识的属性，而其它的属性只跟接口的特性相关

//联合类型
//Vehicle联合类型，可以表示不同类型的车辆
type Vehicle = Motorcycle | Car | Truck;

//类型守卫（主要内容在typeGuard.ts）
const EVALUATION_FACTOR = Math.PI; //评价因子

//这段代码会报错：原因在 Motorcycle 接口中，并不存在 capacity 属性，而对于 Car 接口来说，它也不存在 capacity 属性
// function evaluatePrice(Vehicle: Vehicle){    
//     return Vehicle.capacity * EVALUATION_FACTOR;
// }

//使用 switch 和 case 运算符来实现类型守卫
//从而确保在 evaluatePrice 方法中，我们可以安全地访问 vehicle 对象中的所包含的属性
function evaluatePrice(vehicle: Vehicle) {
    switch (vehicle.vType) {
        case "car":
            return vehicle.transmission * EVALUATION_FACTOR;
        case "truck":
            return vehicle.capacity * EVALUATION_FACTOR;
        case "motorcycle":
            return vehicle.make * EVALUATION_FACTOR;
    }
}

const myTruck: Truck = { vType: "truck", capacity: 9.5 };
evaluatePrice(myTruck);


//类型别名
type Message = string | string[];

let greetM = (message: Message) => {

}