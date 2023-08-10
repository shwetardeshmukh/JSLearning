
let EmpolyeeInfo = `{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev", "DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street" : "32, Laham St.",
        "city" : "Innsbruck",
        "country" : "Austria"
    },
    "referred-by" : "E0012"
}`;
let persoInfo = JSON.parse(EmpolyeeInfo);
console.log(persoInfo);

console.log(`-----------------------------------------------------------------------------------`);
const arrays = persoInfo.role;
for (const role of arrays ) {

    if (role=="Dev") {
        console.log(`Role is : ${role}`);
    }
}
console.log('-----------------------------------------------------------------------------------');

var string = persoInfo.name;
var array = string.split(" ");
console.log(`The last Name of employee is ${array[1]}`);

console.log("------------------------------------------------------------------------------------");

let date = persoInfo.doj;
let date2 = date.substring(6,10);
console.log(`Joining year of employee is the ${date2}`);
