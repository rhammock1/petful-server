'use strict';

const Queue = require('../helpers/queue');
const { people } = require('../helpers/store');

const peopleInLine = new Queue();

people.forEach((person) => peopleInLine.enqueue(person));

const getTopValue = function() {
  return peopleInLine.displayTop();
};
const getAllValue = function() {
  return peopleInLine.displayAll();
}
const enqueue = function(person) {
  return peopleInLine.enqueue(person);
};

const dequeue = function() {
  return peopleInLine.dequeue();
};

module.exports = {
  getTopValue,
  getAllValue,
  enqueue,
  dequeue,
};