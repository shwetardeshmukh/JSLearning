const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);
console.log(`-----------------------------------------`);

let fruit1 = arrayFruits[0];
console.log(fruit1);
console.log(`-----------------------------------------`);

let fruit2 = arrayFruits[arrayFruits.length - 1];
console.log(fruit2);
console.log(`-----------------------------------------`);

arrayFruits.unshift("Papaya");
console.log(arrayFruits);

let fruit4 = arrayFruits.splice(4, 1);
console.log(arrayFruits);

arrayFruits.push("pineapple");
console.log(arrayFruits);

arrayFruits.splice(5, 0, "Dragen Fruit");
console.log(arrayFruits);

arrayFruits.splice(2, 1, "kiwi");
console.log(arrayFruits);
console.log(`-----------------------------------------`);

for (let index = 1; index < arrayFruits.length; index++) {
  if (index <= 4) {
    const element = arrayFruits[index];

    console.log(element);
  }
}
console.log(`-----------------------------------------`);
for (let index = arrayFruits.length - 4; index < arrayFruits.length; index++) {
  if (index <= 6) {
    const element = arrayFruits[index];
    console.log(element);
  }
}
