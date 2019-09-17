const ages = ['25', '29', '32', '37'];
function overThirty(age) {
  return age >= 30;
}
function filteredAges() {
  return ages.filter(overThirty);
}
console.log(filteredAges());
