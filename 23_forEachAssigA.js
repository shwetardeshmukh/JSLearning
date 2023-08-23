const arrayNumber = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`-----------------------------Step 1----------------------------------------`);

arrayNumber.forEach((currentValue,index) =>{
    console.log(` Element : ${currentValue}   Index : ${index}`);
})


console.log(`-----------------------------Step 2----------------------------------------`);
var array = []
arrayNumber.forEach((currentValue) =>{
    if (currentValue>0) {
        array.push(currentValue)
    }
})
console.log(` The Positive Numbers are : ${array}`);

console.log(`-----------------------------Step 3----------------------------------------`);

var array = []
arrayNumber.forEach((currentValue)=>{
    
    if (currentValue<0) {
    array.push(currentValue);
    
    
    }

})
console.log(array);


console.log(`-----------------------------Step 4----------------------------------------`);
var array = []
arrayNumber.forEach((currentValue)=>{
    if (currentValue%2==0) {
        array.push(currentValue);
    }
})
console.log(`The Even Numbers are : ${array}`);
console.log(`-----------------------------Step 5----------------------------------------`);
let sum = 0
arrayNumber.forEach(function(currentValue){
 sum = sum + currentValue;
} 
); console.log( `Sum of all elements is : ${sum}`);

console.log(`-----------------------------Step 6----------------------------------------`);
    var array = []
    arrayNumber.forEach((currentValue ,index)=>{
        if (currentValue && index%2==0) {
           array.push(currentValue) 
        }
    })
    console.log(`Even position elements are : ${array}`);
  
    console.log('---------------------------------------------------------------------');