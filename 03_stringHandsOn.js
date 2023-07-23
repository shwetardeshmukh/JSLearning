console.log('Assignment 2');
console.log('---------------------------------Step1--------------------------------------------------');
console.log(`Given String :"      Hey you are doing good,keep it up      "`);
 function stringHandsOn() {
    
 }
 console.log('---------------------------------Step2------------------------------------------------------');
 var greet = '      Hey you are doing good,keep it up      ';
 var lengthGreet = greet.length;
 console.log(`Lenght of string is :`,lengthGreet);
 console.log('---------------------------------Step3------------------------------------------------------');
var result = greet.trim();
console.log(`After Trim string is :${result} and it's length is : ${result.length}`);
console.log('---------------------------------Step4------------------------------------------------------');
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var endSpaces = greet.length - trimEndLength;
console.log(`Total no of extra spaces removed are : ${endSpaces} `);
console.log('---------------------------------Step5-----------------------------------------------------------');
var firstChar = result.charAt(0);
var lastChar = result.charAt(result.length -1);
console.log(`First Character is = ${firstChar}  and its last character is= ${lastChar}`);
console.log('---------------------------------Step6------------------------------------------------------------');
var totalNoWords = result.replaceAll(',',' ').split(" ");
console.log(`total no of words after trim :  ${totalNoWords.length}`);
console.log('---------------------------------Step7-----------------------------------------------------------');
var indexOfWord = totalNoWords.indexOf("good");
console.log(`Index of "good" : ${indexOfWord}`);
console.log('---------------------------------Step8--------------------------------------------------------------');
var substring = result.substring(22,result.length-1);
console.log(`Substracting of index is : ${substring}`);
console.log('---------------------------------Step9------------------------------------------------------------------');
var presenceOfWord = result.endsWith('up');
console.log( `string ends with "up" : ${presenceOfWord}`);
console.log('---------------------------------Step10-------------------------------------------------------------');
var presenceOfWord2 = result.startsWith('Hey');
console.log( `String starts with "Hey": ${presenceOfWord2 }`);


