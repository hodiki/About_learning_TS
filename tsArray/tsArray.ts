//TypeScript数组

//数组解构
let x:number;let y:number;let z:number;
let five_array = [0,1,2,3,4];
[x,y,z]=five_array;     //[0,1,2]

//数组展开运算符
let two_array = [0,1];
let five_array2 = [...two_array,2,3,4]

//数组遍历
let colors:string[]=["red","green","blue"];
for(let i of colors){
    console.log(i);
}


export{}    //解决"无法重新声明块范围变量"报错