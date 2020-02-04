function BinarySearchTree() {
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  // 属性
  this.root = null;

  // 方法
  // 插入数据
  BinarySearchTree.prototype.insert = function(key) {
    var newNode = new Node(key);

    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  };
  BinarySearchTree.prototype.insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      // 向左查找
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };

  // 树的遍历
  // 1. 先序遍历
  BinarySearchTree.prototype.preorderTraversal = function(handler) {
    this.preorderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.preorderTraversalNode = function(node, handler) {
    if (node != null) {
      handler(node.key);
      this.preorderTraversalNode(node.left, handler);
      this.preorderTraversalNode(node.right, handler);
    }
  };
  // 2. 中序遍历
  BinarySearchTree.prototype.inorderTraversal = function(handler) {
    this.inorderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.inorderTraversalNode = function(node, handler) {
    if (node != null) {
      this.inorderTraversalNode(node.left, handler);
      handler(node.key);
      this.inorderTraversalNode(node.right, handler);
    }
  };
  // 3. 后序遍历
  BinarySearchTree.prototype.postorderTraversal = function(handler) {
    this.postorderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.postorderTraversalNode = function(node, handler) {
    if (node != null) {
      this.postorderTraversalNode(node.left, handler);
      this.postorderTraversalNode(node.right, handler);
      handler(node.key);
    }
  };
  // 4. 层序遍历
  BinarySearchTree.prototype.levelorderTraversal = function(handler) {
    let que = [],
      newque = [];
    if (this.root !== null) {
      que.push(this.root);
    } else {
      return [0];
    }
    do {
      que.forEach(function(item) {
        handler(item.key);
      });
      while (que.length != 0) {
        let node = que.shift();
        if (node.left !== null) {
          newque.push(node.left);
        }
        if (node.right !== null) {
          newque.push(node.right);
        }
      }
      let temp = newque;
      newque = que;
      que = temp;
    } while (que.length != 0);
  };

  // 寻找最值
  BinarySearchTree.prototype.max = function() {
    var node = this.root;
    while (node.right != null) {
      node = node.right;
    }
    return node.key;
  };
  BinarySearchTree.prototype.min = function() {
    var node = this.root;
    while (node.left != null) {
      node = node.left;
    }
    return node.key;
  };

  // 搜索某一个 key
  BinarySearchTree.prototype.search = function(key) {
    var node = this.root;
    while (node != null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.right) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;
  };

  // 删除节点
  BinarySearchTree.prototype.remove = function(key) {
    var current = this.root;
    var parent = null;
    var isLeftChild = true;

    while (current.key != key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }

      if (current == null) return false;
    }

    // 1 没有子节点
    if (current.left == null && current.right == null) {
      if (current == this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    // 2 一个子节点
    else if (current.right == null) {
      if ((current = this.root)) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if (current.left == null) {
      if ((this.root = current)) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    }
    // 两个子节点
    else {
      var successor = this.getSuccessor(current);

      if (current == this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      successor.left = current.left;
    }
  };
  // 找后继的方法
  BinarySearchTree.prototype.getSuccessor = function(delNode) {
    var successor = delNode;
    var current = delNode.right;
    var successorParent = delNode;

    while (current != null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }
    if (successor != delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }

    return successor;
  };
}

// 测试代码
// 1. 创建 BinarySearchTree
var bst = new BinarySearchTree();

// 2. 插入数据
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

// 3. 测试遍历
// 3.1 测试先序遍历
var resultStr = "";
bst.preorderTraversal(function(key) {
  resultStr += key + "-";
});
console.log(resultStr);

// 测试中序遍历
resultStr = "";
bst.inorderTraversal(function(key) {
  resultStr += key + "-";
});
console.log(resultStr);

// 测试后续遍历
resultStr = "";
bst.postorderTraversal(function(key) {
  resultStr += key + "-";
});
console.log(resultStr);

// 测试层序遍历
resultStr = "";
bst.levelorderTraversal(function(key) {
  resultStr += key + "-";
});
console.log(resultStr);

// 测试最值
console.log(bst.max(), "--max");
console.log(bst.min(), "--min");

// 测试搜索方法
console.log(bst.search(25));
console.log(bst.search(24));
console.log(bst.search(2));

// 得失删除代码

bst.remove(9);
bst.remove(7);
bst.remove(15);
resultStr = "";
bst.postorderTraversal(function(key) {
  resultStr += key + "-";
});
console.log(resultStr);
