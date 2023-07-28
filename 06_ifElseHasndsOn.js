 console.log("-----------------------------------Assignment1--------------------------------------------");
 function ifElse (value){
 if (value%2==0) {
    console.log(`${value} is even number`);
 } else {
    console.log(`${value} is odd number`);
 }
 return value;
}
ifElse (45);
ifElse (70);
ifElse (67);
ifElse (98);
console.log("-------------------------------------------------------------------------------------------");

 function voteEligibility (age){
 if (age>=18) {
    console.log(`Age ${age} You are eligible for vote`);
 } else {
    console.log(`Age ${age}  You are not eligible for vote`);
 }
}
voteEligibility (18,);
voteEligibility (20);
voteEligibility (17);
voteEligibility (40);

console.log("--------------------------------------------------------------------------------------------");

function checkStringLength(string) {
    var java = string.length;
    if (java>= 10) {
        console.log(`${string} contain more than 10 characters`);
    } else {
        console.log(`${string} not contain more than 10 characters`);
    }
}
checkStringLength("JavaScript - ES6");

console.log("-------------------------------------------------------------------------------------------");

function checkStringStart(value1){
  var word = value1.startsWith("Java");

  if (word) {
    console.log(`${value1} start with "Java" `);
  }else{
    console.log(`${value1}not start with "Java"`);
  }
}
checkStringStart("JavaScript Language")
console.log("--------------------------------------Assignment2----------------------------------------------------");
var voteEligibilitys = function (age){

    if( age<=0 || age>130 || isNaN(age)) {
        console.log(`Invalid data : ${age}`);
        }else if (age<18){
        console.log(`You are age not eligible for vote : ${age}`);
        }else if(age>=18){
        console.log(`You are age  eligible for vote : ${age}`);
        }
}
voteEligibilitys(45);
voteEligibilitys(17);
voteEligibilitys(8);
voteEligibilitys(20);
voteEligibilitys(-10);
voteEligibilitys(200);
voteEligibilitys(0)
voteEligibilitys(undefined)
 voteEligibilitys(null);













