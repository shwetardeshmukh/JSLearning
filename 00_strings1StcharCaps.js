// string 1st letters capitals
let string1stcharCaps = (string)=>{
    let emptyString =""
  let stringSplit = string.split(" ");

   for (let index = 0; index < stringSplit.length; index++) {
    const stringOfarray = stringSplit[index] + " ";
    
    for (let index = 0; index < stringOfarray.length; index++) {
       if (index==0) {
        emptyString = emptyString +stringOfarray.charAt(index).toUpperCase();
       }
       else if (index!==0) {
        emptyString = emptyString + stringOfarray.charAt(index);
       }
        
    }
}
console.log(emptyString);
}
     

string1stcharCaps("javascript is scripting programming and loosely type language");


console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');

let string = "i am learing javascript code";
let stringSplit = string.split(" ");
let temp =""
for (let index = 0; index < stringSplit.length; index++) {
    const arrayString = stringSplit[index]+" ";
    
    for (let index = 0; index < arrayString.length; index++) {
        if (index==0) {
          temp = temp + arrayString.charAt(index).toUpperCase();
        }
        else if (index!==0) {
            temp = temp + arrayString.charAt(index) ;
        }
        
    }
}
console.log(temp);

console.log('--------------------------------------------------------------------------');
 // array first letter capitals
let firstCharUppercase = (array)=>{
    let arrayelementsChar=""
 for (let index = 0; index < array.length; index++) {
    const arrayelement = array[index]+" ";
    
    for (let index = 0; index < arrayelement.length; index++) {
        
        if (index==0 ) {
            arrayelementsChar = arrayelementsChar+arrayelement[index].toUpperCase(); 
        }
        else if (index!==0) {
            arrayelementsChar = arrayelementsChar+ arrayelement[index]
        }

    }
 }
 console.log(arrayelementsChar);

}
firstCharUppercase(["banana", "orange", "apple", "mango", "water melon"]);