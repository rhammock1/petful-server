const Queue = require('../src/helpers/queue');
const { cats, dogs, people } = require('../src/helpers/store');

const testPets = {
  cats: new Queue(),
  dogs: new Queue(),
};

const testPeople = {
  people: new Queue()
}

people.forEach((person) => testPeople.people.enqueue(person));

cats.forEach((cat) => testPets.cats.enqueue(cat));
dogs.forEach((dog) => testPets.dogs.enqueue(dog));

module.exports = { testPeople, testPets };