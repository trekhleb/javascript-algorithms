import CircularLinkedList from '../CircularLinkedList';

/**
 * Circular linked list test. Based on linked list test, but circular.
 */
describe('CircularLinkedList', () => {
  it('should create empty circular linked list', () => {
    const circularLinkedList = new CircularLinkedList();
    expect(circularLinkedList.toString()).toBe('');
  });

  it('should append node to circular linked list', () => {
    const circularLinkedList = new CircularLinkedList();

    expect(circularLinkedList.head).toBeNull();
    expect(circularLinkedList.tail).toBeNull();

    circularLinkedList.append(1);
    expect(circularLinkedList.head.toString()).toBe('1');
    expect(circularLinkedList.tail.toString()).toBe('1');

    circularLinkedList.append(2);
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(2);
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);
    expect(circularLinkedList.toString()).toBe('1,2');
  });

  it('should prepend node to circular linked list', () => {
    const circularLinkedList = new CircularLinkedList();

    circularLinkedList.prepend(1);
    expect(circularLinkedList.head.toString()).toBe('1');
    expect(circularLinkedList.tail.toString()).toBe('1');

    circularLinkedList.append(2);
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(2);
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);
    expect(circularLinkedList.toString()).toBe('1,2');

    circularLinkedList.prepend(3);
    expect(circularLinkedList.head.value).toBe(3);
    expect(circularLinkedList.tail.value).toBe(2);
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);
    expect(circularLinkedList.toString()).toBe('3,1,2');
  });

  it('should insert node to circular linked list', () => {
    const circularLinkedList = new CircularLinkedList();

    circularLinkedList.insert(4, 3);
    expect(circularLinkedList.head.toString()).toBe('4');
    expect(circularLinkedList.tail.toString()).toBe('4');

    circularLinkedList.insert(3, 2);
    circularLinkedList.insert(2, 1);
    circularLinkedList.insert(1, -7);
    circularLinkedList.insert(10, 9);

    expect(circularLinkedList.toString()).toBe('1,4,2,3,10');
  });

  it('should create circular linked list from array', () => {
    const circularLinkedList = new CircularLinkedList();
    circularLinkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

    expect(circularLinkedList.toString()).toBe('1,1,2,3,3,3,4,5');
  });

  it('should delete node by value from circular linked list', () => {
    const circularLinkedList = new CircularLinkedList();

    expect(circularLinkedList.delete(5)).toBeNull();

    circularLinkedList.append(1);
    circularLinkedList.append(1);
    circularLinkedList.append(2);
    circularLinkedList.append(3);
    circularLinkedList.append(3);
    circularLinkedList.append(3);
    circularLinkedList.append(4);
    circularLinkedList.append(5);

    expect(circularLinkedList.head.toString()).toBe('1');
    expect(circularLinkedList.tail.toString()).toBe('5');

    let deletedNode = circularLinkedList.delete(3);
    expect(deletedNode.value).toBe(3);
    expect(circularLinkedList.toString()).toBe('1,1,2,4,5');

    deletedNode = circularLinkedList.delete(3);
    expect(deletedNode).toBeNull();
    expect(circularLinkedList.toString()).toBe('1,1,2,4,5');

    deletedNode = circularLinkedList.delete(1);
    expect(deletedNode.value).toBe(1);
    expect(circularLinkedList.toString()).toBe('2,4,5');

    expect(circularLinkedList.head.toString()).toBe('2');
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);
    expect(circularLinkedList.tail.toString()).toBe('5');

    deletedNode = circularLinkedList.delete(5);
    expect(deletedNode.value).toBe(5);
    expect(circularLinkedList.toString()).toBe('2,4');

    expect(circularLinkedList.head.toString()).toBe('2');
    expect(circularLinkedList.tail.toString()).toBe('4');

    deletedNode = circularLinkedList.delete(4);
    expect(deletedNode.value).toBe(4);
    expect(circularLinkedList.toString()).toBe('2');

    expect(circularLinkedList.head.toString()).toBe('2');
    expect(circularLinkedList.tail.toString()).toBe('2');

    deletedNode = circularLinkedList.delete(2);
    expect(deletedNode.value).toBe(2);
    expect(circularLinkedList.toString()).toBe('');
  });

  it('should delete non-existent node by value from circular linked list', () => {
    const circularLinkedList = new CircularLinkedList();

    expect(circularLinkedList.delete(5)).toBeNull();

    circularLinkedList.append(1);
    circularLinkedList.append(1);
    circularLinkedList.append(3);
    circularLinkedList.append(3);
    circularLinkedList.append(3);
    circularLinkedList.append(4);
    circularLinkedList.append(5);

    expect(circularLinkedList.head.toString()).toBe('1');
    expect(circularLinkedList.tail.toString()).toBe('5');

    const notDeletedNode = circularLinkedList.delete(2);
    expect(notDeletedNode).toBe(null);
    expect(circularLinkedList.toString()).toBe('1,1,3,3,3,4,5');
  });

  it('should delete circular linked list tail', () => {
    const circularLinkedList = new CircularLinkedList();

    expect(circularLinkedList.deleteTail()).toBeNull();

    circularLinkedList.append(1);
    circularLinkedList.append(2);
    circularLinkedList.append(3);

    expect(circularLinkedList.head.toString()).toBe('1');
    expect(circularLinkedList.tail.toString()).toBe('3');

    const deletedNode1 = circularLinkedList.deleteTail();

    expect(deletedNode1.value).toBe(3);
    expect(circularLinkedList.toString()).toBe('1,2');
    expect(circularLinkedList.head.toString()).toBe('1');
    expect(circularLinkedList.tail.toString()).toBe('2');

    const deletedNode2 = circularLinkedList.deleteTail();

    expect(deletedNode2.value).toBe(2);
    expect(circularLinkedList.toString()).toBe('1');
    expect(circularLinkedList.head.toString()).toBe('1');
    expect(circularLinkedList.tail.toString()).toBe('1');

    const deletedNode3 = circularLinkedList.deleteTail();

    expect(deletedNode3.value).toBe(1);
    expect(circularLinkedList.toString()).toBe('');
    expect(circularLinkedList.head).toBeNull();
    expect(circularLinkedList.tail).toBeNull();
  });

  it('should delete circular linked list head', () => {
    const circularLinkedList = new CircularLinkedList();

    expect(circularLinkedList.deleteHead()).toBeNull();

    circularLinkedList.append(1);
    circularLinkedList.append(2);

    expect(circularLinkedList.head.toString()).toBe('1');
    expect(circularLinkedList.tail.toString()).toBe('2');

    const deletedNode1 = circularLinkedList.deleteHead();

    expect(deletedNode1.value).toBe(1);
    expect(circularLinkedList.toString()).toBe('2');
    expect(circularLinkedList.head.toString()).toBe('2');
    expect(circularLinkedList.tail.toString()).toBe('2');

    const deletedNode2 = circularLinkedList.deleteHead();

    expect(deletedNode2.value).toBe(2);
    expect(circularLinkedList.toString()).toBe('');
    expect(circularLinkedList.head).toBeNull();
    expect(circularLinkedList.tail).toBeNull();
  });

  it('should be possible to store objects in the list and to print them out', () => {
    const circularLinkedList = new CircularLinkedList();

    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };

    circularLinkedList
      .append(nodeValue1)
      .prepend(nodeValue2);

    const nodeStringifier = (value) => `${value.key}:${value.value}`;

    expect(circularLinkedList.toString(nodeStringifier)).toBe('key2:2,key1:1');
  });

  it('should find node by value', () => {
    const circularLinkedList = new CircularLinkedList();

    expect(circularLinkedList.find({ value: 5 })).toBeNull();

    circularLinkedList.append(1);
    expect(circularLinkedList.find({ value: 1 })).toBeDefined();

    circularLinkedList
      .append(2)
      .append(3);

    const node = circularLinkedList.find({ value: 2 });

    expect(node.value).toBe(2);
    expect(circularLinkedList.find({ value: 5 })).toBeNull();
  });

  it('should find node by callback', () => {
    const circularLinkedList = new CircularLinkedList();

    circularLinkedList
      .append({ value: 1, key: 'test1' })
      .append({ value: 2, key: 'test2' })
      .append({ value: 3, key: 'test3' });

    const node = circularLinkedList.find({ callback: (value) => value.key === 'test2' });

    expect(node).toBeDefined();
    expect(node.value.value).toBe(2);
    expect(node.value.key).toBe('test2');
    expect(circularLinkedList.find({ callback: (value) => value.key === 'test5' })).toBeNull();
  });

  it('should create circular linked list from array', () => {
    const circularLinkedList = new CircularLinkedList();
    circularLinkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

    expect(circularLinkedList.toString()).toBe('1,1,2,3,3,3,4,5');
  });

  it('should find node by means of custom compare function', () => {
    const comparatorFunction = (a, b) => {
      if (a.customValue === b.customValue) {
        return 0;
      }

      return a.customValue < b.customValue ? -1 : 1;
    };

    const circularLinkedList = new CircularLinkedList(comparatorFunction);

    circularLinkedList
      .append({ value: 1, customValue: 'test1' })
      .append({ value: 2, customValue: 'test2' })
      .append({ value: 3, customValue: 'test3' });

    const node = circularLinkedList.find({
      value: { value: 2, customValue: 'test2' },
    });

    expect(node).toBeDefined();
    expect(node.value.value).toBe(2);
    expect(node.value.customValue).toBe('test2');
    expect(circularLinkedList.find({ value: { value: 2, customValue: 'test5' } })).toBeNull();
  });

  it('should find preferring callback over compare function', () => {
    const greaterThan = (value, compareTo) => (value > compareTo ? 0 : 1);

    const circularLinkedList = new CircularLinkedList(greaterThan);
    circularLinkedList.fromArray([1, 2, 3, 4, 5]);

    let node = circularLinkedList.find({ value: 3 });
    expect(node.value).toBe(4);

    node = circularLinkedList.find({ callback: (value) => value < 3 });
    expect(node.value).toBe(1);
  });

  it('should convert to array', () => {
    const circularLinkedList = new CircularLinkedList();
    circularLinkedList.append(1);
    circularLinkedList.append(2);
    circularLinkedList.append(3);
    expect(circularLinkedList.toArray().map((node) => node.value).join(',')).toBe('1,2,3');
  });

  it('should reverse circular linked list', () => {
    const circularLinkedList = new CircularLinkedList();

    // Add test values to circular linked list.
    circularLinkedList
      .append(1)
      .append(2)
      .append(3);

    expect(circularLinkedList.toString()).toBe('1,2,3');
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(3);

    // Reverse circular linked list.
    circularLinkedList.reverse();

    expect(circularLinkedList.toString()).toBe('3,2,1');
    expect(circularLinkedList.head.value).toBe(3);
    expect(circularLinkedList.head.next.value).toBe(2);
    expect(circularLinkedList.head.next.next.value).toBe(1);
    expect(circularLinkedList.head.next.next.next).toBe(circularLinkedList.head);

    expect(circularLinkedList.tail.value).toBe(1);
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);

    // Reverse circular linked list back to initial state.
    circularLinkedList.reverse();

    expect(circularLinkedList.toString()).toBe('1,2,3');
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.head.next.value).toBe(2);
    expect(circularLinkedList.head.next.next.value).toBe(3);
    expect(circularLinkedList.head.next.next.next).toBe(circularLinkedList.head);

    expect(circularLinkedList.tail.value).toBe(3);
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);
  });

  it('should have circular reference', () => {
    const circularLinkedList = new CircularLinkedList();

    circularLinkedList.append(1);
    circularLinkedList.append(2);
    circularLinkedList.append(3);
    circularLinkedList.append(4);
    circularLinkedList.append(5);

    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);

    circularLinkedList.delete(1);
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);

    circularLinkedList.deleteTail();
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);

    circularLinkedList.delete(5);
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);

    circularLinkedList.deleteHead();
    expect(circularLinkedList.tail.next).toBe(circularLinkedList.head);
  });
});
