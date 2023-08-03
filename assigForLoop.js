let array = [4,5,4,5,8,5,7,8,9,7,8];
let array2 = [];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!array2.includes(element)) 
    {
        array2.push(element)
    }
    
}
console.log(`The removed dublicate elements are ${array2}`);

console.log('---------------------------------------------');
let a = [4,5,4,5,8,5,7,8,9,7,8];
let b = [];
let c = [];

for (let i = 0; i < a.length; i++) {
   let count = 1;
   if (a[i]!==0) {
    for (let j = i+1; j < a.length; j++) {
        if (a[i]==a[j]) {
            count++;
            a[j]=0;
        }
        
    }
    b[i]=count++;
   }
    if (b[i]>1) {
        c.push(a[i])
    }
}
console.log(`The removed dublicate elements are ${c}`);