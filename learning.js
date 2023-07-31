function show(){
    console.log("My name is Shweta Deshmukh");
    console.log("I am From Sangola");
    console.log("i have recentaly Completed My masters in chemistry");
}
show();
var text = 'krishna';
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLocaleUpperCase());
console.log(text.slice(3,7));
console.log(text.replace("a","radhe"));
var num = ' Radha ';
console.log(num.concat(" is the frd of "),text,"they are good frds");
var sen = '     shweta     ';
console.log(num.trim());
console.log(text.replace("deshmukh"));
console.log(text.charAt("2"));
console.log(num.indexOf("d"));
console.log("******************************************************************");
var myFullName;
console.log(myFullName);

var myFullName = "Shweta Deshmukh";
console.log(myFullName);

var myFullName = "Shweta Raosaheb Deshmukh";
console.log(myFullName);

var myLove = "I Love only JS";
console.log(myLove);

var firstName = "Shweta";
console.log(`First Name = ${firstName}`);
var lastName = "Deshmukh";
console.log(`Last Name =${lastName}`);
var age = "23";
console.log(`last Name =${lastName}` );

console.log("******************************************************************");

// Fuction with no argument and no return value======

function myDetails() {
    console.log(`My name is the shweta deshmukh.
     i have completed my master degree`);
    console.log(`I am from solapur`);
}
myDetails();

function show() {
    console.log(`I love JS ` );
}
show();
// Fuction with with argument and no return value======
function personalDetails(firstName,lastName) {
   console.log(`First Name = ${firstName} , Last Name = ${lastName}`);
  var firstName = "Shweta"
  var lastName = "Deshmukh"
  
}
personalDetails(firstName,lastName);

console.log("******************************************************************");

function swapValues(value1,value2) {
    console.log(`Befor Swap : N1 = ${value1}, N2 = ${value2}  `);
    var temp = value1;
    var value1 = value2;
    var value2 = temp;
    console.log(`After Swap : N1 = ${value1}, N2 = ${value2}  `);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("******************************************************************");

function addThreeValues(n1,n2,n3) {
    var result = n1 + n2 + n3;
    console.log(`${result}`);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");
console.log("******************************************************************");

function bankDetails(n1,n2,n3,n4) {
    console.log(`Bank Name : ${n1} , Account No is : ${n2} , State : ${n3} , Pincode ${n4}`);
}
bankDetails('CITI Bank', 3333333333,'Pune',222222);
bankDetails('Axis Bank',222222222222,'Mumbai',33333);

console.log("******************************************************************");

var n1 = 100;
var n2 = 200;
var n3 = 300;
console.log(`Befor Swap : Num1 = ${n1}, Num2 = ${n2}, Num3 = ${n3}`);
var temp = n1;
var n1 = n2;
var n2 = n3;
var n3 = temp;
console.log(`After Swap : Num1 = ${n1}, Num2 = ${n2}, Num3 = ${n3}`);
