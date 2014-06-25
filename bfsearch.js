var Tree = function(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function (value) {
  var child = new Tree(value);
  this.children.push(child);
  return child;
}

