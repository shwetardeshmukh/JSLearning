

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log('--------------------------------step1----------------------------------------');
const newArray = arrayNumbers.filter((currentValue)=>{
 return currentValue>50
})
console.log(newArray);
console.log('--------------------------------step2----------------------------------------');
const evenNo = arrayNumbers.filter((currentValue)=>{
    return currentValue%2==0
})
console.log(evenNo);
console.log('--------------------------------step3----------------------------------------');
const oddNo = arrayNumbers.filter((currentValue)=>{
   return currentValue%2==1
})
console.log(oddNo);
console.log('--------------------------------step4----------------------------------------');
const arrayNew = arrayNumbers.filter((currentValue)=>{
     return currentValue%5==0
})
console.log(arrayNew);
console.log('--------------------------------step5----------------------------------------');
const numbers = arrayNumbers.filter((currentValue)=>{
   return currentValue > 20 && currentValue < 50
})
console.log(numbers);