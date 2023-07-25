console.log("------------------------------------Step 1--------------------------------------------");
function squareOfWorldLength(value){ 
    var string = value;
    var result = string.length;
     var word = result*result
    console.log(`The length of word "${value}" and its square is : ${word}`);
    
}
squareOfWorldLength(`JavaScript`);
 squareOfWorldLength("Google Chrome");
 squareOfWorldLength("Developer Smart");
console.log("--------------------------------------step2----------------------------------------------");
  console.log(`Given String : "I am Angular Developer"`);
var developer = function(string){
 var length = string.length;
 console.log(`The length of string is : ${length}`);
 var word = string.split(' ').length;
 console.log(`Total no words in string is : ${word}`);
var num1 = 22;
var num2 = 4;
var result = num1/num2;
 console.log(`String length divided by total no of words : ${result}`);
 var multiple = num1 * num2;
 console.log(`String length multipy by total no of words : ${multiple}`);
 

}
developer("I am Angular Developer")
