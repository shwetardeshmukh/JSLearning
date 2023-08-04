
    
const sbiBank = {
   bankName : "SBI",
   location : "Wakad Road",
   accountNo : "234567890287",
   ifsc : "SBIN0005459",
   interestRate :" 9 , 8 ",
  
   showDetails : function(){
console.log(`Bank Name : ${this.bankName}, Location is : ${this.location}, Account No : ${this.accountNo}, IFSC code : ${this.ifsc}, Intrest reating : ${this.interestRate}`);
   }
 
}
sbiBank.showDetails();

const axisBank = {
    bankName : "Axis Bank",
   location : "Sahyadri Road",
   accountNo : "76443789078",
   ifsc : "UTIB0005459",
   interestRate :" 6,7",
   showDetails : function(){
    console.log(`Bank Name : ${this.bankName}, Location is : ${this.location}, Account No : ${this.accountNo}, IFSC code : ${this.ifsc}, Intrest reating : ${this.interestRate}`);
   
   }
}
axisBank.showDetails();

const hdfcBank = {
    bankName  : "HDFC bank",
    location  : "Main Road",
    accountNo  : "98765432387",
    ifsc : "HDFC0005459",
   interestRate :" 8,7",
   showDetails : function(){
    console.log(`Bank Name : ${this.bankName}, Location is : ${this.location}, Account No : ${this.accountNo}, IFSC code : ${this.ifsc}, Intrest reating : ${this.interestRate}`);
   }

}
hdfcBank.showDetails();

const yesBank = {
    bankName  : "HDFC bank",
    location  : "charoli Road",
    accountNo  : "348765432387",
    ifsc : "YESB0005459",
   interestRate : "5,6",
   showDetails : function(){
    console.log(`Bank Name : ${this.bankName}, Location is : ${this.location}, Account No : ${this.accountNo}, IFSC code : ${this.ifsc}, Intrest reating : ${this.interestRate}`);
   }

}
yesBank.showDetails();


