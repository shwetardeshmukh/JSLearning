

const array = [ 20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log('------------------Traditional Way----------------------');
let sum = 0
for (const element of array) {
    sum = sum + element
}
console.log(`Sum of all elements : ${sum}`);

console.log('------------------reduce() method----------------------');


const sumOfArray = array.reduce((runningTotal,element)=>{
 return  runningTotal + element
});

console.log(`Sum of elements : ${sumOfArray}`);

console.log('---------------------------------------------------------');


const newArray = array.filter(element => element%5 == 0 );
 const totalSum = newArray.reduce((runningTotal,element)=>{
  return runningTotal + element
 });
 console.log(`Sum of elements which are multiple by 5  : ${totalSum}`);