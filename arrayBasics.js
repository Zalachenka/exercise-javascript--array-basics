const shoesList = ["Donald","Daisy","Riri", "Fifi", "Loulou"];

const secondShoesList = shoesList.unshift("Picsou");

console.log(shoesList);
console.log(secondShoesList);

const thirdShoesList = shoesList.shift();

console.log(shoesList);
console.log(thirdShoesList);

const fourthShoesList = shoesList.push("Raptou");

console.log(shoesList);
console.log(fourthShoesList);

const fifthShoesList = shoesList.pop();

console.log(shoesList);
console.log(fifthShoesList);

const cutShoesList = shoesList.slice(1,4);

console.log(shoesList);
console.log(cutShoesList);

const otherShoesList = ["Mickey", "Minnie", "Dingo", "Pluto", "Max"];
const finalList = otherShoesList.concat(["Winnie", "Tigrou", "Porcinet"]);

console.log(otherShoesList);
console.log(finalList);