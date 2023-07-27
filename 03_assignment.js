var num1 = 0 =='';
console.log(`1] ${num1}`);
console.log(`(space is coverted into number and the result is true)`);

var num2 = 0 == '0';
console.log(`2] ${num2}`);
console.log(`(0 is coverted into string and the result is true)`);

var num3 = 0 == false;
console.log(`3] ${num3}`);
console.log(`(false get coverted into number(0) so the result id true)`);

var num4 = null == undefined;
console.log(`4] ${num4}`);
console.log(`(Result is true because both having different types)`);

var num4 = 1 == [1];
console.log(`5] ${num4}`);
console.log(`(result is true ,both having same type that is number)`);

var num5 = 1 == true;
console.log(`6] ${num5}`);
console.log(`(True get converted into number(1) ,result is true)`);

var num6 = 1 == '1';
console.log(`7] ${num6}`);
console.log(`(string'1' get converted into number result is true)`);