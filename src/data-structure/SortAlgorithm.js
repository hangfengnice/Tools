function ArrayList() {
  // 属性
  this.array = []

  // 方法
  ArrayList.prototype.insert = function (item) {
    this.array.push(item)
  }

  ArrayList.prototype.toString = function () {
    return this.array.join('-')
  }

  // 交换位置
  ArrayList.prototype.swap = function (m, n) {
    var temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
  }

  // 交换排序
  ArrayList.prototype.bubblesort = function () {
    var length = this.array.length
    for (var j = length - 1; j >= 1; j --){
      for (var i = 0; i < j; i ++) {
        if (this.array[i] > this.array[i + 1]) {
          this.swap(i, i + 1)
        }
      }
    }
  }
  
  // 选择排序
  ArrayList.prototype.selectSort = function () {
    var length = this.array.length
    for (var j = 0; j< length -1; j ++) {
      var min = j
      for (var i = min + 1; i < length; i ++) {
        if (this.array[min] > this.array[i]) {
          min = i
        }
      }
      this.swap(min, j)
    }
  }

  // 插入排序
  ArrayList.prototype.insertionSort = function () {
    var length = this.array.length

    for (var i = 1; i < length; i ++) {
      var temp = this.array[i]
      var j = i
      while(this.array[j -1] > temp && j > 0) {
        this.array[j] = this.array[j -1]
        j --
      }
      this.array[j] = temp
    }
  }

  ArrayList.prototype.shellSort = function () {
    var length = this.array.length
    var gap = Math.floor(length / 2)

    while(gap >= 1) {
      for (var i = gap; i < length; i ++) {
        var temp = this.array[i]
        var j= i
        while (this.array[j - gap] > temp && j > gap - 1) {
          this.array[j] = this.array[j - gap]
          j -= gap
        }
        this.array[j] = temp
      }
      gap = Math.floor(gap / 2)
    }
  }
}

// 测试类

var list = new ArrayList()

// 插入元素
list.insert(66)
list.insert(88)
list.insert(12)
list.insert(87)
list.insert(100)
list.insert(5)
list.insert(566)
list.insert(23)
console.log(list.toString());

// 测试冒泡排序
// list.bubblesort()
// console.log(list.toString());

// 测试选择排序
// list.selectSort()
// console.log(list.toString());

// 测试希尔排序
console.log(list.shellSort(), list.toString());


