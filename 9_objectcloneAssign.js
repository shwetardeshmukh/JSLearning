const arrayNums =[20,3,4,56,90,400,49];
const constCloneArray = arrayNums;
constCloneArray.push(55,66); 
console.log(constCloneArray);

console.log(`----------------------------------------------------------------------------`);

const deepCloneArray = [...arrayNums];
deepCloneArray.push(10,25);
console.log(deepCloneArray);

console.log(`----------------------------------------------------------------------------`);

const arrayEven = [2,30,14,8];
const mergArray = [...arrayNums , ...arrayEven];
console.log(mergArray);

console.log(`----------------------------------------------------------------------------`);

const employeeInfo = {
    emp_id : 27,
    emp_name : "Jone Doe",
    salary : {
        july_month : "40,000)INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR",
    },
    address : {
        locality : {
            colony : "Om Vrindavan Society",
            street : "Kanch Pokli , 431202",

        },
        city : 'mumbai',
        state : "Maharastra",
        country : "India",      
    },
    mobiles : ["+91 8600 3456 88 , 1800- 4567 32 , +91-9096 5678 77"],

}
let personInfo = JSON.parse(JSON.stringify(employeeInfo));
personInfo.salary.july_month =" 80k";
console.log(`the person salary is ${personInfo.salary.july_month}`);
personInfo.country = "United Kingdom";
console.log(`The person country is ${personInfo.country}`);
console.table(personInfo);
console.log(`--------------------------------------------------------------------------------------------------------`);

console.table(employeeInfo);
console.log(`--------------------------------------------------------------------------------------------------------`);

console.log(`Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7`);

var FactorialFunction =function(num) {
    let number = 1;
    for (let index = 1; index <= num; index++) {
       number = number * index; 
        
    }
    console.log(`The Factorial of ${num} is ${number}`);
}
FactorialFunction(5);
FactorialFunction(9);
FactorialFunction(11);
FactorialFunction(7);





