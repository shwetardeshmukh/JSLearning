//Reverse the string and ignore the spaces
function reverseString(string) {
let string2= string.replaceAll(" ","");
var temp=" ";
for( let index=string2.length-1;index>=0; index--){
let char= string2.charAt(index);
temp=temp+string2.charAt(index);

}
console.log(` The reverse of  given string is : ${temp}`);
}
reverseString('Hard work always pays back');
reverseString('Soon i will be Angular IT Champ'); 
console.log('===============================================================================');