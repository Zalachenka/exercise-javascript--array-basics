const ages = ['25', '29', '32', '37'];
function overThirty(age) {
  return age >= 30;
}
function filteredAges() {
  return ages.filter(overThirty); // returns all the ages over 30
}
function findAge() {
  return ages.find(overThirty); // returns the first element in the array over 30
}
