//count the totale numbers of vowel including small and capital vowels for using while loop
function vowelCount(str){
    let count = 0;
     let index = 0;
    while (index < str.length) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
        index++;
    }
    
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good IT Developer");

console.log('-------------------------------------------------------------------------------------');
//WAF to get the sum of cube of numbers from 1 to 5
function sumOfCube() {
   let i = 1;
   let sum = 0;
   while (i<=5) {
    sum = sum+i*i*i;
    i++;
   } 
   console.log(`Sum of cube of numbers from 1 to 5 is : ${sum}`);
}
sumOfCube();
console.log('-------------------------------------------------------------------------------------');
//log on console odd positionChars on console & ignore spaces
function oddPositionChar(string) {
    var string2= string.replaceAll(" ","");  
    
// let index=1;
// while(index<string2.length-1){
// var char = string2.charAt(index);
// console.log(char);

var temp="";
for(let index=0; index<=string2.length-1 ;index++){
    
    if(index%2==1){
    temp=temp+" "+string2.charAt(index);
    }
    }
    console.log(` Odd char. from the given string is : ${temp}`);
  }
oddPositionChar('Hard work always pays back');
oddPositionChar('Soon i will be Angular IT Champ');