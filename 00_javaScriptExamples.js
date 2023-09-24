// find square root
var a = 3
var result = Math.sqrt(a);
console.log(result);

//find area of tringle 
var b = 4;
var h = 6;
var area = b*h/2
console.log(area);

console.log('---------------------------------------');

const currentDate = new Date();
const inputDateString = '05/09/2023';
const inputDateParts = inputDateString.split('/');
const inputDate = new Date(
  parseInt(inputDateParts[2]),
  parseInt(inputDateParts[1]) - 1,
  parseInt(inputDateParts[0])
);

if (
    inputDate.getDate() === currentDate.getDate() &&
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getFullYear() === currentDate.getFullYear()
) {
    console.log("Happy Teachers Day  to all Teachers 💐💐💐");
}
console.log('=====================================================');

//convert celsius to Fahrenheit

let num = 55
console.log(num*1.8+32);
console.log('------------------------------------------------------');

// generating random number




//check no positive,negativeand zero

function checkNo(num) {
     if (num==0) {
        console.log(`${num} is zero`);
     }
     else if (num>0) {
        console.log(`${num} is positive`);
     }
     else if (num<0) {
        console.log(`${num} is negative`);
     }
     }
checkNo(3)
checkNo(-7)
checkNo(0)
checkNo(-50)
checkNo(98)

console.log(`-----------------------------------------`);

//check programm is even or odd

function evenOdd(num) {
    if (num%2==0) {
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`)
    }
}
evenOdd(9)
evenOdd(6)
evenOdd(3)

console.log('------------------------------------------------------');

//largest number check by using if else 
function largestNo(num,num2,num3) {
    if (num>=num2 && num>=num3) {
        console.log(`${num} greater`);
    }
    else if (num2>=num  && num2>=num3) {
        console.log(`${num2} greater`);
    }
    else{
        console.log(`${num3} is greater`);
    }
}
largestNo(-7,-5,-8);

//largest no check by using ternory operator

function check(num1,num2,num3) {
    let result = num1>=num2 || num1>=num3  ?  "-7 greter":"-10 is greter"
    console.log(result);
}
check(-70,-10)

console.log('---------------------------------------------');

//factorial number  

   function check(num) {
    let temp = 1
    for (let index = 1; index <= num; index++) {
       temp = temp * index
    }
       console.log(temp); 
   }
   check(6);
   check(8)
    console.log('------------------------------------------------');

   //multiplication table

   function multiplicationTable(num) {
      for (let index =1; index <=10;index++) {
       let value = num * index
       console.log(`${num} * ${index} = ${value}`);
      }
   }
   multiplicationTable(3)

   console.log('-----------------------------------------------------');
   
// make simple calculator

// function calculatore(num1,num2) {
//     let result = ''
//     let operator = ["+" ,"-","*","/"]
//     if (operator == "+") {
//         result = num1+num2
//     }
//     else if () {
        
//     }
// }
// calculatore(4,2)  

console.log('-------------------------------------------------------------------');

//prime number

function PrimeNumber(num) {
    let count = 0
    for (let index = 1; index <=num; index++) {
        if (num%index == 0 && num>1) {
            count++;
        }   
    }
    if (count == 2) {
        console.log(`${num} is prime number`);
    }
    else{
        console.log(`${num} is  Not prime number`);
    }
    }
 PrimeNumber(11)
 PrimeNumber(10)

 console.log('-------------------------------------------------------');

 console.log('Armstrong Numbers : armstrong numbers means sum of cube of each digit is equal to the number itself ');

//  function armstrongNo(num) {
//     let temp = ''
//     for (let index = 0; index <= num; index++) {
//         temp = temp + num.charAt(index)
//     if ( == num) {
//         return "yes"
//     }
//     else{
//         return "no"
//     }
      
//     }
    
//  }
// let results =  armstrongNo("153")
// console.log(results);
console.log('-----------------------------------------------------------------------');

// sum of all naturals numbers


let sumOfNaturals = (num)=>{
   let count = 0
    for (let index = 1; index <=num; index++) {
      count+=index  
    }
    console.log(count);
}
sumOfNaturals(100)
console.log("---------------------------------------------------------------");

// javascript Programm to check if the numbers having last same digit

function lastSameDigit(a,b,c) {
    if (a%10 && b%10 && c%10 == 8) {
        console.log(`having same last digit`);
    }
    else{ console.log('having not same last digit');
    }
}
lastSameDigit(8,88,58);

console.log('----------------------------------------------------');

//find the factores of numbers

function factoresOfNum(number) {
    for (let index = 1; index <= number; index++) {
        if (number%index == 0) {
             console.log(index);
        }
        
    }
}
 factoresOfNum(12);
 factoresOfNum(120);



 console.log(`''''''''''''''''''''''STRING''''''''''''''''''''''''''`);

 // palindrome string or not

 function palindromString(string) {
    let reverse = ''
    let string2 = string.toLowerCase();
    for (let index = string2.length; index>=0; index--) {
        reverse = reverse+ string2.charAt(index)  
    }
    if (reverse==string2) {
        console.log('yes');
    }
    else{
        console.log("no");
    }
 }
 palindromString("madam")

 console.log('----------------------------------------------------');

 // sort the string alphabetical order

 function alphabetical(string) {
    let string2 = string.toLowerCase();
    let array = string2.split(" ");
    let sortArray = array.sort();
    for (const element of sortArray) {
        console.log(element);
    }
    
 }
 alphabetical("My self Shweta Deshmukh");

 console.log("---------------------------------------------------------------");
 //check the numbers occourences of char in the string

 function numberOccurences(string){
   let count = 0
  for (let index = 0; index < string.length; index++) {
   let char =  string.charAt(index);
   if (char == "a" || char == "A") {
     count++
   }
    
  }
  console.log(count);
 }
 numberOccurences("i am learing javascript");

 console.log('--------------------------------------------------------------------');

 //string first char capital

 function firstcap(string) {
    let temp =''
    let string2 = string.split(" ");
    for (let index = 0; index < string2.length; index++) {
        const element3 = string2[index] + " ";
    
    for (let index = 0; index < element3.length; index++) {
        const element2 = element3.charAt(index); 
    
    if (index==0) {
        temp = temp + element2.toUpperCase()
    }
    else if (index!==0) {
        temp = temp + element2
    }
}
    
} 
console.log(temp);
}
 firstcap("i am learing javascript code");
