

const array = [2, 4, 7, 9, 11];
let sum = 0
for (const element  of array) {
    
    sum = sum + element
}
console.log(sum);

console.log('Finding sum using reduce()');

 const totalSum = array.reduce((runningTotal,element)=>{
   return runningTotal + element
 });
 console.log(totalSum);

 console.log("finding the multiplication using reduce()");
 
 let totalmul = array.reduce((runningTotal,element)=>{
   return runningTotal * element
 });
 console.log(totalmul);