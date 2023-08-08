const personalDetailss = {
   namee : "Shweta Deshmukh",
   age : 22,
   mobileNo : 12345678,
   emailId : "abc@gmail.com",
   address :" Sangola",
}

const collageDetails = {
    clgName: "shri ram collage",
    university : "SNDT  University",
    established : 2010,
    addresss : "Malshiras Road",
    website : "shriRamcollage.com"
} 
let result = Object.assign({} , personalDetailss,collageDetails);
console.log(`My Name is ${personalDetailss.namee}. I am ${personalDetailss.age} yrs old my mobile no is ${personalDetailss.mobileNo} & having email ID is ${personalDetailss.emailId}. Basicaly i am from ${personalDetailss.address}.
I have completed my Masters degree in ${collageDetails.clgName} under ${collageDetails.university} .The collage is established in ${collageDetails.established} & situated on the ${collageDetails.addresss}. Collage Website is the ${collageDetails.website}`);
 
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");

let frdsName = ["Jyoti","Arti","Shweta","Pratik","Ashwini","Atul","Aniket","Sneha"];
(Object.freeze(frdsName)); 


for (const elelment of frdsName ) {
    console.log(elelment);
}
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");

function reverseString(strings) {
  const array = strings.split(" ");
   var string = array[1];
  var reverse = "";
  for (let index = string.length-1; index >=0 ; index--) {
    var char = string.charAt(index);
    reverse = reverse+char;
  }
      console.log(` ${reverse}`);
}
reverseString("Codemind Technology");