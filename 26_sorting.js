console.log("For string.......");
//sorting by ascending order
const arrayNames = ["Stew","Jenny","Bill","Larray","Vivek"];
arrayNames.sort();
console.log(arrayNames);

for (const element of arrayNames) {
    console.log(element);
};


//sorting by Descending order
arrayNames.reverse();
console.log(arrayNames);

for (const element of arrayNames) {
    console.log(element);
};


console.log("For numbers.......");
//ascending order
const arraynum = [34, 3, 5, 11, 21, 9, 42];

arraynum.sort((n1,n2)=>{
  return  n1 > n2 ? 1 : -1
});
console.log(arraynum);

//desecending order

arraynum.reverse();
console.log(arraynum);
