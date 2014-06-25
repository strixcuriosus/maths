var Tree = function (value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function (value) {
  var child = new Tree(value);
  this.children.push(child);
  return child;
}

Tree.prototype.breadthFirstSearch = function (target) {
  var resultNode = null;
  var nodesToCheck = [this];
  var currentNode; 
  /*
   when breadthFirstSearch is invoked as a tree method, 
   the keyword this will refer to the tree object, i.e. the root node
  */

  var checkNode = function(node) {
    if(node.value === target) {
      resultNode = node;
    }
  }

  while((!resultNode) && nodesToCheck.length > 0) {
    currentNode = nodesToCheck.shift();
    for (var i = 0; i < currentNode.children.length; i++) {
      nodesToCheck.push(currentNode.children[i]);
    }
    checkNode(currentNode);
  }

  return resultNode; //returns the node whose value matches target
}


/*
var tree = new Tree(12);
var child1 = tree.addChild(30);
var child2 = tree.addChild(50);
var grandchild = child1.addChild(999);
var greatgrandchild = grandchild.addChild(42);

tree.breadthFirstSearch(42); // {value: 42, children: []} 
*/