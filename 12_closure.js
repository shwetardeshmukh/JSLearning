// let runs;
// const PIN = 411057;
display();
function display(){
  console.log(`Inside display function......`);

}
// show(); Not allowed
var show = function(){
   console.log(`inside show function`)
}
console.log(`------------------------------------------------------------------------------------------------`);
// 5! = 1 * 2 * 3 * 4 * 5
let result = 1; // 3 
for (let index = 1; index <= 5; index++) {
    result = result * index;

}
console.log(`Factorial of 5 is ${result}`);
console.log('-----------------------------------------------------------------------------------------------------');

//Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7

var FactorialFunction =function(num) {
    let number = 1;
    for (let index = 1; index <= num; index++) {
       number = number * index; 
        
    }
    console.log(`The Factorial of ${num} is ${number}`);
}
FactorialFunction(5);
FactorialFunction(9);
FactorialFunction(11);
FactorialFunction(7);
