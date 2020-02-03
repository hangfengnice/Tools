export default function HashTable() {
  // 属性
  this.storage = [];
  this.count = 0;
  this.limit = 7;

  // 方法
  // 哈希函数
  HashTable.prototype.hashFunc = function(str, size) {
    var hashcode = 0;

    for (var i = 0; i < str.length; i++) {
      hashcode = 37 * hashcode + str.charCodeAt(i);
    }

    var index = hashcode % size;
    return index;
  };
  // 插入&修改操作
  HashTable.prototype.put = function(key, value) {
    var index = this.hashFunc(key, this.limit);

    var bucket = this.storage[index];

    if (bucket == null) {
      bucket = [];
      this.storage[index] = bucket;
    }
    // 修改数据
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] == key) {
        tuple[1] = value;
        return;
      }
    }
    // 进行添加数据
    bucket.push([key, value]);
    this.count += 1;

    // 判断是否需要扩容
    if (this.count > this.limit * 0.75) {
      var newSize = this.limit * 2;
      var newPrime = this.getPrime(newSize);
      this.resize(newPrime);
    }
  };

  // 获取操作
  HashTable.prototype.get = function(key) {
    var index = this.hashFunc(key, this.limit);

    var bucket = this.storage[index];

    if (bucket == null) {
      return null;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] == key) {
        return tuple[1];
      }
    }

    return null;
  };

  // 删除操作
  HashTable.prototype.remove = function(key) {
    var index = this.hashFunc(key, this.limit);

    var bucket = this.storage[index];

    if (bucket == null) {
      return null;
    }

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] == key) {
        bucket.splice(i, 1);
        this.count--;
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          var newSize = Math.floor(this.limit / 2);
          var newPrime = this.getPrime(newSize);
          this.resize(newPrime);
        }
        return tuple[1];
      }
    }

    return null;
  };

  // 其他方法
  // 判断是否为空
  HashTable.prototype.isEmpty = function() {
    return this.count == 0;
  };
  // 元素的个数
  HashTable.prototype.size = function() {
    return this.count;
  };

  // 哈希表扩容
  HashTable.prototype.resize = function(newLimit) {
    var oldStorage = this.storage;

    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    for (var i = 0; i < oldStorage; i++) {
      var bucket = oldStorage[0];
      if (bucket == null) {
        continue;
      }

      for (var j = 0; j < bucket.length; j++) {
        var tuple = bucket[j];
        this.put(tuple[0], tuple[1]);
      }
    }
  };

  // 是否是质数
  HashTable.prototype.isPrime = function(num) {
    let temp = Math.ceil(Math.sqrt(num));
    for (var i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };
}

// 获取质数的方法
HashTable.prototype.getPrime = function(num) {
  while (!this.isPrime(num)) {
    num++;
  }
  return num;
};

// 测试哈希表
// 1. 创建哈希表
var ht = new HashTable();

// 2. 插入数据
ht.put("abc", "123");
ht.put("cba", "321");
ht.put("nba", "521");
ht.put("mba", "520");

// 3. 获取数据
console.log(ht.get("abc"));

// 4. 修改数据
ht.put("abc", "111");
console.log(ht.get("abc"));

// 5. 删除数据
ht.remove("abc");
console.log(ht.get("abc"));
