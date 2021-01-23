'use strict';

const Queue = require('../helpers/queue');
const { cats, dogs } = require('../helpers/store');

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

cats.forEach((cat) => pets.cats.enqueue(cat));
dogs.forEach((dog) => pets.dogs.enqueue(dog));

const getTopValue = function() {
  return {
    cat: pets.cats.displayTop(),
    dog: pets.dogs.displayTop()
  }
};

const dequeue = function(type) {
  return pets[`${type}`].dequeue();
};

const enqueue = function(type, value) {
  console.log(type, value);
  return pets[`${type}`].enqueue(value);
}

module.exports = { getTopValue, dequeue, enqueue };