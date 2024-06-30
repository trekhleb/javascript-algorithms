// Node class represents a single node in a linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class represents the entire linked list
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // Prints all the values in the linked list
  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  // Returns the value of the head node
  getHead() {
    if (this.head === null) {
      return null;
    } else {
      return this.head.value;
    }
  }

  // Returns the value of the tail node
  getTail() {
    if (this.tail === null) {
      return null;
    } else {
      return this.tail.value;
    }
  }

  // Returns the length of the linked list
  getLength() {
    return this.length;
  }

  // Clears the linked list
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    updateDropdown();
  }

  // Adds a new node with the given value at the end of the linked list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    updateDropdown();
    return this;
  }

  // Removes and returns the last node from the linked list
  pop() {
    if (this.length === 0) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    updateDropdown();
    return temp;
  }

  // Adds a new node with the given value at the start of the linked list
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    updateDropdown();
    return this;
  }

  // Removes and returns the first node from the linked list
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    updateDropdown();
    return temp;
  }

  // Returns the value of the node at the given index
  get(index, value = true) {
    if (index < 1 || index > this.length) return undefined;
    let temp = this.head;
    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }
    if (value) return temp.value;
    else return temp;
  }

  // Sets the value of the node at the given index
  set(index, value) {
    let temp = this.get(index, false);
    if (temp) {
      temp.value = value;
      updateDropdown();
      return true;
    }
    return false;
  }

  // Inserts a new node with the given value at the specified index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const newNode = new Node(value);
    const temp = this.get(index, false);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    updateDropdown();
    return true;
  }

  // Removes and returns the node at the specified index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const before = this.get(index, false);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    updateDropdown();
    return temp;
  }

  // Reverses the linked list
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    updateDropdown();
  }
}

let list;
let isCollapse = false;

if (!list) {
  document.getElementById("output").style.display = "none";
  document.getElementById("outputNode").style.display = "none";
  document.getElementById("pushContainer").style.display = "none";
  document.getElementById("unshiftContainer").style.display = "none";
  document.getElementById("indexContainer").style.display = "none";
}

function createLinkedList() {
  document.getElementById("output").style.display = "block";
  document.getElementById("outputNode").style.display = "block";
  const initialValue = document.getElementById("initialValue").value;
  if (initialValue.trim() === "") initialValue = "0";
  list = new LinkedList(initialValue);
  printOutput("Linked List created with initial value: " + initialValue);
  printList();
  document.getElementById("initialValue").value = "";
  document.getElementById("pushContainer").style.display = "flex";
  document.getElementById("unshiftContainer").style.display = "flex";
  document.getElementById("indexContainer").style.display = "block";
  updateDropdown();
}

function pushValue() {
  const value = document.getElementById("pushValue").value;
  if (value.trim() === "") value = "0";
  list.push(value);
  printOutput("Pushed value: " + value);
  printList();
  if (list.length > 0) {
    document.getElementById("outputNode").style.display = "block";
  }
  document.getElementById("pushValue").value = "";
}

function unshiftValue() {
  const value = document.getElementById("unshiftValue").value;
  if (value.trim() === "") value = "0";
  list.unshift(value);
  printOutput("Unshifted value: " + value);
  printList();
  if (list.length > 0) {
    document.getElementById("outputNode").style.display = "block";
  }
  document.getElementById("unshiftValue").value = "";
}

function popValue() {
  const popped = list.pop();
  printOutput("Popped value: " + (popped ? popped.value : "List is empty"));
  printList();

  if (list.length === 0) {
    document.getElementById("outputNode").style.display = "none";
  }
}

function shiftValue() {
  const shifted = list.shift();
  printOutput("Shifted value: " + (shifted ? shifted.value : "List is empty"));

  printList();

  if (list.length === 0) {
    document.getElementById("outputNode").style.display = "none";
  }
}

function printList() {
  let output = "";
  let temp = list.head;
  while (temp !== null) {
    output += temp.value + " -> ";
    temp = temp.next;
  }
  output += "null";
  printOutput2(output);
}

function clearList() {
  document.getElementById("outputNode").style.display = "none";
  document.getElementById("pushContainer").style.display = "none";
  document.getElementById("unshiftContainer").style.display = "none";
  document.getElementById("indexContainer").style.display = "none";
  list.clear();
  printOutput("List cleared");
  printList();
}

function getHead() {
  const head = list.getHead();
  printOutput("Head value: " + (head !== null ? head : "List is empty"));

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.remove("length-node");
    }

    nodes[0].classList.add("head-node");
  }
}

function getTail() {
  const tail = list.getTail();
  printOutput("Tail value: " + (tail !== null ? tail : "List is empty"));

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.remove("length-node");
    }
    nodes[list.length - 1].classList.add("tail-node");
  }
}

function getLength() {
  const length = list.getLength();
  printOutput("List length: " + length);

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.add("length-node");
    }
  }
}

function updateDropdown() {
  const dropdown = document.getElementById("indexDropdown");

  dropdown.innerHTML =
    '<option value="" disabled selected>Select an index</option>';

  for (let i = 1; i <= list.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    dropdown.appendChild(option);
  }

  const dropdown2 = document.getElementById("indexSetDropdown");

  dropdown2.innerHTML =
    '<option value="" disabled selected>Select an index</option>';
  for (let i = 1; i <= list.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;

    dropdown2.appendChild(option);
  }

  const dropdown3 = document.getElementById("indexInsertDropdown");

  dropdown3.innerHTML =
    '<option value="" disabled selected>Select an index</option>';
  for (let i = 1; i <= list.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;

    dropdown3.appendChild(option);
  }

  const dropdown4 = document.getElementById("indexRemoveDropdown");

  dropdown4.innerHTML =
    '<option value="" disabled selected>Select an index</option>';
  for (let i = 1; i <= list.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;

    dropdown4.appendChild(option);
  }
}

function getNodeAtIndex() {
  const dropdown = document.getElementById("indexDropdown");
  const index = parseInt(dropdown.value);
  const node = list.get(index);
  document.getElementById("output").textContent = JSON.stringify(node, null, 2);

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.remove("length-node");
    }
    nodes[index - 1].classList.add("head-node");
  }
}

function getNodeAtSetIndex() {
  const dropdown = document.getElementById("indexSetDropdown");
  const index = parseInt(dropdown.value);
  const node = list.get(index);
  document.getElementById("output").textContent = JSON.stringify(node, null, 2);

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.remove("length-node");
    }
    nodes[index - 1].classList.add("head-node");
  }

  isValid();
}

function getNodeAtInsertIndex() {
  const dropdown = document.getElementById("indexInsertDropdown");
  const index = parseInt(dropdown.value);
  const node = list.get(index);
  document.getElementById("output").textContent = JSON.stringify(node, null, 2);

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.remove("length-node");
    }
    if (index > 1) {
      nodes[index - 1].classList.add("tail-node");
      nodes[index - 2].classList.add("tail-node");
    } else nodes[index - 1].classList.add("tail-node");
  }

  isInsertValid();
}

function getNodeAtRemoveIndex() {
  const dropdown = document.getElementById("indexRemoveDropdown");
  const index = parseInt(dropdown.value);
  const node = list.get(index);
  document.getElementById("output").textContent = JSON.stringify(node, null, 2);

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.remove("length-node");
    }
    nodes[index - 1].classList.add("head-node");
  }

  isRemoveValid();
}

function getAllNodes() {
  const node = list.get(1, false);
  if (list.getLength() === 0)
    document.getElementById("output").textContent = "The list is empty";
  else
    document.getElementById("output").textContent = JSON.stringify(
      node,
      null,
      2
    );

  const nodes = document.getElementsByClassName("node");
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.remove("head-node");
      nodes[i].classList.remove("tail-node");
      nodes[i].classList.add("length-node");
    }
  }
}

function insertIndex() {
  let index = document.getElementById("indexInsertDropdown").value - 1; // Convert to zero-based index
  let value = document.getElementById("insertValue").value;

  if (list.insert(index, value)) {
    printOutput(`Inserted value ${value} at index ${index + 1}`);
    printList();
    document.getElementById("insertValue").value = "";
    document.getElementById("insertSubmit").disabled = true;
  } else {
    printOutput("Insertion failed. Check the index and try again.");
  }
}

function setIndex() {
  let index = document.getElementById("indexSetDropdown").value;
  let value = document.getElementById("setValue").value;

  list.set(index, value);
  printOutput(`New value for index ${index} is ${value}`);
  printList();
  document.getElementById("setValue").value = "";
  document.getElementById("setSubmit").disabled = true;
}

function removeIndex() {
  let index = document.getElementById("indexRemoveDropdown").value;

  printOutput(`Deleted value: ${list.get(index)}`);
  list.remove(index - 1);

  printList();

  document.getElementById("removeSubmit").disabled = true;

  if (list.length === 0)
    document.getElementById("outputNode").style.display = "none";
}

function isValid() {
  let value = document.getElementById("setValue").value;
  let index = document.getElementById("indexSetDropdown").value;

  printOutput(
    `Expected result: \'${list.get(index)}\' will become \'${value}\'`
  );

  if (value.trim().length === 0 || index === "") {
    document.getElementById("setSubmit").disabled = true;
  } else {
    document.getElementById("setSubmit").disabled = false;
  }
}

function isInsertValid() {
  let value = document.getElementById("insertValue").value;
  let index = document.getElementById("indexInsertDropdown").value;

  if (index > 1)
    printOutput(
      `Expected result: ${list.get(index - 1)} -> ${value} -> ${list.get(
        index
      )}`
    );
  else printOutput(`Expected result: ${value} -> ${list.get(index)}`);

  if (value.trim().length === 0 || index === "") {
    document.getElementById("insertSubmit").disabled = true;
  } else {
    document.getElementById("insertSubmit").disabled = false;
  }
}

function isRemoveValid() {
  let index = document.getElementById("indexRemoveDropdown").value;

  printOutput(`Expected value to be removed:  ${list.get(index)}`);

  if (index === "") {
    document.getElementById("removeSubmit").disabled = true;
  } else {
    document.getElementById("removeSubmit").disabled = false;
  }
}

function reverseNodes() {
  if (list.getLength() > 0) {
    list.reverse();
    printList();
    printOutput(`List has been reversed`);
  } else {
    printOutput(`The list is empty`);
  }
}

function printOutput(text) {
  document.getElementById("output").textContent = text;
  document.getElementById("setSubmit").disabled = true;
  document.getElementById("insertSubmit").disabled = true;
  document.getElementById("removeSubmit").disabled = true;
}

function printOutput2(text) {
  let elements = text.split(" -> ");

  const outputContainer = document.getElementById("outputNode");
  outputContainer.innerHTML = "";

  elements.forEach((el) => {
    if (el.trim() === "null") return;
    const node = document.createElement("div");
    node.className = "node";
    node.textContent = el.trim();

    const arrow = document.createElement("div");
    arrow.className = "arrow";
    arrow.innerHTML = "→";

    outputContainer.appendChild(node);
    outputContainer.appendChild(arrow);
  });

  if (outputContainer.lastChild) {
    outputContainer.removeChild(outputContainer.lastChild);
  }
}

function toggle() {
  const elements = document.getElementsByClassName("collapseContainer");
  for (let i = 0; i < elements.length; i++) {
    if (!isCollapse) {
      elements[i].style.display = "none";
      document.getElementById("toggleColapse").textContent = "⬇";
    } else {
      elements[i].style.display = "inline";
      document.getElementById("toggleColapse").textContent = "⬆";
    }
  }
  isCollapse = !isCollapse;
}
