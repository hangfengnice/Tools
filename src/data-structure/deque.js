class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  addFront (element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount --
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i --) {
        this.items[i] = this.items[i - 1]
      }
      this.count ++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  addBack(element) {
    this.items[this.count] = element
    this.count ++
  }
  removeFront() {
    if (this.isEmpty()) {
      return
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount ++
    return result
  }
  removeBack () {
    if (this.isEmpty()) {
      return
    }
    this.count --
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peekFront() {
    if (this.isEmpty()) {
      return
    }
    return this.items[this.lowestCount]
  }
  peekBack() {
    if (this.isEmpty()) {
      return
    }
    return this.items[this.count - 1]
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

// const deque = new Deque()
// console.log(deque.isEmpty());
// deque.addBack('john')
// deque.addBack('Jack')
// console.log(deque.toString());
// deque.addBack('Camila')
// console.log(deque.toString());
// console.log(deque.size());
// console.log(deque.isEmpty());
// deque.removeFront()
// console.log(deque.toString());
// deque.addFront('john')
// console.log(deque.toString());
// console.log(deque.size());

function hotPotato(elementsList, num) {
  const queue = new Queue()
  const elimitatedList = []
  for (let i = 0; i < elementsList.length; i ++) {
    queue.enqueue(elementsList[i])
  }
  while(queue.size() > 1) {
    for (let i = 0; i < num; i ++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }
  return {
    elimated: elimitatedList,
    winner: queue.dequeue()
  }
}

const names = ['John', 'Jack', 'Camila', "Ingraid", 'car']
const result = hotPotato(names, 7)
console.log(result.winner);
