export default class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {//create a constructor.
    
    this.value = value;//the this keyword is used to refer to the object being created pretty much like a memory locatin
    this.next = next;//this is to store the address of the next node
    this.previous = previous;//this is to store the address of the previous node
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
