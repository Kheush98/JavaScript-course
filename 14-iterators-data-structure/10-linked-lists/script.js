class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._count = 0;
  }

  insertFirst(value) {
    const node = new Node(value);
    node.next = this._head;
    this._head = node;
    this._count++;
  }

  insertLast(value) {
    const node = new Node(value);
    let list = this._head;

    while (list.next) {
      list = list.next;
    }

    list.next = node;
    this._count++;
  }

  insertAt(value, index) {
    if (index > this._length) {
      return;
    }

    if (index === 0) {
      this.insertFirst(value);
      return;
    }

    const newNode = new Node(value);
    let current, previous;
    current = this._head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    previous.next = newNode;
    this._count++;
  }

  getAt(index) {
    let current = this._head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current._value);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  removeAt(index) {
    if (index > this._count) {
      return;
    }

    let current = this._head;
    let previous;
    let count = 0;

    if (index === 0) {
      this._head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this._count--;
  }

  printListData() {
    let current = this._head;
    let list = '';

    while (current) {
      list += current.value + ' ';
      current = current.next;
    }

    return list;
  }
}

const list = new LinkedList();

list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertLast(50);
list.insertAt(566, 2);

console.log(list);
console.log(list.printListData());