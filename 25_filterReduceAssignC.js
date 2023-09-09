
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary= emp_salary;
    this.emp_company =emp_company;

    }

    }
 const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro"); 
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro"); 
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee (99, "Mahesh", "HR",85000,"Infy");

const arrayEmps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log("-----------employee from wipro company----------------------------");
const wiproEmployee = arrayEmps.filter((employee)=>{
 return employee.emp_company == "Wipro"
});
 for (const element of wiproEmployee) {
    console.log(element);
 };

 console.log("-----------employee from IT , HR department----------------------------");
 const empwiproIT = arrayEmps.filter((employee)=>{
   return  employee.emp_dept == "IT" || employee.emp_dept == "HR"
 })
 for (const element of empwiproIT) {
    console.log(element);
 };

 console.log("-----------employee whose ID greater than 50----------------------------");
 const employeeID = arrayEmps.filter((employee)=>{
   return employee.emp_id > 50
 });
 for (const emailId of employeeID) {
    console.log(emailId);
 };

 console.log(`-----------employee whose name starts with "A","V","M" letters----------------------------`);

const employeeName=  arrayEmps.filter((employee)=>{
  return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M");
 });
 for (const element of employeeName) {
    console.log(element);
 };

 console.log(`-----------Average salary of all employee----------------------------------------------------`);


 const empSalary = arrayEmps.reduce((runningTotal,element)=>{
return runningTotal + element.emp_salary  ;
 },0);
 console.log(empSalary/arrayEmps.length);
 
 console.log(`-----------Average salary of employee from IT dept---------------------------------------------`);

 const empITDept = arrayEmps.filter((employee)=>{
    return employee.emp_dept == "IT";
 });
  const sumSalary = empITDept.reduce((runningTotal,element)=>{
 return runningTotal + element.emp_salary;
  },0);
  console.log(sumSalary/empITDept.length);