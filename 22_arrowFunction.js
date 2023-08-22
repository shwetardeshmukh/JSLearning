let add = ()=> { // arrow function without argument
    console.log(12+12);
}
add();
let arrowFun = ()=>{  //arrow function with return value
    return 13 +13
}
let value = arrowFun();
console.log(value);

let multiply = (num1,num2)=>{  // arrow function with argument
    console.log(num1*num2);
}
multiply(5,5);