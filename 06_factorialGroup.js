
function factorial(num){
    // 5 * 4 * 3 * 2 * 1
   if(num==1) {
    return 1;
   } else {
    return num * factorial(num-1); //5 * 4 * 3 * 2 * 1
   } 
}
let fact = factorial(5);
console.log(`Factorial using recursion is: ${fact}`);


