function maleMarriageEligibility(gender,age,boyName) {
 var result = (gender == 'Male')  &&  (age >= 21 )? ` eligible `:`not eligible`;
 console.log(`${boyName} you are ${result} for Marriage`);
return result;
}
maleMarriageEligibility("Male",25,"Billagates");7
maleMarriageEligibility("Male",17,"Stev Jobs");

console.log("------------------------------------------------------------------------------");
function femaleMarriageEligibility(gender,age,girlName) {
    var female = "Female";
    var result =( gender == female ) &&  (age >= 18) ? ` eligible `:`not eligible`;
    console.log(`${girlName} you are ${result} for Marriage`);
    return result;
   }
   femaleMarriageEligibility("Female",16,"Jenifer");
   femaleMarriageEligibility("Female",27 ,"Malinda Gates");
   