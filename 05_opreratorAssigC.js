 var interviewTcs = function(gradScore,hscScore,sscScore,candidateName){
  var result =(gradScore  >= 70)||(hscScore >= 80)||(sscScore >= 90) ? `you are eligible`:"Unfortunately you are not eligible";
   console.log( `${candidateName} ${result} for TCS interview `);  
   return result; 
 }
interviewTcs(80,86,90,"Shweta");
interviewTcs (70,65,55,"Renuka");
interviewTcs(60,79,88,"Arti");


console.log("---------------------------------------------------------------------------");

