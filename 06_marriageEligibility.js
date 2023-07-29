console.log("------------------------Assignment 2------------------------------------------");
var marriageEligibility = function (gender , age){
 if ( age>= 21 && (gender == 'Male')) {
    console.log(` ${gender} with ${age} age are eligible for marriage`);
 }
 
 else if (age >= 18 && (gender == 'Female')) {
    console.log(` ${gender} with ${age} age you are eligible for marriage`);
 } 
 else if (gender == 'Other') {
    console.log(` ${gender} with ${age} age not eligible for marriage`);
 } else{
    console.log(` ${gender} with ${age} age are not eligible for marriage`);
 }
 
    
 

}
marriageEligibility("Male",17);
marriageEligibility("Male",25);
marriageEligibility("Female",28);
marriageEligibility("Female",16);
marriageEligibility("Other",35);
marriageEligibility("Other",41);


console.log("------------------------Assignment 3-------------------------------------------");

 var leapYear = function(year){
   var result = +year;

   if (0==result%4 && 0!=result%100 || 0==result%400 && result!==0 )  {
    console.log(`${result} is leap year`);
   }
   else if (isNaN(year)||typeof year ==='string') {
      console.log(`${year} is invalid`);
     }
     else if ( result==0) {
      console.log(`${year} is invalid`);
     }
     else {
      console.log(`${result} not a leap year`);
     }
     
    
  
   
 }
 leapYear(2020);
 leapYear(1999);
 leapYear(1600);
 leapYear(2022);
 leapYear(1945);
 leapYear(null);
 leapYear('Twenty Twenty');
 leapYear(undefined);
 leapYear(NaN);
 leapYear(1750);
