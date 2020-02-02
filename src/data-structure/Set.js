export default function Set() {
  // 属性
  this.items = {};
  // 方法
  // add 方法
  Set.prototype.add = function(value) {
    if (this.has(value)) return false;
    this.items[value] = value;
    return true;
  };
  // has 方法
  Set.prototype.has = function(value) {
    return this.items.hasOwnProperty(value);
  };
  // remove 方法
  Set.prototype.remove = function(value) {
    if (!this.has(value)) return false;
    delete this.items[value];
    return true;
  };
  // clear 方法
  Set.prototype.clear = function() {
    this.items = {};
  };
  // size 方法
  Set.prototype.size = function() {
    return Object.keys(this.items).length;
  };
  // 获取集合中所有的值
  Set.prototype.values = function() {
    return Object.keys(this.items);
  };

  // 集合间的操作
  // 并集
  Set.prototype.union = function(otherSet) {
    var unionSet = new Set();

    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };
  // 交集
  Set.prototype.intersection = function(otherSet) {
    var intersection = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      var item = values[i];
      if (otherSet.has(item)) {
        intersection.add(item);
      }
    }
    return intersection;
  };
  // 差集
  Set.prototype.difference = function(otherSet) {
    var difference = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      var item = values[i];
      if (!otherSet.has(item)) {
        difference.add(item);
      }
    }
    return difference;
  };
  // 子集合
  Set.prototype.subset = function(otherSet) {
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      var item = values[i];
      if (!otherSet.has(item)) {
        return false;
      }
    }
    return true;
  };
}

// 测试 Set 类

// 1. 常见 Set 类对象
var set = new Set();

// 2. 添加元素
console.log(set.add("abc"), set.values());
console.log(set.add("abc"), set.values());
console.log(set.add("cba"), set.values());
console.log(set.add("nba"), set.values());
console.log(set.add("mba"), set.values());

// 3. 删除元素
console.log(set.remove("mba"), set.values());
console.log(set.remove("mba"), set.values());

// 4. has 方法
console.log(set.has("nba"), set.values());

// 5. size 方法
console.log(set.size(), set.values());
console.log(set.clear(), set.values());
console.log(set.size(), set.values());

// 集合间操作 新建两个集合
var setA = new Set();
// setA.add('abc')
setA.add("cba");
setA.add("nba");
var setB = new Set();
setB.add("aaa");
setB.add("cba");
setB.add("nba");

// 并集测试
let unionSet = setA.union(setB);
console.log(unionSet.values());

// 交集测试
let intersection = setA.intersection(setB);
console.log(intersection.values());

// 差集测试
let difference = setA.difference(setB);
console.log(difference.values());

// 子集测试

let subset = setA.subset(setB);
console.log(subset);
