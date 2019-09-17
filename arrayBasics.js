const shoesList = ["Donald","Daisy","Riri", "Fifi", "Loulou"];

const secondShoesList = shoesList.unshift("Picsou");

console.log(shoesList);
console.log(secondShoesList);

const thirdShoesList = shoesList.shift();

console.log(shoesList);
console.log(thirdShoesList);

const fourthShoeslist = shoesList.push("Raptou");

console.log(shoesList);
console.log(fourthShoeslist);

const fifthShoesList = shoesList.pop();

console.log(shoesList);
console.log(fifthShoesList);

const cutShoesList = shoesList.slice(1,4);

console.log(shoesList);
console.log(cutShoesList);

const otherShoeslist = ["Mickey", "Minnie", "Dingo", "Pluto", "Max"];
const finalList = otherShoeslist.concat(["Winnie", "Tigrou", "Porcinet"]);

console.log(otherShoeslist);
console.log(finalList);