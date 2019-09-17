const shoesList = ['Donald', 'Daisy', 'Riri', 'Fifi', 'Loulou'];

const secondShoesList = shoesList.unshift('Picsou');

console.log(shoesList);
console.log(secondShoesList);

const thirdShoesList = shoesList.shift();

console.log(shoesList);
console.log(shoesList.length);

const fourthShoesList = shoesList.push('Raptou');

console.log(shoesList);
console.log(shoesList.length);

const fifthShoesList = shoesList.pop();

console.log(shoesList);
console.log(shoesList.length);

const cutShoesList = shoesList.slice(0, 3);

console.log(cutShoesList);
console.log(cutShoesList.length);

const otherShoesList = ['Mickey', 'Minnie', 'Dingo', 'Pluto', 'Max'];
const finalList = otherShoesList.concat(['Winnie', 'Tigrou', 'Porcinet']);

console.log(otherShoesList);
console.log(finalList);
