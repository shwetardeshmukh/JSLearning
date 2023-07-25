console.log("-------------------------------------Step1---------------------------------------");
var greaterNumber = function(argu1,argu2){
var result = (argu1>argu2)? argu1:argu2;
var result2 = (argu1 == argu2)? 'No are equal':result;
console.log( `The Greatest no is : ${result2}`); 
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log("--------------------------------------step2--------------------------------------");
var isEvenOrOddNum = function(arg1){
    var result = arg1%2==0 ? "EVEN" : "ODD";
     console.log( `The given no ${arg1} is ${result}`);
    return result;
}
 isEvenOrOddNum(29);
 isEvenOrOddNum(44);
 isEvenOrOddNum(0);
 isEvenOrOddNum(101);
     
console.log("--------------------------------------step3--------------------------------------");

var wordLength = function(string) {
    var name = string.length;
    var result = name%2==0 ? "EVEN" : "ODD"; 
    console.log(`The length of given word : "${string}" is ${result} `);
   return result;

}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");

