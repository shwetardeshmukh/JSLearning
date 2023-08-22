
console.log("--------------Step1----------------------------------------------");

let show = ()=>{
    console.log("Good Morning ,Today is Tuesday");
}
show();

console.log("--------------Step2---------------------------------------------------");
let multiply = (num1,num2,num3=1)=>{
var result = num1*num2*num3
console.log(`Mulplication of ${num1},${num2},${num3} : ${result}`);
}
multiply(5,5,2);
multiply(10,4)


console.log("--------------Step3----------------------------------------------------");

let additon = (num1,num2,num3,num4,num5)=>{
 return num1+num2+num3+num4+num5

}
var totalAdditions = additon(100,100,200,349,756);
var totalAddition= additon("I Am","Learing" , "ES6" ,"features","in depth")
console.log(`Addition is : ${totalAdditions}`);
console.log(`Addition is : ${totalAddition}`);