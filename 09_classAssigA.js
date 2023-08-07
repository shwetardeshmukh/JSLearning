 class Vehical {
    constructor(model,names,prize,fuelType,engine){
        this.model = model;
        this.names = names;
        this.prize = prize;
        this.fuelType =fuelType;
        this.engine = engine;
        
    }

 }
 let return1 = new Vehical("BMW","BMW M340i","82.25 lacks","Petrol","2998 cc");
 let return2 = new Vehical("Rolls-Royce Phantom","Rolls_Royce","8.99-10.48","Petrol","6749 cc");
 let return3 = new Vehical("Hyundai","Hyundain Exter","7.10-12.04Lacks","petrol & CNg","1195 cc");
 let return4 = new Vehical("Toyota","Toyota Vellfire","1.20 Crore","Hybrid","2487 cc");
 let return5 = new Vehical("Maruti","Maruti Invicto","28.42 Lacks","Hybrid","1987 cc");
 const arrayOfVehicals = [return1,return2,return3,return4,return5];
 for (const  Vehical of arrayOfVehicals) {
   
    console.log(`The Vehical Model is ${Vehical.model},& Name is ${Vehical.names},prize is ${Vehical.prize},Fuel Type is the ${Vehical.fuelType},Engine is the ${Vehical.engine} `);
 }

 console.log("--------------------------------------------------------------------------------------------------------------------------------------------------");
class College {

    constructor(clgName,university,established,address,founderBy){
        this.clgName =clgName;
        this.university = university;
        this.established = established;
        this.address = address;
        this.founderBy = founderBy
       
    }
    display(){
        console.log(`The Collage Name is ${this.clgName},University is ${this.university},Established in ${this.established},Address is ${this.address},Founder Name${this.founderBy}`);
    }
    
};
let result1 = new College("SP Collage","Savitrybai Phule university","1916","Sadashiv Peth","Parshurambhau Patwardhan");
result1.display();
let result2 = new College("Poona Collage","Savitrybai University","1821","Deccan Collage Road","Mountstuart Elphinstone");
result2.display();
let result3 = new College("Shri Ram Collage", "SNDT Mumbai University","2010","Malshiras Road","Shrilekha Patil");
result3.display();
let result4 = new College("Sinhgad Institude of Technology", "SavitryBai phule university","2004","Lonavala","M N Navale")
result4.display();
console.log("------------------------------------------------------------------------------------------------------------------------------------------------------");
transversObject = function (objectName) {
    for (const key in objectName) {
        if (objectName.hasOwnProperty.call(objectName, key)) {
            const element = objectName[key];
            console.log(`${key} : ${element}`);
        }
    }
}
transversObject(result1);
console.log('--------------------------------------------------------');
transversObject(result2);
console.log('--------------------------------------------------------');
transversObject(result3);
console.log('--------------------------------------------------------');
transversObject(result4);
console.log('--------------------------------------------------------');
