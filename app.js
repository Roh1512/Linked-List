class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    //adds a new node containing value to the end of the list
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  }

  prepend(value) {
    //adds a new node containing value to the start of the list
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    //returns the total number of nodes in the list
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  headValue() {
    //returns the first node in the list
    return this.head;
  }
  tail() {
    //returns the last node in the list
    let currentNode = this.head;
    while (currentNode && currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    //returns the node at the given index
    if (index < 0) {
      return null;
    }
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return null;
  }

  pop() {
    //removes the last element from the list
    if (!this.head) {
      return null;
    }
    if (!this.head.nextNode) {
      const poppedValue = this.head.value;
      this.head = null;
      return poppedValue;
    }
    let currentNode = this.head;
    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    const poppedValue = currentNode.nextNode.value;
    currentNode.nextNode = null;
    return poppedValue;
  }

  contains(value) {
    //returns true if the passed in value is in the list and otherwise returns false.
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    //returns the index of the node containing value, or null if not found.
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return null;
  }

  toString() {
    //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let result = "";
    let currentNode = this.head;
    while (currentNode) {
      result += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    // inserts a new node with the provided value at the given index.
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    const prevNode = this.at(index - 1);
    if (prevNode) {
      newNode.nextNode = prevNode.nextNode;
      prevNode.nextNode = newNode;
    }
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    const prevNode = this.at(index - 1);
    if (prevNode && prevNode.nextNode) {
      prevNode.nextNode = prevNode.nextNode.nextNode;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);

console.log(linkedList.toString());
console.log("size = " + linkedList.size());
console.log("Head = " + linkedList.headValue().value);
console.log("Tail = " + linkedList.tail().value);
console.log("Value at index 2 = " + linkedList.at(2).value);
console.log(
  "Popped Value = " + linkedList.pop() + ".\n Linked List = " + linkedList
);
console.log('Does LL has "2" = ' + linkedList.contains(2));
console.log('Does LL has "4" = ' + linkedList.contains(4));

console.log("Index of 2 = " + linkedList.find(2));

console.log(linkedList.toString());

console.log("Inserting '3' at index '1'");
linkedList.insertAt(3, 1);
console.log(linkedList.toString());

console.log("Removing value at index 2");
linkedList.removeAt(2);
console.log(linkedList.toString());
