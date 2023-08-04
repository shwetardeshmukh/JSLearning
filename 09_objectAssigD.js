const professor = {
  name: "pratik Damakle",
  Age: "35",
  state: "Maharastra",
  Address: "Nagas road",
  pincode: "417654",
  degree: {
    engineering: "CSC",
    Phd: "ADv Compurting",
    masters: "MCA",
  },
  certificates: [
    "hacker Rank",
    "participation",
    "certificates in IFE Course",
    "Certificate in Adv Programing",
  ],
     
  teachersDegree: function () {
  let string = Object.values(this.degree);
    return string;
  },
};
console.table(professor);
console.log(professor.degree);
console.log(professor.certificates);
var string2 = professor.teachersDegree();
 console.log(`All Degree's are : ${string2}`);
professor.totalExperieance = "14 ";
console.table(professor);
professor.certificates.push("oracle certificates");
console.log(professor.certificates);
let update = professor.state ="Nagpur";
console.table(professor);
console.log(` The last element is '${professor.certificates.pop()}'`);

