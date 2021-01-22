'use strict';

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new _Node(value);

    this.length++;
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
    return node.value;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    this.length--;
    
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

  displayTop() {
    if (this.first === null) {
      return null;
    }
    return this.first.value;
  }

  displayAll() {
    const values = [];
    let done = false;
    let currentNode = this.first;

    while (done === false) {
      if(currentNode === null) {
        done = true;
        break;
      }
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }
}

module.exports = Queue;