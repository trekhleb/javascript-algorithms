import DoublyLinkedList from '../DoublyLinkedList';

describe('DoublyLinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.tail.previous.value).toBe(1);
    expect(linkedList.toString()).toBe('1,2');
  });

  it('should prepend node to linked list', () => {
    const linkedList = new DoublyLinkedList();

    linkedList.prepend(2);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');

    linkedList.append(1);
    linkedList.prepend(3);

    expect(linkedList.head.next.next.previous).toBe(linkedList.head.next);
    expect(linkedList.tail.previous.next).toBe(linkedList.tail);
    expect(linkedList.tail.previous.value).toBe(2);
    expect(linkedList.toString()).toBe('3,2,1');
  });

  it('should create linked list from array', () => {
    const linkedList = new DoublyLinkedList();
    linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

    expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5');
  });

  it('should delete node by value from linked list', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.delete(5)).toBeNull();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('5');

    const deletedNode = linkedList.delete(3);
    expect(deletedNode.value).toBe(3);
    expect(linkedList.tail.previous.previous.value).toBe(2);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(3);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(1);
    expect(linkedList.toString()).toBe('2,4,5');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.head.next.next).toBe(linkedList.tail);
    expect(linkedList.tail.previous.previous).toBe(linkedList.head);
    expect(linkedList.tail.toString()).toBe('5');

    linkedList.delete(5);
    expect(linkedList.toString()).toBe('2,4');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('4');

    linkedList.delete(4);
    expect(linkedList.toString()).toBe('2');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');
    expect(linkedList.head).toBe(linkedList.tail);

    linkedList.delete(2);
    expect(linkedList.toString()).toBe('');
  });

  it('should delete linked list tail', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.deleteTail()).toBeNull();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('3');

    const deletedNode1 = linkedList.deleteTail();

    expect(deletedNode1.value).toBe(3);
    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('2');

    const deletedNode2 = linkedList.deleteTail();

    expect(deletedNode2.value).toBe(2);
    expect(linkedList.toString()).toBe('1');
    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('1');

    const deletedNode3 = linkedList.deleteTail();

    expect(deletedNode3.value).toBe(1);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should delete linked list head', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.deleteHead()).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('2');

    const deletedNode1 = linkedList.deleteHead();

    expect(deletedNode1.value).toBe(1);
    expect(linkedList.head.previous).toBeNull();
    expect(linkedList.toString()).toBe('2');
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');

    const deletedNode2 = linkedList.deleteHead();

    expect(deletedNode2.value).toBe(2);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should be possible to store objects in the list and to print them out', () => {
    const linkedList = new DoublyLinkedList();

    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };

    linkedList
      .append(nodeValue1)
      .prepend(nodeValue2);

    const nodeStringifier = (value) => `${value.key}:${value.value}`;

    expect(linkedList.toString(nodeStringifier)).toBe('key2:2,key1:1');
  });

  it('should find node by value', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.find({ value: 5 })).toBeNull();

    linkedList.append(1);
    expect(linkedList.find({ value: 1 })).toBeDefined();

    linkedList
      .append(2)
      .append(3);

    const node = linkedList.find({ value: 2 });

    expect(node.value).toBe(2);
    expect(linkedList.find({ value: 5 })).toBeNull();
  });

  it('should find node by callback', () => {
    const linkedList = new DoublyLinkedList();

    linkedList
      .append({ value: 1, key: 'test1' })
      .append({ value: 2, key: 'test2' })
      .append({ value: 3, key: 'test3' });

    const node = linkedList.find({ callback: (value) => value.key === 'test2' });

    expect(node).toBeDefined();
    expect(node.value.value).toBe(2);
    expect(node.value.key).toBe('test2');
    expect(linkedList.find({ callback: (value) => value.key === 'test5' })).toBeNull();
  });

  it('should find node by means of custom compare function', () => {
    const comparatorFunction = (a, b) => {
      if (a.customValue === b.customValue) {
        return 0;
      }

      return a.customValue < b.customValue ? -1 : 1;
    };

    const linkedList = new DoublyLinkedList(comparatorFunction);

    linkedList
      .append({ value: 1, customValue: 'test1' })
      .append({ value: 2, customValue: 'test2' })
      .append({ value: 3, customValue: 'test3' });

    const node = linkedList.find({
      value: { value: 2, customValue: 'test2' },
    });

    expect(node).toBeDefined();
    expect(node.value.value).toBe(2);
    expect(node.value.customValue).toBe('test2');
    expect(linkedList.find({ value: 2, customValue: 'test5' })).toBeNull();
  });

  it('should reverse linked list', () => {
    const linkedList = new DoublyLinkedList();

    // Add test values to linked list.
    linkedList
      .append(1)
      .append(2)
      .append(3)
      .append(4);

    expect(linkedList.toString()).toBe('1,2,3,4');
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(4);

    // Reverse linked list.
    linkedList.reverse();

    expect(linkedList.toString()).toBe('4,3,2,1');

    expect(linkedList.head.previous).toBeNull();
    expect(linkedList.head.value).toBe(4);
    expect(linkedList.head.next.value).toBe(3);
    expect(linkedList.head.next.next.value).toBe(2);
    expect(linkedList.head.next.next.next.value).toBe(1);

    expect(linkedList.tail.next).toBeNull();
    expect(linkedList.tail.value).toBe(1);
    expect(linkedList.tail.previous.value).toBe(2);
    expect(linkedList.tail.previous.previous.value).toBe(3);
    expect(linkedList.tail.previous.previous.previous.value).toBe(4);

    // Reverse linked list back to initial state.
    linkedList.reverse();

    expect(linkedList.toString()).toBe('1,2,3,4');

    expect(linkedList.head.previous).toBeNull();
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
    expect(linkedList.head.next.next.next.value).toBe(4);

    expect(linkedList.tail.next).toBeNull();
    expect(linkedList.tail.value).toBe(4);
    expect(linkedList.tail.previous.value).toBe(3);
    expect(linkedList.tail.previous.previous.value).toBe(2);
    expect(linkedList.tail.previous.previous.previous.value).toBe(1);
  });
});
