//TypeScript 对象

//对象解构
let person = {
    name: "Semlinker",
    gender: "Male",
};

let { name, gender } = person;

//对象展开运算符
let person2 = {
    name2: "Seminker",
    gender: "Male",
    address: "Xiamen",
};

//组装对象
let personWithAge = { ...person, age: 33 };

//获取除了某些项外的其它项
let { name2, ...rest } = person2;



export { }    //解决"无法重新声明块范围变量"报错