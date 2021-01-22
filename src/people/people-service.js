'use strict';

const Queue = require('../helpers/queue');
const { people } = require('../helpers/store');

const peopleInLine = new Queue();

people.forEach((person) => peopleInLine.enqueue(person));

const getTopValue = function() {
  return peopleInLine.displayTop();
};

const enqueue = function(person) {
  return peopleInLine.enqueue(person);
};

const dequeue = function() {
  return peopleInLine.dequeue();
};

module.exports = {
  getTopValue,
  enqueue,
  dequeue,
};