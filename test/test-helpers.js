const Queue = require('../src/helpers/queue');
const { cats, dogs } = require('../src/helpers/store');

const testPets = {
  cats: new Queue(),
  dogs: new Queue(),
};

cats.forEach((cat) => testPets.cats.enqueue(cat));
dogs.forEach((dog) => testPets.dogs.enqueue(dog));

module.exports = testPets;