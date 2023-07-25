console.log("------------------------------------------Step1------------------------------------------------");
var square = function(value){
    var result = value * value;
    console.log(`Square of Numbers "${value}" is : ${result}`);
    

}
 square(5);
 square(6);
 square(25);
 square(100);
 square(67.89);
 square(59);
// var square = function(value){
//     var result = value * value;
//     console.log(`Square of Numbers 6 is : ${result}`);
    

// }
// square(6);
// var square = function(value){
//     var result = value * value;
//     console.log(`Square of Numbers 25 is : ${result}`);
    

// }
// square(25);
// var square = function(value){
//     var result = value * value;
//     console.log(`Square of Numbers 100 is : ${result}`);
    

// }
// square(100);
// var square = function(value){
//     var result = value * value;
//     console.log(`Square of Numbers 67.89 is : ${result}`);
    

// }
// square(67.89);
// var square = function(value){
//     var result = value * value;
//     console.log(`Square of Numbers 59 is : ${result}`);
    

// }
// square(59);


console.log("------------------------------------------Step2------------------------------------------------");

console.log("Type of Function :",typeof square);

console.log("------------------------------------------Step3------------------------------------------------");

var areaRectangle = function (arg1, arg2){
    var result = arg1 * arg2;
    return result;
}
var res = areaRectangle(499, 917);
console.log('Area of Rectangle plot is :', areaRectangle(499, 917));

console.log("------------------------------------------Step4------------------------------------------------");

var  swapValues = function(n1, n2){
    console.log('Before Swap=> Value1:-', n1, " Value2:-",n2 );
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap=> Value1:-', n1, " Value2:-", n2 );
}
var nam1 = "Mahi";
var nam2 = "Raina";
swapValues(nam1, nam2);
var num1 = 55;
var num2 = 77;
swapValues(num1, num2);

console.log("------------------------------------------Step5------------------------------------------------");
var oprationString = function(string){

var string ="JS the most popular language of internet"
console.log(`The given string is : ${string}`);
var greetLength = string.length;
console.log(`A] The total no of characters available in the string is :"${greetLength}"`);

var characterIndex = string.charAt(6);
console.log(`B] The character at index 6 is: "${characterIndex}"`);

var characterIndex1 = string.charAt(11);
console.log(`C] The character at index 11 is :" ${characterIndex1}"`);

var lastCharacter = string.charAt(greetLength -1);
console.log(`D] The Last Character Of string is : "${lastCharacter}"`);

var firstCharacter = string.charAt(0);
console.log(`E] The First Character is : "${firstCharacter}"`);

var thirdCharacter = string.charAt(greetLength -3);
console.log(`F] The Third Character is : "${thirdCharacter }"`);
var totalNoWords = string.split(" ").length;
console.log(`G] Total no words are : "${totalNoWords}"`);
var wordSquare = totalNoWords*totalNoWords;
console.log(`& square of total no of words is "${wordSquare}"`);
}
oprationString("JS the most popular language of internet")