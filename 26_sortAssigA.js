const arrayRollNumber = [113,45,56,11,32,45,109,799,56,45];
console.log("-------------------Reverse Array------------------------");
arrayRollNumber.reverse();
console.log(arrayRollNumber);
console.log("-------------------sort without custom logic-------------");
arrayRollNumber.sort();
console.log(arrayRollNumber);
console.log('-------------------ascending order------------------------');
arrayRollNumber.sort((n1,n2)=>{
 return n1>n2 ? 1 : -1 ;
});
console.log(arrayRollNumber);

console.log("----------------------------------------------------------");

let greatestNo = arrayRollNumber[arrayRollNumber.length-1];
console.log(`Greatest No : ${greatestNo}`);

console.log("----------------------------------------------------------");

let smallerNo = arrayRollNumber[0];
console.log(`Smallest No : ${smallerNo}`);

console.log("----------------------Remove Dublicates elements------------------------------------");

let newSet = [...new Set(arrayRollNumber)] ;
console.log(newSet);
