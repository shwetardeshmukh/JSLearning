

const array = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
 console.log( '--------------------step1-------------------------------------------------');
const newArray = array.map((currentValue)=>{
    return currentValue + 10 ;
    
})
console.log(newArray);

console.log( '--------------------step2---------------------------------------------------');

const cubeOfArray = array.map((currentValue)=>{
  return currentValue * currentValue * currentValue
})
console.log(cubeOfArray);

console.log( '--------------------step3----------------------------------------------------');

const indexAddArray = array.map((currentValue,index)=>{
   return currentValue + index
})
console.log(indexAddArray);
