function charCount(string) {
    //in string
    let count = 0
   for (let index = 0; index < string.length; index++) {
    let stringElement = string.charAt(index)
    for (let index = 0; index < stringElement.length; index++) {
        const element = stringElement.charAt(index);
        if (element == "e" || element == "E") {
            count++
        }
    }
    
   } 
   console.log(`In string count of "e" is ${count}`)
}
charCount("Shweta Deshmukh");

//in array

function countChar(array) {
    let  count = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (let index = 0; index < element.length; index++) {
            const arrayElement = element[index];
            if (arrayElement == "e" || arrayElement=="E") {
               count++ 
            }
        }
    }
    console.log(`In array count of "e" is ${count}`);
}  
countChar(["Shweta","Deshmukh"])

//vowels count and print

function vowels(string) {
    let count = 0
    for (let index = 0; index < string.length; index++) {
        
            const stringelement = string[index];
            
            if (stringelement == "a"||stringelement == "e"||stringelement == "i"||stringelement == "o"||stringelement == "u"||
           stringelement == "A"||stringelement == "E"||stringelement == "I"||stringelement == "O"||stringelement == "U") {
             count++;
           }
        
           
    }
   console.log(count);
    
}
vowels("I am learing Javascript programs");

console.log('========================================');

let javaScriptArray = ["shweta","ARti" , "Jyoti","Pratik","Ashwini","Atul","Aniket","Sayali","Sakshi"];
let count = 0
let count2 = 0
for (let index = 0; index < javaScriptArray.length; index++) {
    const javaScriptArrayelement = javaScriptArray[index];
    
    for (let index = 0; index < javaScriptArrayelement.length; index++) {
        const javaScriptArrayelementChar = javaScriptArrayelement.charAt(index);

        if (javaScriptArrayelementChar =="S" || javaScriptArrayelementChar=="s" ) {
            count++;
        }
        else if (javaScriptArrayelementChar=="A" || javaScriptArrayelementChar=="a") {
            count2++
        }
        
    }
   
}
console.log(count);
console.log(count2);
