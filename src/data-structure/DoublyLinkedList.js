export default function DoublyLinkedList() {
  // 内部类： 节点类
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
  //  属性
  this.head = null;
  this.tail = null;
  this.length = 0;

  // 1. 追加方法
  DoublyLinkedList.prototype.append = function(data) {
    // 1. 创建新节点
    var newNode = new Node(data);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  };
  // 2. 将链表转成字符串形式
  // 2.1 toString 方法
  DoublyLinkedList.prototype.toString = function() {
    return this.backwardString();
  };
  // 2.2 forwardString 方法
  DoublyLinkedList.prototype.forwardString = function() {
    var current = this.tail;
    var resultString = "";
    while (current) {
      resultString += current.data + " ";
      current = current.prev;
    }
    return resultString;
  };
  // 2.3 backwardString 方法
  DoublyLinkedList.prototype.backwardString = function() {
    var current = this.head;
    var resultString = "";
    while (current) {
      resultString += current.data + " ";
      current = current.next;
    }
    return resultString;
  };
  // 3. insert 方法
  DoublyLinkedList.prototype.insert = function(position, data) {
    // 1. 边界判断
    if (position < 0 || position > this.length) return false;
    // 2. 根据data创建新的节点
    var newNode = new Node(data);
    // 3. 判断原来的列表是否为空
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (position == 0) {
        // 3.1 判断 position 是否为 0
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      } else if (position == this.length) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        var current = this.head;
        var index = 0;
        while (index++ < position) {
          current = current.next;
        }
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
      }
    }
    this.length += 1;
    return true;
  };
  // 4. get 方法
  DoublyLinkedList.prototype.get = function(position) {
    if (position < 0 || position >= this.length) return null;

    var current = this.head;
    var index = 0;

    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  };
  // 5. indexOf 方法
  DoublyLinkedList.prototype.indexOf = function(data) {
    var current = this.head;
    var index = 0;
    while (current) {
      if (current.data == data) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  };
  // 6. update 方法
  DoublyLinkedList.prototype.update = function(position, newData) {
    if (position < 0 || position >= this.length) return false;
    var current = this.head;

    var index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.data = newData;
    return true;
  };
  // 7. removeAt 方法
  DoublyLinkedList.prototype.removeAt = function(position) {
    if (position < 0 || position >= this.length) return null;
    var current = this.head;
    if (this.length == 1) {
      this.head == null;
      this.tail == null;
    } else {
      if (position == 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position == this.length - 1) {
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        var index = 0;
        while (index++ < position) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    this.length -= 1;
    return current.data;
  };
  // 8. remove 方法
  DoublyLinkedList.prototype.remove = function(data) {
    var index = this.indexOf(data);
    return this.removeAt(index);
  };
  DoublyLinkedList.prototype.isEmpty = function() {
    return this.length == 0;
  };
  DoublyLinkedList.prototype.size = function() {
    return this.length;
  };
}

// 测试代码

var list = new DoublyLinkedList();
// 测试 append
list.append("abc");
list.append("cba");
list.append("nba");
// 测试转成字符串方法
console.log(list);
console.log(list.backwardString());
console.log(list.forwardString());
// 测试 insert 方法
console.log(list.insert(0, "aaa"), list.backwardString(), "insert");
console.log(list.insert(4, "bbb"), list.backwardString(), "insert");
console.log(list.insert(2, "ccc"), list.backwardString(), "insert");
// 测试 get 方法
console.log(list.get(0), "get");
console.log(list.get(2), "get");
console.log(list.get(5), "get");
// 测试 indexOf 方法
console.log(list.indexOf("aaa", "indexOf"));
console.log(list.indexOf("abc", "indexOf"));
console.log(list.indexOf("nba", "indexOf"));
// 测试 update 方法
console.log(list.update(0, "mmm"), list.backwardString(), "update");
console.log(list.update(1, "nnn"), list.backwardString(), "update");
// 测试 removeAt 方法
console.log(list.removeAt(1), " removeAt----", list.backwardString());
console.log(list.removeAt(0), " removeAt----", list.backwardString());
// 测试 remove 方法
console.log(list.remove("cba"), " remove----", list.backwardString());
console.log(list.remove("nba"), " remove----", list.backwardString());
// 测试 isEmpty && size
console.log(list.isEmpty(), " isEmpty---");
console.log(list.size(), " size---");
