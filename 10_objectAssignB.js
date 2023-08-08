const bankSbi = {
    bankName : "SBI",
   accountNo : "234567890287",
   ifsc : "SBIN0005459",
   interestRate :" 9 , 8 ",
}

const bankLocation = {
    street : "Wakad Road",
    city : "Pune",
    pinCode : "410038",

}
let bankClone = Object.assign({} , bankSbi , bankLocation);
console.log(`Bank Name : ${bankSbi.bankName} , Account Number : ${bankSbi.accountNo} , IFSC Code : ${bankSbi.ifsc}, InterestRatemis : ${bankSbi.interestRate}
Bank Located at ${bankLocation.street} , City : ${bankLocation.city} , Pincode : ${bankLocation.pinCode}`);

console.log("----------------------------------------------------------------------------------------------------");

let bankSbii = {
    bankName : "SBI",
   accountNo : "234567890287",
   ifsc : "SBIN0005459",
   interestRate :" 9 , 8 ",
}

let bankLocations = {
    street : "Wakad Road",
    city : "Pune",
    pinCode : "410038",

}
let result = {...bankSbii,...bankLocations};
console.log(result);

console.log("----------------------------------------------------------------------------------------------------");


const rateOfInterest = {
    homeLoanInterest :"9.25% to 9.75 p.a.",
    personalLoanInterest : "11.5% p.a. onwords" ,
    dueInterest : "11.00% to 14.00% p.a.",

}

let sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(`Bank Name : ${bankSbi.bankName} , Account Number : ${bankSbi.accountNo} , IFSC Code : ${bankSbi.ifsc}, InterestRatemis : ${bankSbi.interestRate}
Bank Located at ${bankLocation.street} , City : ${bankLocation.city} , Pincode : ${bankLocation.pinCode} ,
Home Loan Interest : ${rateOfInterest.homeLoanInterest} , Personal Loan Interest : ${rateOfInterest.personalLoanInterest},DueInterest : ${rateOfInterest.dueInterest}`);

console.log("-----------------------------------------------------------------------------------------------------------");

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key} : ${element}`);
        
    }
}