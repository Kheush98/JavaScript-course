class Queue {
  constructor() {
    this._items = [];
    this._count = 0;
    this._front = 0;
  }

  enqueue(item) {
    this._items[this._count] = item;

    if (this.isEmpty()) {
      this._front = item;
    }

    this._count++
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Empty';
    }

    const item = this._front;
    this._front = this._items[1] ?? 0;
    this._count--;

    for (let i = 0; i < this._count - 1; i++) {
      this._items[i] = this._items[i + 1];
    }

    this._items.length = this._count;
    return item;
  }

  isEmpty() {
    return this._count === 0;
  }
}

const queue = new Queue();

queue.enqueue('item 1');
queue.enqueue('item 2');
queue.enqueue('item 3');

console.log(queue);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue('item x');

console.log(queue);
