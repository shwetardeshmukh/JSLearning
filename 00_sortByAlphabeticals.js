//sort string by alphabetical order 

let sortAplabeticalOrder = (string)=>{
let stringLowerCase = string.toLowerCase();
let arrayString = stringLowerCase.split(" ");
let stringAlpha = arrayString.sort();
for (const element of stringAlpha) {
    console.log(element);
}
}
sortAplabeticalOrder("Sort the Given string by alphabetical order");

//sort string by alphabetical order without sort
