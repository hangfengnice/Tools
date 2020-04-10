class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  enqueue(element) {
    this.items[this.count] = element
    this.count ++
  }
  dequeue() {
    if (this.isEmpty()) {
      return
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount ++
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return
    }
    return this.items[this.lowestCount]
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  size() {
    return this.count - this.lowestCount
  }
  clean() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i ++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

// const queue = new Queue()
// console.log(queue.isEmpty());
// queue.enqueue('john')
// queue.enqueue('jack')
// console.log(queue.toString());

// queue.enqueue('camila')

// console.log(queue.toString());
// console.log(queue.size());
// console.log(queue.dequeue());
