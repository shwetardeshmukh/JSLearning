console.log("--------------------Implicity Conversion to String-------------------------------------------- ");
var num1 = '3'+ 2 ;
var result = num1;
console.log( `1] ${result}`);
console.log(`( JS sees '+' operetor as a string concatetion operation and produces 32 ) `);

var num2 = '3'+ true;
var result2 = num2;
console.log(`2] ${result2}`);
console.log(`(boolean types of 'true' get implicitly convertred into string and '+' opareter concatenate values )`);

var num3 = '3'+ undefined;
console.log(`3]${num3}`);
console.log(`(undefined is implicitly converted into string and concatenate with string value) `);

var num4 = '3'+ null;
console.log(`3]${num4}`);
console.log(`(null is implicitly converted and concatenated into the string)`);
console.log("--------------------Implicity boolean Conversion to Number-------------------------------------------- ");
var num1 = '4'- true;
console.log(`1] ${num1}`);
console.log(`(Boolean value 'true' is converted into number & has value 1") `);

var num2 = 4+ true;
console.log(`2] ${num2}`);
console.log(`(Boolean value 'true' is converted into number & has value 1) `);

var num3 = 4+ false;
console.log(`3] ${num3}`);
console.log(`(Boolean value 'false' is converted into number & has value 0) `);

console.log("--------------------Implicity string Conversion to Number-------------------------------------------- ");

var num1 = '4' - '2';
console.log(`1] ${ num1}`);
console.log(`converted into number ,you cannot perform subtraction on string`);
var num2 = '4' - 2;
console.log(`2] ${ num2}`);
console.log(` (string '4' is converted into number )`);

var num3 = '4' * 2;
console.log(`3] ${num3}`);
console.log(` ( '4' is converted into number ,can't perform multiplication on string)`);

var num4 = '4' / 2;
console.log(`4] ${num4}`); 
console.log(` ( '4' string is converted into number ,divison can't perform on string)`);


