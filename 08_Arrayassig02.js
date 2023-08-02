const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumber);
console.log("-------------------------------");
//total no of element
let arrayLength = arrayNumber.length;
console.log(arrayLength);
console.log("-------------------------------");
//1st element and last element
console.log(` 1st element is ${arrayNumber[0]} and last elelment is ${arrayNumber[arrayNumber.length-1]}`);

console.log("----------------------------------");
//last 3 elements
for (let index = arrayNumber.length - 3; index < arrayNumber.length; index++) {
  if (index <= arrayNumber.length) {
    const element = arrayNumber[index];
    console.log(element);
  }
}
console.log("----------------------------------");
//all even numbers 
for (let index = 0; index < arrayNumber.length; index++) {
  if (arrayNumber[index] % 2 === 0) {
    const element = arrayNumber[index];
    console.log(element);
  }
}
console.log("----------------------------------");
// all odd numbers
for (let index = 1; index < arrayNumber.length; index++) {
  if (arrayNumber[index] % 2 == 1) {
    console.log(arrayNumber[index]);
  }
}
console.log("----------------------------------");
//even number position elements and its sum
var sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
  if (index % 2 == 0) {
    sum = sum + arrayNumber[index];
  }
}
console.log(sum);
console.log("-------------------------------");
//odd number position elements and its sum
var sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
  if (index % 2 == 1) {
    sum = sum + arrayNumber[index];
  }
}
console.log(sum);
console.log("-------------------------------");
//sum of all elements
var sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
   sum = sum + arrayNumber[index];
    
}
console.log(sum);
console.log("-------------------------------");

//find no which are divided by 5
for (let index = 0; index < arrayNumber.length; index++) {
  if (arrayNumber[index]% 5 == 0) {
    const element = arrayNumber[index];
    console.log(element);
  }
}
console.log("-------------------------------");
//find 155 is available
let includes = arrayNumber.includes(115);
console.log(includes);
console.log("-------------------------------");
//insert numbers 55 and 66
arrayNumber.splice(3, 0, 55, 66);
console.log(arrayNumber);
//delete 3 element starting from index 4 
arrayNumber.splice(4,3);
console.log(arrayNumber);