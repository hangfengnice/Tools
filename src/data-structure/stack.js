// class Stack {
//   constructor () {
//     this.items = []
//   }
//   push (element) {
//     this.items.push(element)
//   }
//   pop (element) {
//     return this.items.pop()
//   }
//   peek() {
//     return this.items[this.items.length - 1]
//   }
//   isEmpty() {
//     return this.items.length === 0
//   }
//   size() {
//     return this.items.length
//   }
//   clear() {
//     this.items = []
//   }
// }

class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  push (element) {
    this.items[this.count] = element
    this.count ++
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.count === 0
  }
  pop () {
    if (this.isEmpty()) {
      return
    }
    this.count --
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return
    }
    return this.items[this.count - 1]
  }
  clear() {
    this.items = {}
    this.count = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i ++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

// const stack = new Stack()
// console.log(Object.getOwnPropertyNames(stack));
// console.log(Object.keys(stack));
// console.log(stack.items);

// function decimalTobinary(decNumber) {
//   const remStack = new Stack()
//   let number = decNumber
//   let rem
//   let binaryString = ''

//   while(number > 0) {
//     rem = Math.floor(number % 2)
//     remStack.push(rem)
//     number = Math.floor(number / 2)
//   }
//   while(!remStack.isEmpty()) {
//     binaryString += remStack.pop().toString()
//   }
//   return binaryString
// }

// console.log('helo');
// console.log(decimalTobinary(233));
