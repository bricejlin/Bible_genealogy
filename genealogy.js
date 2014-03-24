// Core LinkedList object
function LinkedList() {}
LinkedList.prototype = {
  first: null,
  last: null,
  length: 0
};

// Geneology
LinkedList.Genealogy = function() {};
LinkedList.Genealogy.prototype = new LinkedList();

// Person node
LinkedList.Genealogy.Person = function(dataObj) {
  this.name = dataObj.name;
  this.isChildOf = null;
  this.isParentOf = [];
  this.spouse = [];
  this.siblings = [];
};

LinkedList.Genealogy.prototype.insertChild = function(parent, child) {
  var parentsChildren = parent.isParentOf;

  child.isChildOf = parent;
  parentsChildren.push(child);

  // Add siblings if any
  if (parentsChildren.length > 1) {
    for (var i = 0; i < parentsChildren.length - 1; i++) {
      child.siblings.push(parentsChildren[i]);
      parentsChildren[i].siblings.push(child);
    }
  }
  this.length++;
}

LinkedList.Genealogy.prototype.initialize = function() {
  var adam = new LinkedList.Genealogy.Person({
    name: 'adam',
    spouse: ['eve']
  });

  var jesus = new LinkedList.Genealogy.Person({
    name: 'jesus christ'
  });

  adam.isChildOf = 'GOD';
  jesus.isChildOf = ['mary', 'joseph'];
  this.first = adam;
  this.last = jesus;
  this.length = 2;
}


var genealogy = new LinkedList.Genealogy();
genealogy.initialize();

// Adding children to genealogy tree
genealogy.insertChild(
  genealogy.first, // Whats a better way to target a specific node?
  new LinkedList.Genealogy.Person({
    name: 'cain'
  })
);
genealogy.insertChild(
  genealogy.first,
  new LinkedList.Genealogy.Person({
    name: 'abel'
  })
);
